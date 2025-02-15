"use client";

import Image from 'next/image'
import Popup from 'reactjs-popup';
import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import Link from 'next/link';

export default function Topbar() {
    const [openMenu1, setOpenMenu1] = useState<boolean>(false);
    const [openMenu2, setOpenMenu2] = useState<boolean>(false);
    const [openMenu3, setOpenMenu3] = useState<boolean>(false);
    return (
        <header className='bg-white border-b border-primary/15 sticky top-0 z-10'>
            <div className="flex gap-5 items-center justify-between max-w-[1480px] h-20 mx-auto px-5">
                <Image src={"/img/Cazio_logo-p-500.png"} width={160} height={50} alt='Logo'/>
                <nav className='h-full'>
                    <ul className="flex gap-5 items-center h-full">
                        <Popup open={openMenu1} onClose={() => setOpenMenu1(false)} onOpen={() => setOpenMenu1(true)} trigger={
                            <li className='flex gap-2 items-center h-full cursor-pointer'>
                                <span>Subscrições</span>
                                <FiChevronDown />
                            </li>
                        } arrow={false} position="bottom center" aria-describedby="popup-notificacoes">
                            <div className="bg-white p-5 rounded shadow-md" id="popup-notificacoes">
                                <h3>Notificações</h3>
                                {/* Notificações */}
                            </div>
                        </Popup>

                        <Popup open={openMenu2} onClose={() => setOpenMenu2(false)} onOpen={() => setOpenMenu2(true)} trigger={
                            <li className='flex gap-2 items-center h-full cursor-pointer'>
                                <span>Cadastro</span>
                                <FiChevronDown />
                            </li>
                        } arrow={false} position="bottom center" aria-describedby="popup-cadastro">
                            <div className="bg-white p-5 rounded shadow-md">
                                <h3>Cadastro</h3>
                                {/* Notificações */}
                            </div>
                        </Popup>

                        <Popup open={openMenu3} onClose={() => setOpenMenu3(false)} onOpen={() => setOpenMenu3(true)} trigger={
                            <li className='flex gap-2 items-center h-full cursor-pointer'>
                                <span>Configurações</span>
                                <FiChevronDown />
                            </li>
                        } arrow={false} position="bottom center" aria-describedby="popup-configuracoes">
                            <div className="bg-white p-5 rounded shadow-md">
                                <ul className='flex gap-1 flex-col'>
                                    <li className='leading-10 hover:text-primary'>
                                        <Link href={"#"} className='outline-none'>Configuraçoões gerais</Link>
                                    </li>
                                    <li className='leading-10 hover:text-primary'>
                                        <Link href={"/logout"}>Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </Popup>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
