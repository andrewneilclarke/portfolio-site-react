import Contact from "./Contact";
// import Initials from "./Initials";
import { Spring } from 'react-spring'

const Home = ({ title }) => {
    const job = ['Web Developer.', 'Designer', 'Programmer', 'Creator']

    return (
        <main id="home">
            <Spring>
                {props => (
                    <div style={props}>
                        {/* <Initials /> */}
                    </div>
                )}
            </Spring>
            <div className="overlay flex flex-col justify-evenly">
                <h1 className="lg-heading typewriter text-white"><typewritten-text>{title}
                    <ul className="text-secondary">
                        <li> {` - `}{job[0]} </li>
                    </ul></typewritten-text>
                </h1>
                {/* <h2 className="sm-heading">Welcome to my world</h2> */}
                <Contact />
            </div>
        </main>

    )
}

export default Home
