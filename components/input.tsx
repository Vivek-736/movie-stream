import React from 'react'

interface InputProps {
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

const Input = ({ id, onChange, value, label, type }: InputProps) => {
    return (
        <div className='relative'>
            <input value={value} type={type} onChange={onChange} className='bg-white block rounded-md w-full p-1 px-2 text-lg text-gray-800 appearance-none focus:outline-none focus:ring-0 peer' placeholder=' ' id={id}/>
            <label className='absolute text-lg text-zinc-500 duration-150 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-50 peer-focus:-translate-y-3' htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default Input
