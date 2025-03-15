import React from 'react'
import { IconType } from 'react-icons'

interface SocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const SocialButton = ({
  icon: Icon,
  onClick
}: SocialButtonProps) => {
  return (
    <button type='button' onClick={onClick} className='inline-flex cursor-pointer w-full justify-center rounded-md bg-blue-300 px-4 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-700 hover:ring-gray-300 hover:bg-gradient-to-b hover:from-blue-100 hover:to-violet-100 focus:outline-offset-0' title='Social Button'>
      <Icon/>
    </button>
  )
}

export default SocialButton
