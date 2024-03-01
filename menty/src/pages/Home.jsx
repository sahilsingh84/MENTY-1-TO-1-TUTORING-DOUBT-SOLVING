import React from 'react'
import BannerVideo from '../assets/banner.mp4'
import Button from '../components/common/Button'
import { TypeAnimation } from 'react-type-animation'
import { Fade } from 'react-awesome-reveal'



const Home = () => {
  return (
    <div className='homePage'>
        <div className='section1'>
            <div className='setion1InitialDiv'>
            <div className='section1text'>
                <div className='webTitle'>MENTY:
                <TypeAnimation
                    sequence={["1-TO-1 TUTORING & DOUBT SOLVING",3000,""]}
                    repeat={Infinity}
                    // omitDeletionAnimation={true}
                  
                ></TypeAnimation></div>
                <Fade>
                <div className='webPara'>
                    A look at the importance of technology 
                    in doubt solving and learning
                </div>
                <div className='webPara'>
                Students have access to educational resources and support services 24/7. This flexibility allows students to learn at their convenience and seek help whenever they need it, promoting continuous learning and improvement.
                </div>
                </Fade>
                <div className='introButtons'>
               <Button text={"SignUp"} path={"signup"}></Button>
               <Button text={"LogIn"} path={"login"}></Button>
            </div>
            </div>
            <div className='webIntroVideo'>
            <video muted loop autoPlay>
                    <source src={BannerVideo} type="video/mp4"/>
                </video>
            </div>
            </div>
            {/* <div className='introButtons'>
               <Button text={"SignUp"} path={"signup"}></Button>
               <Button text={"LogIn"} path={"login"}></Button>
            </div> */}
        </div>

        <div className='section2'>
            <h1></h1>

        </div>
      
    </div>
  )
}

export default Home
