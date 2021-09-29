import Return from './Return'

const Services = ({ title }) => {
    return (
        <div className="overlay">
            <Return />
            <h1 className="lg-heading typewriter text-center mb-10"><typewritten-text>{title}</typewritten-text></h1>
            <div className="flex flex-col items-center justify-evenly">
                <div className="bg-gray-200 opacity-50 h-auto w-96 p-8 flex flex-col text-center items-center justify-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis ut at minima ab, ratione tempora repellendus, voluptate voluptatum, quos vel! Sunt laboriosam, beatae nulla dolorum obcaecati explicabo omnis enim officiis facilis doloremque magnam laborum nisi ipsam voluptate id aspernatur inventore rerum quaerat. Quasi suscipit magni placeat? Cum, quidem dolore illo iusto doloribus earum aliquid vel laudantium maiores mollitia impedit, eaque dolorum modi quibusdam optio corrupti consectetur eum! Totam, dolore! Consequuntur, itaque? Nam doloremque obcaecati ipsam dolore. Architecto, laudantium quaerat.</p>
                </div>
            </div>
        </div>
    )
}

export default Services

