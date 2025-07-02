import Image from 'next/image';
import React from 'react'

const flexCenter = 'flex justify-center items-center';

type ButtonProps = {
    type: 'button' | 'submit',
    title: string,
    icon?: string,
    variant: string,
}

const Button = ({icon,title,variant,type}: ButtonProps) => {
    return (
        <button type={type} className={`${variant} ${flexCenter} gap-3 rounded-full border`}>
            {icon && <Image width={24} height={24} src={icon} alt={title}/>}
            <label className='text-[16px] font-[700] whitespace-nowrap'> {title} </label>
        </button>
    )
}

export default Button