import Contact from "./Contact"
import Return from './Return'

const ContactForm = ({ title }) => {
    return (
        <div className="overlay flex flex-col text-center">
            <Return />
            <h1 className="lg-heading typewriter text-center mb-10"><typewritten-text>{title}</typewritten-text></h1>
            <div className="flex flex-col text-center items-center bg-gray-200 opacity-50 rounded-xl">
                <p className="p-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus quos earum provident corrupti! Dignissimos inventore repellat totam, doloribus a architecto incidunt deserunt modi earum blanditiis voluptatum magni, ab laborum deleniti. Exercitationem provident dolore quae voluptates magnam doloribus, amet repellendus explicabo ducimus quaerat minus fugit asperiores aliquid eveniet ea rerum fuga debitis maiores officiis distinctio dolorem deleniti voluptatum laborum! Repudiandae nihil distinctio soluta numquam architecto assumenda enim aliquam, totam omnis sint, maiores esse quas corrupti eveniet, vitae at perferendis veniam magni? Earum sunt deleniti consequatur perspiciatis aut, doloribus ex modi eos quaerat alias temporibus aliquam quia. Amet consequuntur quo, repudiandae facilis eligendi quisquam sit inventore autem blanditiis laborum, esse sapiente officiis sunt vero laboriosam sint velit eos fugit asperiores debitis.</p>
            </div>
            <Contact />
        </div>
    )
}

export default ContactForm
