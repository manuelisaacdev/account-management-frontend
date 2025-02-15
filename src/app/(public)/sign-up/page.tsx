"use client";

import Image from 'next/image'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { UserDTO } from '@/interfaces/User';
import UserDTOSchema from '@/schema/UserDTOSchema';
import { LoadingButton, TextField } from '@/components';
import UserService from '@/services/UserService';
import { useRouter } from 'next/navigation';

const userSerice = new UserService();

export default function SignUp() {
    const {register, handleSubmit, formState: {errors}} = useForm<UserDTO>({
        resolver: yupResolver(UserDTOSchema)
    });
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    function onSubmit(userDTO:UserDTO) {
        setLoading(true);
        userSerice.create(userDTO).then(response => {
            console.log(response);
            toast.success("Conta criada com sucesso! Efetue o login");
            router.push("/login");
        }).finally(() => setLoading(false));
    }

    return (
        <main className='flex justify-center items-center p-3 w-screen h-screen bg-[#f5f7fc]'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-8 flex-col bg-white rounded-md p-16 w-full max-w-lg shadow-paper">
                <Image src={"/img/Cazio_logo-p-500.png"} width={160} height={50} alt='Logo'/>
                <p className='text-body text-2xl font-light leading-4'>Inscrição simplificada</p>
                <TextField {...register("name")} message={errors.name?.message} type='text' label='Nome' placeholder='Informe o seu nome...'/>   
                <TextField {...register("phone")} message={errors.phone?.message} type='number' label='Número de telemóvel' placeholder='Informe o seu telefone...'/>   
                <TextField {...register("email")} message={errors.email?.message} type='email' label='Email' placeholder='Informe o seu nome...'/>   
                <TextField {...register("password")} message={errors.password?.message} type='password' label='Senha' placeholder='Informe a sua senha...'/>
                <LoadingButton loading={loading}>Criar Conta</LoadingButton>
            </form>
        </main>
    )
}
