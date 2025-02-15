import React from 'react'
import { cn } from '@/lib/utils';
import IconButtonProps from './IconButtonProps'

export default function IconButton({children, className, ...rest}:IconButtonProps) {
    return (
        <button {...rest} type='button' className={cn("flex justify-center items-center w-10 rounded-full h-10 hover:bg-gray-400/10", className)}>{children}</button>
    )
}
