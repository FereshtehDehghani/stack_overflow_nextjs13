"use client"
import { useTheme } from '@/context/ThemeProvider'
import React from 'react'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Image from 'next/image'
import { theme } from '@/constants'
  

const Theme = () => {

    const {mode,setMode}=useTheme()
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
    <MenubarMenu>
      <MenubarTrigger
      className='focus:bg-light-900 dark:focus:bg-dark-200
      data[state=open]:bg-light-900 dark:data-[state=open]:bg-dark-200'
      >
      {
      mode ==="light" ? (
      <Image
      src="/assets/icons/sun.svg"
      width={20}
      height={20}
      className='active-theme'
      alt="sun"
      />
      ):(
       <Image
      src="/assets/icons/moon.svg"
      width={20}
      height={20}
      className='active-theme'
      alt="moon"
      />
      )
      }
      </MenubarTrigger>
      <MenubarContent 
      className='right-[-3rem] mt-3 min-w-[120px]
      rounded border py-2 dark:border-dark-400 dark:bg-dark-300'>
        {theme?.map((item)=>(
             <MenubarItem
             key={item.value}
             className='flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark400'
             onClick={()=>{
              setMode(item.value);
              if(item.value!=='system'){
                localStorage.theme=item.value;
              }else{
                localStorage.removeItem('theme');
              }
             }}
             >
                <Image
      src={item.icon}
      width={20}
      height={20}
      className={`${mode===item.value && 'active-theme'} `}
      alt={item.value}
      /> 
      <p
       className={`body-semibold text-light-500 ${mode === item.value ?'text-primary-500' : 'text-dark100_light900'}`}
       >
        {item.label}
        </p>
             </MenubarItem>
        ))}
        {/* <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem> */}
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
  
  )
}

export default Theme
