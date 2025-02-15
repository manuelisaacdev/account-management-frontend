import React, { forwardRef, useId } from 'react'
import TextFieldProps from './TextFieldProps';
import { cn } from '@/lib/utils';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({label, message, id=useId(), className, ...rest}, ref) => {
    return (
        <div className='flex flex-col gap-3 items-start w-full'>
            {label && <label className='text-input-label text-base font-normal' htmlFor={id}>{label}</label>}
            <input {...rest} ref={ref} id={id} className={cn('bg-none w-full border-input-border border p-4 rounded-md text-body h-[50px] placeholder:text-gray-500 focus:outline-primary', className)}/>
            {message && <div className='text-sm text-red-400'>{message}</div>}
        </div>
    )
});

TextField.displayName = 'TextField';

export default TextField;
