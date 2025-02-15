"use client";

import React, { forwardRef, useId } from 'react'
import SelectProps from './SelectProps';

const Select = forwardRef<HTMLSelectElement, SelectProps>(({label, className, id=useId(), children, ...rest}, ref) => {
    return (
        <div className='flex flex-col gap-3 items-start'>
            {label && <label className='text-input-label text-base font-normal' htmlFor={id}>{label}</label>}
            <select {...rest} ref={ref} id={id} className='bg-none w-full border-input-border border px-4 rounded-md text-body h-[50px] placeholder:text-gray-500 focus:outline-primary'>
                {children}
            </select>
        </div>
    )
})


export default Select;