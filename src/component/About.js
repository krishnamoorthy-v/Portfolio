import "../App.css"
import about from "../assets/about.png"

export default function About() {

    return (
        <section id="about" className="w-full flex flex-col justify-evenly md:flex-row bg-secondary" >
            
            <div className="sm:w-full md:w-1/2 flex flex-row justify-center">
                <img className="h-[500px]" src={about} />
            </div>

            <div className="aboutContent w-full md:w-1/4 py-32 p-5">
                <h1 className="text-4xl border-b-4 border-[#003135] text-white w-[170px]">About Me</h1>
                <p className="text-white pt-4 text-justify">I'm a passionate technologist with a knack for languages. 
                    Fueled by a fascination with the ever-evolving world of tech, 
                    I'm constantly seeking out new knowledge and pushing my boundaries. 
                    My ability to learn languages quickly allows me to grasp complex technical
                    concepts with ease, and I thrive in fast-paced, dynamic environments</p>
            </div>
        </section>
    );
}