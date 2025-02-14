"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import Popup from 'reactjs-popup';

export default function CardUser() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    return (
        <div className="flex gap-5 items-center h-20 px-5 bg-white border-t border-primary/25">
            <input type="checkbox" className='w-5 h-5' />
            <div className='flex w-20 flex-shrink-0'>
                <Image src={"/img/Screen-Shot-2022-02-03-at-15.34.16.png"} width={44} height={44} className='rounded-full border border-gray-400' alt='Foto de Perfil'/>
            </div>
            <div className='flex flex-1'>
                <span className='font-normal leading-10'>Elizabeth Daniel</span>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <span className='font-normal leading-10'>12/03/2022</span>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <span className='font-normal leading-10'>934 843 856</span>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <span className='font-normal leading-10'>elizabeth@gmail.com</span>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <span className='font-normal leading-10'>Admin</span>
            </div>
            <div className='flex w-20 flex-shrink-0'>
                <Popup open={openMenu} onClose={() => setOpenMenu(false)} onOpen={() => setOpenMenu(true)} trigger={
                    <button className='flex justify-center items-center w-10 rounded-full h-10 hover:bg-gray-400/10'><HiDotsVertical /></button>
                } arrow={false} position="bottom center" aria-describedby="popup-1">
                    <div className="bg-white p-5 rounded shadow-md" id="popup-1">
                        <ul className='flex flex-col'>
                            <li>
                                <Link href={"#"} className='h-10 block px-3 py-2 text-nowrap hover:bg-primary-light/5 rounded-md'>Visualizar</Link>
                            </li>
                            <li>
                                <Link href={"#"} className='h-10 block px-3 py-2 text-nowrap hover:bg-primary-light/5 rounded-md'>Editar</Link>
                            </li>
                            <li>
                                <button className='h-10 block px-3 py-2 text-nowrap hover:bg-primary-light/5 rounded-md'>Eliminar</button>
                            </li>
                        </ul>
                    </div>
                </Popup>
            </div>
        </div>
    )
}
