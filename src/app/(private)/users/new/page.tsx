"use client";

import { toast } from 'react-toastify';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation'
import { GoArrowLeft } from 'react-icons/go'

import Role from '@/interfaces/Role'
import { useSession } from '@/hooks';
import { UserDTO } from '@/interfaces/User';
import UserService from '@/services/UserService';
import { yupResolver } from '@hookform/resolvers/yup';
import UserDTOSchema from '@/schema/UserDTOSchema';
import { IconButton, LoadingButton, Select, TextField } from '@/components'

const userService = new UserService();

export default function NewUser() {
    const {register, handleSubmit, formState: {errors}} = useForm<UserDTO>({
        resolver: yupResolver(UserDTOSchema)
    });
    const router = useRouter();
    const {session} = useSession();
    const [loading, setLoading] = useState<boolean>(false);

    function onSubmit(userDTO:UserDTO) {
        setLoading(true);
        userService.create(userDTO).then(response => {
            console.log(response);
            toast.success("Conta criada com sucesso!");
            router.push("/users");
        }).finally(() => setLoading(false));
    }

    return (
        <section className='flex flex-col max-w-[1480px] mx-auto px-5 py-8'>
            <div className="flex items-center gap-2">
                <IconButton className='text-3xl' onClick={() => router.back()}>
                    <GoArrowLeft />
                </IconButton>
                <span className='text-2xl font-normal leading-10'>Utilizadores</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-8 flex-col rounded-md w-full max-w-lg mt-10">
                <TextField {...register("name")} message={errors.name?.message} type='text' label='Nome' placeholder='Informe o seu nome...'/> 

                <Select label='Tipo de Usuário' defaultValue={Role.CLIENT}>
                    <option value={Role.CLIENT}>Cliente</option>
                    {session?.role === Role.ROOT && (
                        <option value={Role.ADMIN}>Administrador</option>
                    )}
                </Select>  
                <TextField {...register("phone")} message={errors.phone?.message} type='number' label='Número de telemóvel' placeholder='Informe o seu telefone...'/>   
                <TextField {...register("email")} message={errors.email?.message} type='email' label='Email' placeholder='Informe o seu nome...'/>   
                <TextField {...register("password")} message={errors.password?.message} type='password' label='Senha' placeholder='Informe a sua senha...'/>
                <LoadingButton loading={loading}>Criar Conta</LoadingButton>
            </form>
        </section>
    )
}
