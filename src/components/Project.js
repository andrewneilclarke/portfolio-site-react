
const Project = ({ title, name, tech, url }) => {

    return (

        <div className="project flex flex-col text-center items-center justify-between" key={name}>
            <h1 className="project-title text-2xl transform hover:scale-125 duration-1000 cursor-pointer">{name}</h1>
            <div className="project-tech">
                {tech.map((item) => (
                    <p className="text-gray-300 bg-gray-500 w-32 m-1 rounded-2xl" key={Math.random()}>{item}</p>
                )
                )}
            </div>
            <p className="text-gray-500">{url}</p>
        </div>

    )
}

export default Project