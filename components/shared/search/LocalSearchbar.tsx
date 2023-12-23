
"use client"
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

interface CustomInputProps {
    route:string,
    iconPosition:string,
    placeholder:string,
    imgSrc:string,
    otherClasses:string 
}

const LocalSearchbar = ({
    route,
    iconPosition,
    placeholder,
    imgSrc,
    otherClasses
}:CustomInputProps) => {
  return (
    <div className={`background-light800_darkgradient flex min-h-[56px]
    grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
 { iconPosition === "left"  && ( <Image
      src={imgSrc}
      alt="Search Icon"
      width={24}
      height={24}
      className='cursor-pointer'/>)}
      <Input
      type="text"
      placeholder={placeholder}
      value=""
      onChange={()=>{}}
    className='paragraph-regular no-focus placeholder
    bg-transparent
      border-none shadow-none outline-none'/>

{ iconPosition === "rigth"  && ( <Image
      src={imgSrc}
      alt="Search Icon"
      width={24}
      height={24}
      className='cursor-pointer'/>)}
    </div>
  )
}

export default LocalSearchbar
