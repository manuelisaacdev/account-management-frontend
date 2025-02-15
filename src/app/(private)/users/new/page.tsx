"use client";

import React from 'react'
import Role from '@/interfaces/Role'

import { useRouter } from 'next/navigation'
import { GoArrowLeft } from 'react-icons/go'

import { IconButton, LoadingButton, Select, TextField } from '@/components'

export default function NewUser() {
    const router = useRouter();

    return (
        <section className='flex flex-col max-w-[1480px] mx-auto px-5 py-8'>
            <div className="flex items-center gap-2">
                <IconButton className='text-3xl' onClick={() => router.back()}>
                    <GoArrowLeft />
                </IconButton>
                <span className='text-2xl font-normal leading-10'>Utilizadores</span>
            </div>

            <div className="flex gap-8 flex-col rounded-md w-full max-w-lg mt-10">
                <TextField type='text' label='Nome' placeholder='Informe o seu nome...'/>

                <Select label='Tipo de Admin' defaultValue={Role.CLIENT}>
                    <option value={Role.CLIENT}>Client</option>
                    <option value={Role.ADMIN}>Administrador</option>
                </Select>
                <TextField type='number' label='Número de telemóvel' placeholder='Informe o seu telefone...'/>   
                <TextField type='email' label='Email' placeholder='Informe o seu nome...'/>   
                <TextField type='password' label='Senha' placeholder='Informe a sua senha...'/>
                <LoadingButton>Criar</LoadingButton>
            </div>
        </section>
    )
}
