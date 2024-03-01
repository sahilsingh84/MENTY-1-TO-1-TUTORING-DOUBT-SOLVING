import React from 'react'
import BannerVideo from '../assets/banner.mp4'
import Button from '../components/common/Button'
import Section3 from '../components/HomePageSection/Section3'

const Home = () => {
  return (
    <div className='homePage'>
        <div className='section1'>
            <div className='setion1InitialDiv'>
            <div className='section1text'>
                <div className='webTitle'>MENTY:1-TO-1 TUTORING & DOUBT SOLVING</div>
                <div className='webPara'>
                    A look at the importance of technology 
                    in doubt solving and learning
                </div>
            </div>
            <div className='webIntroVideo'>
            <video muted loop autoPlay>
                    <source src={BannerVideo} type="video/mp4"/>
                </video>
            </div>
            </div>
            <div className='introButtons'>
               <Button text={"SignUp"} path={"signup"}></Button>
               <Button text={"LogIn"} path={"login"}></Button>
            </div>
        </div>
       <Section3/>
    </div>
  )
}

export default Home
