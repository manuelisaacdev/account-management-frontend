import { LoadingButton, TextField } from '@/components'
import Image from 'next/image'

export default function SignUp() {
    return (
        <main className='flex justify-center items-center p-3 w-screen h-screen bg-[#f5f7fc]'>
            <div className="flex gap-8 flex-col bg-white rounded-md p-16 w-full max-w-lg shadow-paper">
                <Image src={"/img/Cazio_logo-p-500.png"} width={160} height={50} alt='Logo'/>
                <p className='text-body text-2xl font-light leading-4'>Inscrição simplificada</p>
                <TextField type='text' label='Nome' placeholder='Informe o seu nome...'/>   
                <TextField type='number' label='Número de telemóvel' placeholder='Informe o seu telefone...'/>   
                <TextField type='email' label='Email' placeholder='Informe o seu nome...'/>   
                <TextField type='password' label='Senha' placeholder='Informe a sua senha...'/>
                <LoadingButton>Criar Conta</LoadingButton>
            </div>
        </main>
    )
}
