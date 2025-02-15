"use client";

import { IconButton } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { GoArrowLeft } from 'react-icons/go';

export default function UserProfile() {
    const router = useRouter();
    const params  = useParams();
    const userId = params.userId as string;
    
    return (
        <div className="flex flex-col gap-10 max-w-[1480px] mx-auto p-10">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <IconButton className='text-3xl' onClick={() => router.back()}>
                        <GoArrowLeft />
                    </IconButton>
                    <span className='text-2xl font-normal leading-10'>Utilizadores</span>
                </div>

                <Link href={`/users/${userId}/edit`} className='h-[50px] px-5 flex gap-3 justify-center items-center border bg-white border-primary/25 rounded-md'>
                    <FiEdit />
                    <span>Editar</span>
                </Link>
            </div>

            <div className="flex gap-5 w-full">

                <div className="flex justify-center items-center px-20 h-80 bg-white rounded-md">
                    <Image src={"/img/Screen-Shot-2022-02-03-at-15.34.16.png"} alt="User Profile" width={200} height={200} className="rounded-full" />
                </div>

                <div className="flex flex-grow p-8 bg-white rounded-md h-80">
                    <div className="flex gap-5 flex-col flex-1">
                        <div className="flex flex-col">
                            <h2 className='text-primary font-normal'>Nome</h2>
                            <p>Nome aqui neste local</p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className='text-primary font-normal'>Telefone</h2>
                            <p>+244900900900</p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className='text-primary font-normal'>Telefone</h2>
                            <p>email@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-5 flex-col flex-1">
                        <div className="flex flex-col">
                            <h2 className='text-primary font-normal'>Tipo</h2>
                            <p>Admin</p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className='text-primary font-normal'>Último Login</h2>
                            <p>12:00 | 6/12/2022</p>
                        </div>
                        <div className="">
                            {userId}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
