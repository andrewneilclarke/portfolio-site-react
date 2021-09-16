import Contact from "./Contact";

const Home = () => {
    const items = [' - Web Developer', 'Designer', 'Programmer', 'Creator']
    const name = 'Andrew Clarke '
    return (
        <main id="home">
            <div className="overlay">
            <h1 className="lg-heading">{name}
            <ul className="text-secondary typewriter">
                {/* { items.map(item => {
                    setTimeout(() => {
                        console.log(item)
                        return (<li> <typewritten-text> {item} </typewritten-text></li> )
                })}, 3000)} */}
                 {/* { 
                     items.map((item, i) => {
                        setTimeout(() => {
                            return (<li> <typewritten-text> {item} </typewritten-text></li> )
                    }, i*2000 )
                    return <li> <typewritten-text> {item} </typewritten-text></li>;
                })
                } */}
                 <li> <typewritten-text> {items[0]} </typewritten-text></li>
                 {/* <li> <typewritten-text> {items[1]} </typewritten-text></li>
                 <li> <typewritten-text> {items[2]} </typewritten-text></li>
                 <li> <typewritten-text> {items[3]} </typewritten-text></li> */}
                </ul>
            </h1>
            <h2 className="sm-heading">Welcome to my website</h2> 
            <Contact /> 
            </div>
        </main>
        
    )
}

export default Home
