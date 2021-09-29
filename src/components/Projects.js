import Return from './Return'

const Projects = ({ title }) => {
        const projects = [
                {
                        name: 'responsive photo gallery',
                        id: 1,
                        tech: ['html', 'javascript', 'firebase'],
                        url: 'www.test.com'
                },
                {
                        name: 'portfolio',
                        id: 2,
                        tech: ['react', 'javascript', 'tailwind'],
                        url: 'www.testport.com'
                },
                {
                        name: 'music player',
                        id: 3,
                        tech: ['html', 'javascript'],
                        url: 'www.testmus.com'
                }
        ]

        return (

                <main id="projects flex flex-col items-center text-center text-black">
                        <div className="overlay">
                                <Return />
                                <h1 className="lg-heading typewriter text-center mb-10"><typewritten-text>{title}</typewritten-text></h1>
                                <div className="flex flex-col items-center justify-evenly">
                                        <div className="bg-gray-200 opacity-50 h-auto w-96 p-8 flex flex-col text-center items-center justify-center rounded-xl" id="projects">
                                                {projects.map((project) => (
                                                        <div className="m-3 flex flex-col text-center items-center" key={project.name}>
                                                                <h1 className="project-title text-2xl transform hover:scale-125 duration-1000 cursor-pointer">{project.name}</h1>
                                                                <div className="project-tech">
                                                                        {project.tech.map((item) => (
                                                                                <p className="text-gray-300 bg-gray-500 w-32 m-1 rounded-2xl" key={Math.random()}>{item}</p>

                                                                        )

                                                                        )}

                                                                </div>
                                                                <p className="text-gray-500">{project.url}</p>
                                                        </div>
                                                )
                                                )}
                                        </div>


                                </div >
                        </div>
                </main >

        )
}

export default Projects