"use client";

import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoadingButton, TextField } from '@/components';
import LoginDTOSchema from '@/schema/AuthenticationDTOSchema';
import AuthorizationHandler from '@/lib/AuthorizationHandler';
import { AuthenticationDTO } from '@/interfaces/Authentication';
import AuthenticationService from '@/services/AuthenticationService';
import { useRouter } from 'next/navigation';
import Role from '@/interfaces/Role';

const authenticationService = new AuthenticationService();

export default function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm<AuthenticationDTO>({
        resolver: yupResolver(LoginDTOSchema)
    });

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    function onSubmit(authenticationDTO:AuthenticationDTO) {
        setLoading(true);
        authenticationService.login(authenticationDTO).then(response => {
            const {accessToken, refreshToken, user: { id, name, role}} = response.data;
            const redirect = role === Role.ROOT || Role.ADMIN ? "/users" : `/profile/${id}`;
            toast.success(`${name}, O seu login foi efetuado.`);
            router.push(AuthorizationHandler.buildAuthorization({userId: id, role, accessToken, refreshToken, redirect: redirect}));
        }).catch(error => {
            toast.success(error.response.data.message);
        }).finally(() => setLoading(false));
    }

    return (
        <main className='flex justify-center items-center p-3 w-screen h-screen bg-[#f5f7fc]'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-start gap-8 flex-col bg-white rounded-md p-16 w-full max-w-lg shadow-paper">
                <Image src={"/img/Cazio_logo-p-500.png"} width={160} height={50} alt='Logo'/>
                <p className='text-body text-2xl font-light leading-4'>Faça login para continuar</p>
                <TextField {...register("email")} message={errors.email?.message} type='email' label='Email' placeholder='Informe o seu nome...' className='w-full'/>   
                <TextField {...register("password")} message={errors.password?.message} type='password' label='Senha' placeholder='Informe a sua senha...' className='w-full'/>
                <p className='text-balance text-input-label font-normal'>Esqueceu a senha? <Link href={"#"} className='text-primary-light hover:underline'>Repor senha</Link></p>
                <Link href={"/sign-up"} className='font-normal text-primary-light hover:underline'>Criar Conta</Link>
                <LoadingButton loading={loading} className='block w-full'>Iniciar sessão</LoadingButton>
            </form>
        </main>
    )
}
