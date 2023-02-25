import React from 'react'
import logo from '../Assets/logo.png'
import Button from '@mui/material/Button';
import Tada from 'react-reveal/Tada';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='flex items-center justify-between px-5 lg:px-12 py-2 lg:py-4 font-medium lg:text-xl text-base leading-5 '>
        <Tada>
            <div>
                <img src={logo} alt='smc logo' />
            </div>
        </Tada>       
        <div className='text-primary hidden lg:flex'>
            <nav>
                <a className='pr-4 hover:animate-pulse' href='#'>About Us</a> 
                <a className='px-4 hover:animate-pulse' href='#'>Our Approach</a>
                <a className='px-4 hover:animate-pulse' href='#'>Our Programs</a>
                <a className='hover:animate-pulse' href='#'>Pricing</a>
            </nav>
        </div>
        <div className='flex items-center'>
            <div className='hidden lg:flex'>
                <Link to='/dashboard'>
                    <Button variant="contained" size="medium">
                    Get Started
                    </Button>
                </Link>
            </div>          
            <button className='block border-none outline-none bg-none appearance-none w-8 cursor-pointer lg:hidden'>
            <Rotate top left>
                <span className='bg-primary h-1 w-full my-1 block rounded-lg content-none'></span>
            </Rotate>
            <Zoom bottom>
                <span className='bg-primary h-1 w-full my-1 block rounded-lg content-none'></span>
            </Zoom>
            <Rotate top right>
                <span className='bg-primary h-1 w-full my-1 block rounded-lg content-none'></span>
            </Rotate>       
            </button>
        </div>
        <nav className='hidden'>
            
        </nav>
    </div>
  )
}

export default Header