import Image from 'next/image'
import React from 'react'
import Button from './Button';


const bold88 = "text-[88px] font-[700] leading-[120%]"
const bold20 = "text-[20px] font-[700]";
const regular16 = "text-[16px] font-[400]";

const regular20 = "text-[20px] font-[400]";
const btn_white_text = " border-white bg-white px-8 py-3 text-neutral-900 cursor-pointer"
const btn_green = "border-emerald-500 bg-emerald-500 px-7 py-4 text-white cursor-pointer"

const Hero = () => {
    return (
        <section className='container mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
            <div className='absolute right-0 top-0 h-screen w-screen bg-[url("/pattern-bg.png")] bg-no-repeat bg-cover bg-center md:-right-28 xl:-top-60 max-sm:hidden' />
            
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image 
                    src="/camp.svg"
                    alt='camp image'
                    width={50}
                    height={50}
                    className='absolute left-[-5px] top-[-40px] w-10 lg:w-[50px]'
                />
                <h1 className={`text-[52px] font-[700] leading-[120%] lg:bold-[${bold88}]`}>Putuk Truno Camp Area</h1>

                <p className='text-[16px] font-[400] mt-6 text-gray-300 xl:max-w-[520px]'>
                    We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
                </p>

                <div className='my-11 flex flex-wrap gap-5'>
                    <div className='flex items-center gap-2'> 
                        {
                            Array(5).fill(1).map((_,index) => (
                                <Image
                                    key={index}
                                    src="/star.svg"
                                    alt='star'
                                    width={24}
                                    height={24}
                                />
                            ))
                        }
                    </div>

                    <p className={`text-[16px] font-[700] lg:${bold20}`}>
                        198K
                        <span className={`${regular16} lg:${regular20} ml-1`}>
                            Excellent Reviews
                        </span>
                    </p>
                </div>

                <div className='flex flex-col w-full gap-3 sm:flex-row'>
                    <Button
                        type='button'
                        title='Download App'
                        variant={`${btn_green}`}
                    />

                    <Button
                        type='button'
                        title='How we work?'
                        icon='/play.svg'
                        variant={`${btn_white_text}`}
                    />
                </div>
            </div>

            <div className='relative flex flex-1 items-start'>
                <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-950 px-7 py-8'>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between'>
                            <p className={`${regular16} text-gray-200`}>Location</p>
                            <Image
                                src="/close.svg"
                                alt='close image'
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className={`${bold20} text-white`}>Aguas Calientes</p>
                    </div>
                    
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <p className={`${regular16} block text-gray text-gray-200`}> Distance </p>
                            <p className={`${bold20} text-white`}>173.28 mi</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className={`${regular16} block text-gray text-gray-200`}> Distance </p>
                            <p className={`${bold20} text-white`}>2.040 km</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Hero