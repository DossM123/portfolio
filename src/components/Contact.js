import { AiOutlineLinkedin, AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";
export default function Contact () {

    const config  = {
        email : 'dossm1559@gmail.com',
        social: {
            twitter: 'https://x.com/MDoss1655347?t=VujkLnZrUxzedJGhmlpSMQ&s=09',
            linkedin: 'https://www.linkedin.com/in/doss-m-443748259',
            instagram: 'https://www.instagram.com/__doss._/'
        }
    }

    return <section id='contact' className='flex flex-col bg-primary px-5  text-white'>
        <div className='flex flex-col items-left py-20'>
            <h1 className='text-4xl border-b-4   mb-5 w-[140px] font-bold lines'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <div className='flex py-5'>
                <a href={config.social.instagram} className='pr-5 social'><AiOutlineInstagram size={40}/></a>
                <a href={config.social.linkedin} className='pr-5 social'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.twitter} className=' social'><AiOutlineTwitter size={40} /></a>
                
                
            </div>
            <iframe className="hidden md:block frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.810124180326!2d80.14101449999998!3d13.041714699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261a82b9eec0f%3A0x903bf11062ec27f5!2sSri%20Ramachandra%20Institute%20of%20Higher%20Education%20and%20Research!5e0!3m2!1sen!2sin!4v1719040296312!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <iframe className="block md:hidden w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.810124180326!2d80.14101449999998!3d13.041714699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261a82b9eec0f%3A0x903bf11062ec27f5!2sSri%20Ramachandra%20Institute%20of%20Higher%20Education%20and%20Research!5e0!3m2!1sen!2sin!4v1719040296312!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <span className="text-center">Doss</span>
        </div>
       </section>
    
        
}