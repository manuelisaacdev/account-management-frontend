"use client";

import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useRef, useState } from 'react';

import { BiImageAdd } from "react-icons/bi";
import { GoArrowLeft } from 'react-icons/go';

import Role from '@/interfaces/Role';
import { useForm } from 'react-hook-form';
import useProfile from '@/hooks/useProfile';
import UserService from '@/services/UserService';
import { UpdateUserDTO } from '@/interfaces/User';
import UpdateUserDTOSchema from '@/schema/UpdateUserDTOSchema';
import { IconButton, LoadingButton, Select, TextField } from '@/components';

const userService = new UserService();

export default function Edit() {
    const router = useRouter();
    const params  = useParams();
    const inputRef = useRef<HTMLInputElement>(null);
    const userId = parseInt(params.userId as string);
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const {user, session} = useProfile(userId);
    const {register, handleSubmit, setValue, watch, formState: {errors}} = useForm<UpdateUserDTO>({
        defaultValues: user,
        resolver: yupResolver(UpdateUserDTOSchema)
    });

    const role = watch("role");

    function onSubmit(updateUserDTO:UpdateUserDTO) {
        console.log(updateUserDTO)
        setLoading(true);
        userService.update(userId, updateUserDTO).then(response => {
            console.log(response);
            toast.success("Conta atualizada com sucesso!");
            router.back();
        }).catch(error => {
            console.log(error)
        })
        .finally(() => setLoading(false));
    }

    
    function onSubmitUpload(evt:React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        const formData = new FormData();
        formData.append("profilePhoto", file!);

        setLoading(true);
        userService.updateProfilePhoto(userId, formData).then(response => {
            console.log(response);
            setFile(null);
            toast.success("Conta atualizada com sucesso!");
            router.back();
        }).catch(error => {
            console.log(error)
        })
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        if (user) {
            setValue("name", user.name);
            setValue("email", user.email);
            setValue("role", user.role);
            setValue("phone", user.phone);
        }
    }, [user]);

    return (
        <section className='flex flex-col max-w-[1480px] mx-auto px-5 py-8'>
            <div className="flex items-center gap-2">
                <IconButton className='text-3xl' onClick={() => router.back()}>
                    <GoArrowLeft />
                </IconButton>
                <span className='text-2xl font-normal leading-10'>Utilizadores</span>
            </div>

            <form onSubmit={onSubmitUpload} className="flex gap-1 flex-col w-full max-w-lg mt-5">
                <label className='font-normal'>Imagem</label>
                <div onClick={() => inputRef.current?.click()} className="flex gap-2 flex-col justify-center cursor-pointer items-center h-44 border border-dashed rounded-md border-[#c9d7f0] bg-white">
                    <BiImageAdd className='text-body text-4xl' />
                    <h2 className='text-body'>Clique para fazer upload</h2>
                    <p className='text-input-label'>Ficheiro deve ter menos de 1MB</p>
                    <input ref={inputRef} onChange={evt => setFile(evt.currentTarget.files!.item(0))} type="file" className='hidden' required/>
                </div>
                <LoadingButton loading={loading} disabled={!file} className='mt-5'>Salvar</LoadingButton>
            </form>

            <div className="flex gap-8 flex-col rounded-md w-full max-w-lg mt-10">
                <hr />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-8 flex-col rounded-md w-full max-w-lg mt-6">
                <TextField {...register("name")} message={errors.name?.message} type='text' label='Nome' placeholder='Informe o seu nome...'/> 
                {user?.role !== Role.ROOT && (session?.role === Role.ROOT) && (
                    <Select {...register("role")} label='Tipo de Usuário' value={role}>
                        <option value={Role.CLIENT}>Cliente</option>
                        {session?.role === Role.ROOT && (
                            <option value={Role.ADMIN}>Administrador</option>
                        )}
                    </Select>  
                )}
                <TextField {...register("phone")} message={errors.phone?.message} type='number' label='Número de telemóvel' placeholder='Informe o seu telefone...'/>   
                <TextField {...register("email")} message={errors.email?.message} type='email' label='Email' placeholder='Informe o seu nome...'/>     
                <LoadingButton loading={loading}>Guardar</LoadingButton>
            </form>
        </section>
    )
}
