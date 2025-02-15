"use client";

import Link from 'next/link';
import Image from 'next/image'
import Popup from 'reactjs-popup';
import React, { useState } from 'react';

import { HiDotsVertical } from 'react-icons/hi'

import {IconButton} from '@/components';
import CardUserProps from './CardUserProps';
import dayjs from 'dayjs';
import Role from '@/interfaces/Role';
import { handleResource, validateVisibility } from '@/lib/utils';

export default function CardUser({user, session, handleDelete}:CardUserProps) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    function handleClickDelete() {
        setOpenMenu(false);
        if (window.confirm('Tem a certeza de que pretende eliminar?')) {
            handleDelete(user);
        }
    }

    function validateVisibility():boolean {
        if (user?.role === Role.CLIENT) {
            return true;
        }
    
        if ((user?.role === Role.ADMIN && user.id === session?.userId) ||
            (user?.role === Role.ADMIN && session?.role === Role.ROOT) || 
            (user?.role === Role.ROOT && session?.role === Role.ROOT)) {
            return true;
        }
        
        return false;
    }

    return (
        <div className="flex gap-5 items-center h-20 px-5 bg-white border-t border-primary/25">
            <input type="checkbox" className='w-5 h-5' />
            <div className='flex w-20 flex-shrink-0'>
                <Image src={handleResource(user?.profilePhoto)} width={44} height={44} className='rounded-full border border-gray-400' alt='Foto de Perfil'/>
            </div>
            <div className='flex flex-1'>
                <span className='font-normal leading-10'>{user.name}</span>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <span className='font-normal leading-10'>{dayjs(user.createdAt).format("DD/MM/YYYY")}</span>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <span className='font-normal leading-10'>{user.phone}</span>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <span className='font-normal leading-10'>{user.email}</span>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <span className='font-normal leading-10'>{user.role}</span>
            </div>
            <div className='flex w-20 flex-shrink-0'>
                <Popup open={openMenu} onClose={() => setOpenMenu(false)} onOpen={() => setOpenMenu(true)} trigger={
                    <IconButton>
                        <HiDotsVertical />
                    </IconButton>
                } arrow={false} position={"top right"} aria-describedby="popup-1">
                    <div className="bg-white p-5 rounded shadow-md" id="popup-1">
                        <ul className='flex flex-col'>
                            <li>
                                <Link href={`/profile/${user.id}`} className='h-10 block px-3 py-2 text-nowrap hover:bg-primary-light/5 rounded-md'>Visualizar</Link>
                            </li>
                            {((user.role === Role.CLIENT) ||
                            (user.role === Role.ADMIN && user.id === session.userId) || 
                            (user.role === Role.ADMIN && session.role === Role.ROOT) ||
                            (user.role === Role.ROOT && session.role === Role.ROOT)) && (
                                <li>
                                    <Link href={`/profile/${user.id}/edit`} className='h-10 block px-3 py-2 text-nowrap hover:bg-primary-light/5 rounded-md'>Editar</Link>
                                </li>
                            )}

                            {((user.role === Role.CLIENT) ||
                            (user.role === Role.ADMIN && session.role === Role.ROOT)) && (
                                <li>
                                    <button onClick={handleClickDelete} className='h-10 block px-3 py-2 text-nowrap hover:bg-primary-light/5 rounded-md'>Eliminar</button>
                                </li>
                            )}
                        </ul>
                    </div>
                </Popup>
            </div>
        </div>
    )
}
