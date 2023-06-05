import React, { useState } from 'react'
import Button from './Button.jsx';

const Nav = () => {
    let Links =[
      {name:"ABOUT US",link:"/"},
      {name:"OUR PACKAGES",link:"/"},
      {name:"REVIEWS",link:"/"},
      {name:"CONTENT",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 font-geological'>
      <div className='md:flex items-center justify-between bg-white  md:px-10 px-7'>
      <div className='font-bold text-[5rem] cursor-pointer flex items-center  
      text-gray-800'>
       <p className=' text-[4rem]'></p>KOOTA
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 font-bold ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Book Now
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Nav