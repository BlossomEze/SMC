import React from 'react'
import footer from '../Assets/footer.png'

function Footer() {
  return (
    <div className='bg-footer p-5'>
        <div className='flex-col pb-5'>
            <div className='text-left'>
                <h3 className='text-[#fff]'>SMC Academy</h3>
                <h6 className='text-[#fff] py-2'>SMC Academy is a subsidiary of Sir Mapy & Co. 
                    It is a training school of highly skilled and experienced 
                    tutors committed to nurturing and developing everyone.</h6>
            </div>
            <div className='flex flex-wrap'>
                <div class="text-[#fff !important] w-1/2">
                    <h5>Links</h5>
                    <nav class="list-none">
                    <li><a>About Us</a></li>
                    <li><a>Our Approach</a></li>
                    <li><a>Our Programs</a></li>
                    <li><a>Contact Us</a></li>
                    </nav>
                </div>
                <div class="w-1/2">
                    <h5>Address</h5>
                    <nav class="list-none">
                    <li><a>Shopping Complex, Gate 2 <br/> Shelter Afrique Estate Uyo, Akwa Ibom</a></li>
                    </nav>
                </div>
                <div class="w-1/2">
                    <h5>Contact</h5>
                    <nav class="list-none">
                    <li><a>+234 902 528 4756</a></li>
                    <li><a>info@sirmapy.com</a></li>
                    </nav>
                </div>
            </div>
        </div>
        <hr className='text-[#fff] py-2 justify-center'/>
        <div className='text-center'>
            <div>
               <h6 className='text-[#fff]'>© Copyright 2022 , Sir Mapy & Co</h6> 
            </div>
            <div className='py-2 text-center flex justify-center'>
                <img src={footer} />
            </div>
        </div>
    </div>
  )
} 

export default Footer