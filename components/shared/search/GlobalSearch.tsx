import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"


const GlobalSearch = () => {
  return (
    <div className='realtive w-full max-w-[600px]
    max-lg:hidden'>
        <div 
        className='background-light800_darkgradient
        flex min-h-[56px] grow items-center gap-1 rounded-xl px-4'>
<Image
src="/assets/icons/search.svg"
alt="search"
height={24}
width={24}
className='cursor-pointer'
/>
<Input
type='text'
value=""
placeholder='search globaly'
className='paragraph-regular no-focus placeholder
background-light800_darkgradient
border-none shadow-none outline-none' />

        </div>
      
    </div>
  )
}

export default GlobalSearch