import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button';

const flexCenter = 'flex justify-center items-center';
const flexBetween = 'flex items-center justify-between';
const btn_dark_green = 'bg-zinc-900 px-6 capitalize py-2 text-white transition-all hover:bg-black'

const Navbar = () => {
  return (
    <nav className={`${flexBetween} container mx-auto max-w-[1440px] px-6 lg:px-20 xl:px-0 relative z-30 py-5`}>
        <Link href="/">
          <Image src="/hilink-logo.svg" width={74} height={29} alt='logo' />
        </Link>

        <ul className='hidden lg:flex h-full gap-12 transition-all'>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className={`${flexCenter} text-[16px] font-[400] text-gray-500 cursor-pointer pb-1.5 transition-all hover:font-bold`}>
                {link.label}
            </Link>
          ))}
        </ul>

        <div className={`lg:${flexCenter} hidden`}>
          <Button variant={btn_dark_green} icon='/user.svg' type='button' title='login' />
        </div>

        <Image src="/menu.svg" alt='menu icon' width={32} height={32} className='inline-block cursor-pointer lg:hidden hover:transition-all transition-all' />

    </nav>
  )
}

export default Navbar