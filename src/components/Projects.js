import Return from './Return'
import Project from './Project'

const Projects = ({ title }) => {
        const projects = [
                {
                        name: 'responsive photo gallery',
                        id: 1,
                        tech: ['html', 'javascript', 'firebase storage', 'firebase authentication', 'framer-motion', 'react-bootstrap'],
                        url: 'https://ac-photogallery.netlify.app'
                },
                {
                        name: 'portfolio',
                        id: 2,
                        tech: ['react', 'javascript', 'tailwindcss'],
                        url: 'https://andrewclarke.netlify.app/'
                },
                {
                        name: 'music player',
                        id: 3,
                        tech: ['html', 'javascript'],
                        url: 'www.testmus.com'
                },
                {
                        name: 'inspirational recipes',
                        id: 4,
                        tech: ['react', 'css', 'fetch api'],
                        url: 'https://inspirational-recipes.netlify.app/'
                }
        ]

        return (

                <main id="projects flex flex-col items-center text-center text-black">
                        <div className="overlay flex flex-col text-center">
                                <Return />
                                <h1 className="lg-heading typewriter text-center mb-10"><typewritten-text>{title}</typewritten-text></h1>
                                <div className="flex flex-col items-center justify-evenly">
                                        <div className="bg-gray-200 opacity-50 h-auto w-full max-w-4xl p-8 flex flex-row text-center items-between justify-between rounded-xl" id="projects">
                                                {projects.map((project) => (
                                                        <Project key={project.name} name={project.name} tech={project.tech} url={project.url} />
                                                ))
                                                }

                                        </div>


                                </div >
                        </div>
                </main >

        )
}

export default Projects