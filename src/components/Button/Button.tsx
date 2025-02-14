"use client";

import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import ButtonProps from './ButtonProps';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, className, type="button", primary, roundedLarger, fullWidth, startIcon:StartIcon, endIcon:EndIcon, ...rest}, ref) => {
    return (
        <button ref={ref} {...rest} type={type} className={cn('flex gap-2 justify-center leading-[3.3em] text-[17px] font-normal text-white items-center px-3 h-[50px] rounded-md bg-primary hover:bg-primary/95  cursor-pointer disabled:cursor-default disabled:bg-blue-400/5 disabled:text-gray-500 transition-all', className)}>
            {StartIcon && <StartIcon />}
            {children}
            {EndIcon && <EndIcon />}
        </button>
    );
});

Button.displayName = "Button";

export default Button;