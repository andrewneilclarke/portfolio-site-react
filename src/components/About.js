const About = ({ title }) => {
    return (
        <main id="about">
            <div className="overlay">
                <h1 className="lg-heading typewriter mb-10"><typewritten-text>{title}</typewritten-text></h1>
                <div className="flex flex-col items-center justify-evenly">
                    <div className="bg-gray-200 opacity-50 h-96 w-96" id="projects">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, aperiam illo ad animi aut delectus ex explicabo tenetur laborum, molestias corporis porro dicta veritatis aliquid inventore soluta unde rerum deleniti repellendus beatae fugit. Quo, voluptatum labore corporis voluptates nisi, fugiat modi itaque, perspiciatis odit placeat facere odio dolores dicta. Nobis debitis est vitae, neque soluta optio sapiente omnis dolor quos illo dignissimos necessitatibus molestias, nesciunt incidunt quis consequatur eum. Tenetur sunt pariatur ducimus reprehenderit dignissimos, dolorem ipsa nostrum dolor in, aspernatur nihil labore, eveniet nemo iusto! Labore error eos a alias unde quia numquam fuga ratione fugiat, maiores voluptate officia?
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
