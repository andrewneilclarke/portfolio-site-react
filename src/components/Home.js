import Contact from "./Contact";

const Home = ({ title }) => {
    const job = ['Web Developer.', 'Designer', 'Programmer', 'Creator']

    return (
        <main id="home">
            <div className="overlay">
                <h1 className="lg-heading typewriter"><typewritten-text>{title}
                    <ul className="text-secondary">
                        <li> {` - `}{job[0]} </li>
                    </ul></typewritten-text>
                </h1>
                <h2 className="sm-heading">Welcome to my world</h2>
                <Contact />
            </div>
        </main>

    )
}

export default Home
