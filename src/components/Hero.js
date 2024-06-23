import FirstImg from '../assets/hero.png'

import { AiOutlineLinkedin, AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Frontend developer',
        social: {
            twitter: 'https://x.com/MDoss1655347?t=VujkLnZrUxzedJGhmlpSMQ&s=09',
            linkedin: 'https://www.linkedin.com/in/doss-m-443748259',
            instagram: 'https://www.instagram.com/__doss._/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='d'>D</span>oss M 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.instagram} className='pr-5 social'><AiOutlineInstagram size={40}/></a>
                <a href={config.social.linkedin} className='pr-5 social'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.twitter} className=' social'><AiOutlineTwitter size={40} /></a>
                
                
            </div>
       </div>
       <img className='md:w-1/3 imgg' src={FirstImg} />
    </section>
}
