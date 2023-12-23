'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
  

const NavContent =()=>{
  const pathname=usePathname();
return(
 <section className='flex flex-col h-full gap-6 pt-16'>
{sidebarLinks.map((item)=>{
  const isActive =(pathname.includes(item.route) && item.route.length>1) || pathname === item.route;
  return(
    <SheetClose asChild key={item.route} className='w-full'>
<Link href={item.route}
className={`${isActive 
? 'primary-gradient rounded-lg text-light-900'
: 'text-dark300_light900'
} flex items-center justify-start gap-4 bg-transparent p-4`}>
  <Image
  src={item.imgURL}
  alt={item.label}
  width={20}
  height={20}
  className={`${isActive? "" : "invert-colors"}`}/>
  <p 
  className={`${isActive? "base-bold" : "base-medium"}`}>{item.label}</p>
</Link>
    </SheetClose>
  )
})

}
 </section>
)
}

function MobileNav() {
  return (
    <Sheet>
    <SheetTrigger asChild>
        <Image
        src="/assets/icons/hamburger.svg"
        width={36}
        height={36}
        alt="menu"
        className='invert-colors sm:hidden'
        />
    </SheetTrigger>
    <SheetContent side='left'
    className='backgroun-light900_dark200 border-none '
    >
        <Link href="/" className='flex items-center gap-1'>
    <Image
    src="/assets/images/site-logo.svg"
    height={23}
    width={23}
    alt='DevFlow'/>
        <p 
        className='h2-bold font-spaceGrotesk text-dark100_light900'>
          Dev <span 
          className='text-primary-500'
          >
            OverFlow
            </span>
            </p>

    </Link>

    <div>
      <SheetClose>
        <NavContent/>
      </SheetClose>
      <SignedOut>
        <div className='flex flex-col gap-3'>
          <SheetClose>
            <Link href="/sign-in">
            <Button
             className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
<span className='primary-text-gradient'>Log In</span>
</Button>
            </Link>
            
          </SheetClose>
          <SheetClose>
            <Link href="/sign-up">
            <Button
             className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full text-dark400_light900 rounded-lg px-4 py-3 shadow-none">
Sign Up
</Button>
            </Link>
            
          </SheetClose>
        </div>
      </SignedOut>
    </div>
    </SheetContent>
  </Sheet>
  
  )
}

export default MobileNav
