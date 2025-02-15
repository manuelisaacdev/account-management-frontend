"use client";

import Link from 'next/link';
import React, { useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { BiImageAdd } from "react-icons/bi";
import { GoArrowLeft } from 'react-icons/go';

import Role from '@/interfaces/Role';
import { IconButton, LoadingButton, Select, TextField } from '@/components';

export default function Edit() {
    const router = useRouter();
    const params  = useParams();
    const userId = params.userId as string;
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <section className='flex flex-col max-w-[1480px] mx-auto px-5 py-8'>
            <div className="flex items-center gap-2">
                <IconButton className='text-3xl' onClick={() => router.back()}>
                    <GoArrowLeft />
                </IconButton>
                <span className='text-2xl font-normal leading-10'>Utilizadores</span>
            </div>

            <form className="flex gap-1 flex-col w-full max-w-lg mt-5">
                <label className='font-normal'>Imagem</label>
                <div onClick={() => inputRef.current?.click()} className="flex gap-2 flex-col justify-center cursor-pointer items-center h-44 border border-dashed rounded-md border-[#c9d7f0] bg-white">
                    <BiImageAdd className='text-body text-4xl' />
                    <h2 className='text-body'>Clique para fazer upload</h2>
                    <p className='text-input-label'>Ficheiro deve ter menos de 1MB</p>
                    <input ref={inputRef} type="file" className='hidden' required/>
                </div>
                <LoadingButton className='mt-5'>Salvar</LoadingButton>
            </form>

            <div className="flex gap-8 flex-col rounded-md w-full max-w-lg mt-10">
                <hr />
            </div>

            <div className="flex gap-8 flex-col rounded-md w-full max-w-lg mt-6">
                <TextField type='text' label='Nome' placeholder='Informe o seu nome...'/>
                <Select label='Tipo de Admin' defaultValue={Role.CLIENT}>
                    <option value={Role.CLIENT}>Client</option>
                    <option value={Role.ADMIN}>Administrador</option>
                </Select>
                <TextField type='number' label='Número de telemóvel' placeholder='Informe o seu telefone...'/>   
                <TextField type='email' label='Email' placeholder='Informe o seu nome...'/>   
                <LoadingButton>Guardar</LoadingButton>
            </div>
        </section>
    )
}
