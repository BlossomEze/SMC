import React from 'react';
import dashboard from '../assets/Mockup wrap 2.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import Roll from 'react-reveal/Roll';
import Button from '@mui/material/Button';
import pin from '../assets/pin.png';
import bolt from '../assets/bolt.png';
import jet from '../assets/jet.png';
import thumbs from '../assets/thumbs.png';
import bulb from '../assets/bulb.png';
import goggles from '../assets/Frame 9.png';
import smile from '../assets/smile.png';
import wallet from '../assets/wallet.png';
import smallerdashboard from '../assets/Mockup wrap 1.png';
import charts from '../assets/Chart-line#1.png';
import door from '../assets/Door-open.png';
import Safe from '../assets/Safe.png';
import Bounce from 'react-reveal/Bounce';
import MC from '../assets/MC.png';
import star from '../assets/Half-start.png'
import box from '../assets/Box#3.png'
import folder from '../assets/Group-folders.png'
import book from '../assets/Book-open.png'
import wifi from '../assets/RSS.png'
import group from '../assets/Group.png'
import call from '../assets/call.png'
import mail from '../assets/mail.png'
import check from '../assets/check.png'
import Slide from 'react-reveal/Slide'


function Webbody() {

  return (
    <div className='flex items-center justify-center flex-col p-0'>
    <div className='bg-[#F9F9FB] w-full flex items-center justify-center flex-col pb-[0 !important] pt-[5%] lg:pt-[3%]' >
      <Fade left>
        <h1 className='max-w-2xl pb-2 px-8 lg:px-0 pt-[8%] text-2xl lg:text-5xl lg:pb-4'>We don't just teach. We develop greatness</h1>
      </Fade>
      <Fade bottom>
        <h4 className='max-w-xl px-5 lg:px-0 text-sm lg:text-lg'>SMC Academy is a subsidiary of Sir Mapy & Co. It is a training school of highly skilled and experienced tutors committed to nurturing and developing everyone to capture the full value of the digital world.</h4>
      </Fade>        
      <Zoom>
        <img className='px-[5%] lg:mx-0 mt-4' src = {dashboard} alt='dashboard'/>
      </Zoom>
    </div>
    <div className='px-[5%]'>
      <Section1 className='mt-8' />
      <Values className='mt-8' />
      <Approach />
      <Programs />
      <Learn />
      <Tuition />
      <Certifications />
    </div>   
  </div>
  )
}

export default Webbody


function Section1() {
  return (
    <div className='lg:flex mt-10 lg:justify-between lg:items-center'>
      <div className='text-center mb-4 lg:max-w-[42%] '>
      <Fade left>
        <h2 className='text-xl text-center lg:text-4xl lg:text-left'>The digital world is full of opportunities. Learn how to take advantage of them with us!</h2>
      </Fade>
       <Tada>
        <h4 className='text-sm text-center pt-2 lg:text-left lg:text-lg lg:mt-5'>SMC Academy is a subsidiary of Sir Mapy & Co. It is a training school of highly skilled and experienced tutors committed to nurturing and developing everyone.</h4>
       </Tada>         
        <div className='my-4 lg:mt-4 lg:text-left'>
          <div className='shift'>
            <Bounce bottom>
              <Button variant="contained" size="medium" className='p-[20px !important]'>
              Get Started
              </Button>
            </Bounce>  
          </div>                
        </div>
      </div>
      <div className='border-red-400 lg:max-w-[50%] lg:justify-end'>
      <div className='flex items-center lg:w-[41.5vw]'>
        <Fade right>
          <div className='bg-[#fff] p-[5%] lg:p-[3%] lg:pr-[2%] mt-8 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:w-[100%] '>
            <img src={bolt} alt=''/>
            <h3 className='py-2'>Our Vision</h3>
            <h6>To help everyone, everywhere realize their full potential within the digital world.</h6>
          </div>
        </Fade>
        <div className='hidden lg:flex p-3'>
          <img src={jet} alt='' className='mt-[100%] ml-5'/>
        </div>
      </div>       
        <Fade left>
          <div  className='bg-[#fff] p-[5%] lg:p-[3%] my-8 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:w-[34vw] lg:justify-end lg:float-right '>
          <img src={pin} alt='' />
          <h3 className='py-2'>Our Mission</h3>
          <h6>To nurture and empower everyone, everywhere with the best tools and training necessary for the digital world</h6>
        </div>
        </Fade>       
      </div>
    </div>
  )
}


