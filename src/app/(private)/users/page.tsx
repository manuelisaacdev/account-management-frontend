import { Button } from '@/components'
import CardUser from '@/components/CardUser/CardUser'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'
import { GoArrowLeft } from 'react-icons/go'

export default function Users() {
    return (
        <section className='flex flex-col max-w-[1480px] mx-auto px-5 py-8'>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Link href="/logout" className='text-3xl'>
                        <GoArrowLeft />
                    </Link>
                    <span className='text-2xl font-normal leading-10'>Utilizadores</span>
                </div>

                <Link href={"/users/new"}>
                    <Button>Criar Utilizador</Button>
                </Link>
            </div>

            <div className="flex gap-10 items-center bg-white rounded-md p-5 mt-10">
                <div className="relative">
                    <CiSearch className='absolute left-2 text-2xl' style={{top: "50%", transform: "translateY(-50%)"}}/>
                    <input type="text" className='h-[40px] w-72 ps-10 border border-primary-light/25 rounded-md outline-none focus:border-primary-light' />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex gap-5 items-center py-3 px-5">
                    <input type="checkbox" className='w-5 h-5' />
                    <div className='flex w-20 flex-shrink-0'>
                        <span className='font-medium leading-10'>Imagem</span>
                    </div>
                    <div className='flex flex-1'>
                        <span className='font-medium leading-10'>Nome</span>
                    </div>
                    <div className='flex flex-1 justify-center items-center'>
                        <span className='font-medium leading-10'>Data</span>
                    </div>
                    <div className='flex flex-1 justify-center items-center'>
                        <span className='font-medium leading-10'>Telefone</span>
                    </div>
                    <div className='flex flex-1 justify-center items-center'>
                        <span className='font-medium leading-10'>E-mail</span>
                    </div>
                    <div className='flex flex-1 justify-center items-center'>
                        <span className='font-medium leading-10'>Tipo</span>
                    </div>
                    <div className='flex w-20 flex-shrink-0'>
                        <span className='font-medium leading-10'>Acções</span>
                    </div>
                </div>
                <CardUser />
            </div>
        </section>
    )
}
