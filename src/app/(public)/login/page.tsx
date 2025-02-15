import { LoadingButton, TextField } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Login() {
    return (
        <main className='flex justify-center items-center p-3 w-screen h-screen bg-[#f5f7fc]'>
            <div className="flex gap-8 flex-col bg-white rounded-md p-16 w-full max-w-lg shadow-paper">
                <Image src={"/img/Cazio_logo-p-500.png"} width={160} height={50} alt='Logo'/>
                <p className='text-body text-2xl font-light leading-4'>Faça login para continuar</p>
                <TextField type='text' label='Número de telemóvel' placeholder='Informe o seu telefone...'/>   
                <TextField type='password' label='Senha' placeholder='Informe a sua senha...'/>
                <p className='text-balance text-input-label font-normal'>Esqueceu a senha? <Link href={"#"} className='text-primary-light hover:underline'>Repor senha</Link></p>
                <Link href={"/sign-up"} className='font-normal text-primary-light hover:underline'>Criar Conta</Link>
                <Link href={"/users"} className='block w-full'>
                    <LoadingButton className='block w-full'>Iniciar sessão Admin</LoadingButton>
                </Link>
                <Link href={"/users/1"} className='block w-full'>
                    <LoadingButton className='block w-full'>Iniciar sessão Cliente</LoadingButton>
                </Link>
            </div>
        </main>
    )
}