function Values() {
  return(
    <div className='rounded-lg bg-[#F9F9FB] pt-8 py-6 items-center text-center lg:mt-13 lg:pt-[50px]'>
      <div className='items-center'>
        <Roll top>
          <h1 className='text-2xl lg:text-4xl'>Our Core Values</h1>
        </Roll>      
        <Roll right>
          <h4 className='text-sm lg:text-lg lg:py-2 px-5 text-center lg:px-[30%]'>SMC Academy is a subsidiary of Sir Mapy & Co. It is a training school of highly skilled</h4>
        </Roll>
      </div>
      <div>
      
      </div>
      <div className='px-[5%] lg:flex lg:flex-wrap justify-center'>
        <Bounce bottom>
            <div className='bg-[#fff] p-[4%] my-8 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%]'>
              <img src={goggles} alt='' />
              <h3 className='py-2'>We are Ambitious:</h3>
              <h6 className='text-[13px] lg:text-sm'>In everything we do, we strive for the highest level of quality. We're always on the lookout for "the NEXT BIG THING!" By putting ourselves under constant pressure to develop projects and break new grounds within the digital world</h6>
            </div>
        </Bounce>
        <Bounce left>
          <div className='bg-[#fff] p-[4%] my-8 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%]'>
            <img src={smile} alt='' />
            <h3 className='py-2'>We are Understanding:</h3>
            <h6 className='text-[13px] lg:text-sm'>The digital world can be frustrating, con- fusing and even scary. We have all been there, therefore we re- spect our students and teach with care and empathy.</h6>
          </div>
        </Bounce>
        <Bounce right>
          <div className='bg-[#fff] p-[4%] my-8 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%]'>
            <img src={bulb} alt='' />
            <h3 className='py-2'>We are innovative:</h3>
            <h6 className='text-[13px] lg:text-sm'>Our passion for teaching gives us the courage to step outside of our comfort zone and try new and unconven- tional ideas. We see genuine failure as an opportunity to learn through our experience.</h6>
          </div>
        </Bounce>
        <Bounce top>
          <div className='bg-[#fff] p-[4%] my-8 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%]'>
            <img src={thumbs} alt='' />
            <h3 className='py-2'>We value Integrity:</h3>
            <h6 className='text-[13px] lg:text-sm'>Integrity is the foundation for everything we do. We are admired and respected for our commitment to training our students with an honest and transparent approach to the digital world.</h6>
        </div>
        </Bounce>
        <Bounce right>
          <div className='bg-[#fff] p-[4%] my-8 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%]'>
            <img src={wallet} alt='' />
            <h3 className='py-2'>We are affordable:</h3>
            <h6 className='text-[13px] lg:text-sm'>Our desire to act in the best interests of our students ensures that we price our courses in a way that is af- fordable for everyone interested in learning.</h6>
          </div>
        </Bounce>       
      </div>
    </div>
  )
}

