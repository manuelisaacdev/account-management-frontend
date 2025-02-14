import React, { forwardRef, useId } from 'react'
import TextFieldProps from './TextFieldProps';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({label, id=useId(), ...rest}, ref) => {
    return (
        <div className='flex flex-col gap-3 items-start'>
            {label && <label className='text-input-label text-base font-normal' htmlFor={id}>{label}</label>}
            <input {...rest} ref={ref} id={id} className='bg-none w-full border-input-border border p-4 rounded-md text-body h-[50px] placeholder:text-gray-500 focus:outline-primary'/>
        </div>
    )
});

TextField.displayName = 'TextField';

export default TextField;
