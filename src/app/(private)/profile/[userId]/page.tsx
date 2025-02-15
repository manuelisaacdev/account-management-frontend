"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { FiEdit } from 'react-icons/fi';
import { GoArrowLeft } from 'react-icons/go';

import { IconButton } from '@/components';
import useProfile from '@/hooks/useProfile';
import { handleResource, validateVisibility } from '@/lib/utils';

export default function UserProfile() {
    const router = useRouter();
    const params  = useParams();
    const userId = parseInt(params.userId as string);
    const {user, session} = useProfile(userId);
    
    return (
        <div className="flex flex-col gap-10 max-w-[1480px] mx-auto p-10">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <IconButton className='text-3xl' onClick={() => router.back()}>
                        <GoArrowLeft />
                    </IconButton>
                    <span className='text-2xl font-normal leading-10'>Utilizadores</span>
                </div>
                {validateVisibility(user, session) && (
                    <Link href={`/profile/${userId}/edit`} className='h-[50px] px-5 flex gap-3 justify-center items-center border bg-white border-primary/25 rounded-md'>
                        <FiEdit />
                        <span>Editar</span>
                    </Link>
                )}
            </div>

            <div className="flex gap-5 w-full">

                <div className="flex justify-center items-center px-20 h-80 bg-white rounded-md">
                    <Image src={handleResource(user?.profilePhoto)} alt="User Profile" width={200} height={200} className="rounded-full" />
                </div>

                <div className="flex flex-grow p-8 bg-white rounded-md h-80">
                    <div className="flex gap-5 flex-col flex-1">
                        <div className="flex flex-col">
                            <h2 className='text-primary font-normal'>Nome</h2>
                            <p>{user?.name}</p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className='text-primary font-normal'>Telefone</h2>
                            <p>{user?.phone}</p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className='text-primary font-normal'>Telefone</h2>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    <div className="flex gap-5 flex-col flex-1">
                        <div className="flex flex-col">
                            <h2 className='text-primary font-normal'>Tipo</h2>
                            <p>{user?.role}</p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className='text-primary font-normal'>Último Login</h2>
                            <p>12:00 | 6/12/2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
