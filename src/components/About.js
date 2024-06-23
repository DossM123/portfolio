import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, Im Doss  pursuing my pre-final Year in Computer Science and Medical Engineering. I am ready to collaborate and work on real-time projects. I built Websites and android mobile apps',
        line2: 'I am proficient in Frontend skills like HTML5,  CSS3,  Tailwind CSS, React.js, Angular',
        line3: 'In backend I know Node.js, Express.js, MongoDB, and Mongoose'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 mb-5 w-[170px] font-bold lines'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}