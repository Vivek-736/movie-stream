/* eslint-disable @next/next/no-img-element */
import Input from '@/components/input'
import React from 'react'

const AuthPage = () => {
    return (
        <div className='relative h-full w-full bg-[url("/images/hero.jpeg")] bg-fixed bg-no-repeat bg-cover bg-center'>
            <div className='w-full h-full'>
                <nav className='px-12 py-5'>
                    <div className='w-full flex gap-2 bg-[#223143]'>
                        <img src="/images/logo.png" alt="logo" className='h-12' />
                        <div className='flex gap-0.5 items-center text-2xl'>
                            <span className='text-white'>Movie</span>
                            <span className='text-emerald-400 font-medium'>Stream</span>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='bg-black px-16 py-16 self-center mt-10 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                            <h2 className='text-white text-4xl mb-8 font-semibold text-center'>
                                Sign In
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <Input />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AuthPage