function Approach() {
  return(
    <div className='mt-8 lg:mt-12 lg:flex lg:justify-between lg:pr-[12%]'>
      <Zoom bottom>
        <div className='text-center align-middle justify-center lg:bg-[#F9F9FB] lg:pl-12 lg:pt-14 lg:rounded-3xl'>
          <img src={ smallerdashboard } alt='' />
        </div>
      </Zoom>
      <div className='py-3 px-1 lg:max-w-[45%] lg:align-left' >
        <Roll bottom>
          <h1 className='text-2xl pt-5 lg:text-left'>Educational Approach</h1>
        </Roll>
        <Roll left>
          <h6 className='text-center'>Our academic teachings are based on two approaches</h6>
        </Roll>
        <Fade left>
          <h3 className='pt-5 pb-1 lg:pt-8'>Simplicity</h3>
        </Fade>
        <Fade bottom>
          <h6>We provide a simple and comprehensive, ABC methods of teaching to enable our students assimilate easier and faster.</h6>
        </Fade>
        <Fade left>
          <h3 className='pt-5 pb-1 lg:pt-8'>Precision</h3>
        </Fade>
        <Fade bottom>
          <h6>We are straight to the point! We teach only what you need to know to better understand the digital world, rather than filling up our students with plenty and unnecessary information that could end up getting them more confused.</h6>
        </Fade>        
      </div>
    </div>
  ) 
}
function Programs() {
  return(
    <div className='py-4 lg:mt-14'>
      <Bounce top>
        <h1 className='text-2xl'>Our Programs</h1>
      </Bounce>
      <Bounce bottom>
      <h4 className='text-sm px-3 lg:text-lg py-2 lg:px-[25%]'>Our courses have been carefully crafted and designed by industry professionals to give you the best you can get</h4> 
      </Bounce>      
      <div className='flex flex-wrap'>
        <div className='flex flex-wrap'>
        <div className='bg-[#fff] p-[5%] lg:p-[2%] my-8 rounded-2xl py-5 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:max-w-[37%] '>
          <img src={MC} alt='' />
          <h3 className='py-2'>Crypto Trading</h3>
          <h6 className='lg:pb-7 pb-4'>Our cryptocurrency course exposes students to fundamentals about the history of money, the need for blockchains as well as the reason for Bitcoin’s existence. We will also teach you how to buy and sell any coin in the world, listed or unlisted as well as show you how to do your own research on DeFi Projects that you can make alot of money from.</h6>
          <div className='shift'>
            <Bounce bottom>
              <Button variant="contained" size="medium" className='p-[20px !important] my-3'>
              Get Started
              </Button>
            </Bounce>  
          </div> 
        </div>
        </div>
        <div>
            <div className='bg-[#fff] p-[5%] my-8 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:max-w-[40%]  '>
          <img src={charts} alt='' />
          <h3 className='py-3'>Forex Trading</h3>
          <h6 className='lg:pb-7 pb-4'>Our forex trading course enlightens beginners, intermediate and even pro traders on how to appropriately read the market as well as understand how to accurately analyse the activities of price action from a purely technical perspective, hence moulding you into a trader that is profitable and consistent at making money from the market.</h6>
          <div className='shift'>
            <Bounce bottom>
              <Button variant="contained" size="medium" className='p-[20px !important]'>
              Get Started
              </Button>
            </Bounce>  
          </div> 
        </div>
          </div>
          <div>
            <div className='bg-[#fff] p-[5%] my-8 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:max-w-[40%]  '>
          <img src={Safe} alt='' />
          <h3 className='py-3'>NFTS</h3>
          <h6 className='lg:pb-7 pb-4'>Our complete course on Non Fungible Tokens (NFTs) will help you gain a clearer understanding of how NFTs are minted, how to buy and sell your own NFTs, setting up royalties as well as gaining a well-rounded and comprehensive knowledge on how to create an NFT project as a digital artist and make a lot of money.</h6>
          <div className='shift'>
            <Bounce bottom>
              <Button variant="contained" size="medium" className='p-[20px !important]'>
              Get Started
              </Button>
            </Bounce>  
          </div> 
        </div>
          </div>
          <div>
            <div className='bg-[#fff] p-[5%] my-8 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:max-w-[40%]  '>
          <img src={door} alt='' />
          <h3 className='py-3'>Community Building</h3>
          <h6 className='lg:pb-7 pb-4'>Our community building course will teach you about moderating digital communities and creating safety standards for online spaces.By the end of this course, you should have acquired the necessary skills needed to apply for community moderation roles and earn weekly in dollars as well as understanding the psychology needed to build.</h6>
          <div className='shift'>
            <Bounce bottom>
              <Button variant="contained" size="medium" className='p-[20px !important]'>
              Get Started
              </Button>
            </Bounce>  
          </div> 
        </div>
        </div>
      </div>
    </div>
  )
}

