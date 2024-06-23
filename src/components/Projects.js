import eco from '../assets/eco.png';
import JobFreak from '../assets/job freak.png';
import port from '../assets/portfolio.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: eco,
                description: 'A Ecommerce Website. Built with HTML,CSS,JavaScript',
                link: 'https://github.com/DossM123/eco-solutions-website.git'
            },
            {
                image: JobFreak,
                description: 'Jon Freak Website clone',
                link: 'https://github.com/DossM123/Job-Freak-website-clone.git'
            },
            {
                image: port,
                description: 'Portfolio website using react',
                link: 'https://github.com/DossM123/portfolio.git'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 mb-5 w-[150px] font-bold lines">Projects</h1>
                <p>These are some of my best projects. I have built these when i started learning things. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}