function Learn() {
  return(
    <div>
      <div>
        <Zoom top>
          <h1 className='text-2xl pt-5'>Why Learn From Us</h1>
        </Zoom>
        <Zoom left>
           <h6 className='text-center'>Our courses have been carefully crafted and designed by industry professionals to give you the best you can get anywhere in the world</h6>
        </Zoom>
      </div>
      <div>
        <Slide left>
          <div className='p-[5%] my-3 rounded-2xl'>
          <img src={star} alt='' />
          <h3 className='py-2'>Quality Instructors</h3>
          <h6>In everything we do, we strive for the highest level of quality. We're always on the lookout for "the NEXT BIG THING!" By putting ourselves under constant pressure to develop projects and break new grounds within the digital world</h6>
        </div>
        </Slide>
        <Slide right>
          <div className='p-[5%] my-3 rounded-2xl'>
          <img src={box} alt='' />
          <h3 className='py-2'>Quality Instructors</h3>
          <h6>You get direct access to our instructors who have many years of practical experience in the digital industry with most of them having built very successful digital projects.</h6>
        </div>
        </Slide>
        <Zoom left>
          <div className='p-[5%] my-3 rounded-2xl'>
          <img src={book} alt='' />
          <h3 className='py-2'>Up-to-date Tech Support</h3>
          <h6>At our digital Academy, we have premium access to the latest software and tools needed to make sure your knowledge of the digital world is current and up-to-date.</h6>
        </div>
        </Zoom>
        <Fade top>
          <div className='p-[5%] my-3 rounded-2xl'>
          <img src={group} alt='' />
          <h3 className='py-2'>Practical Learning</h3>
          <h6>This is not just another course with lots of lectures, but rather a carefully crafted experience where you will be taken on a digital journey with lots of opportunities to actually learn by doing.</h6>
        </div>
        </Fade>
        <Slide left>
          <div className='p-[5%] my-3 rounded-2xl'>
          <img src={wifi} alt='' />
          <h3 className='py-2'>Small Classes</h3>
          <h6>Our training model is strict on the number of students per course. You get more attention from our instructors and classes flow more smoothly.</h6>
        </div>
        </Slide>
        <Slide right>
          <div className='p-[5%] my-3 rounded-2xl'>
          <img src={folder} alt='' />
          <h3 className='py-2'>100% Power & Internet Availability</h3>
          <h6>Students can always have access to our course materials even after completing the course for life as well as access to our Academy Alumni community (where you can build relationships and engage with your peers).</h6>
        </div>
        </Slide>       
      </div>
    </div>
  )
}



function Tuition() {
  return (
    <div className='bg-[#2F5ABC] rounded-2xl p-5 text-left '>
      <div className='text-left'>
        <Bounce top>
          <h1 className='text-2xl pt-5 text-[#fff]'>Tuition and Fees</h1>
        </Bounce>
        <Bounce bottom>
          <h6 className=' text-[#fff] text-center lg:text-base text-sm px-[-4%] py-3'>Tuition at SMC Academy varies based on the course you’re applying to learn. You can learn more about tuition fees by visiting us at Suite A4, Shopping Complex, Shelter Afrique, Uyo, Akwa Ibom State</h6>
        </Bounce>        
      </div>
      <div>
        <Slide right>
          <div className='py-[6%] px-[5%] my-3 rounded-2xl bg-[#fff]'>
          <img src={ call } alt='' />
          <h6>+234 909 009 0702</h6>
        </div>
        </Slide>
        <Slide left>
          <div className='py-[6%] px-[5%] my-3 rounded-2xl bg-[#fff]'>
          <img src={ mail } alt='' />
          <h6>academy@sirmapy.com</h6>
        </div>
        </Slide>       
      </div>
    </div>
  )
}


function Certifications() {
  return(
    <div>
      <Slide bottom>
      <div className='bg-[#fff] p-[5%] my-8 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] border-b-btn_bg border-b-[14px] '>
          <h1 className='py-4 text-2xl text-left'>Certifications</h1>
          <h6>Only students who pass the evaluation exam at the end of the training course will be eligible for a certificate of completion.<br />
          According to the conventional grading system, the final grade is based on attendance (10%), tests (30%), and a final examination (60%)</h6>
          <div className='mt-8'>
            <Button variant="contained" size="medium">
            Get Started
          </Button>
          </div>         
      </div>
      <div className='bg-[#fff] p-[5%] my-10 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] border-b-btn_bg border-b-[14px] '>
      <h1 className='py-4 text-2xl text-left'>System Requirements</h1>
      <div className='my-2'>
        <h3>Windows 8-11 or Mac OS</h3>
        <ul>
          <li><img src={check} alt='' />64-bit Intel or AMD multi-core processor</li>
          <li className='py-1'><img src={check} alt='' />2 GB of RAM minimum (8 GB recommended)</li>
          <li><img src={check} alt='' />32 GB of free disk space for installation</li>
          <li className='py-1'><img src={check} alt='' />Qualified hardware-accelerated OpenGL® graphics card</li>
          <li><img src={check} alt='' />3-button mouse</li>
        </ul>
      </div>
      <div className='my-4'>
        <h3>iOS or Android</h3>
        <ul>
          <li><img src={check} alt='' />3500 mAh Battery life</li>
          <li className='py-1'><img src={check} alt='' />4GB RAM</li>
          <li><img src={check} alt='' />64GB ROM</li>
        </ul>
      </div>
      </div>
      </Slide>      
    </div>
  )
}