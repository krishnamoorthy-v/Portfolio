import "../App.css";
import heroImg  from "../assets/hero.png";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Section() {

    return (
        <section className="bg-primary w-full h-svh text-white flex flex-col justify-center px-5 py-10 md:flex-row">
            
            <div className="content md:w-1/2 flex flex-col justify-center mt-20 " >
                <h1 className="text-4xl"> Hi, <br/>
                    Iam <span className="text-black">Krishnamoorthy</span> 
                    <p className="text-2xl"> Iam a Full-Stack Developer </p> 
                </h1>
                
                <div className="flex py-5 ">
                    <a href="https://www.linkedin.com/in/krishnamoorthy-v-632a231ba/" className="pr-5 text-black hover:text-white"><FaLinkedin size={30} /></a>
                    <a href="https://github.com/krishnamoorthy-v" className="text-black hover:text-white"><FaGithub size={30} /></a>
                </div>

            </div>
           
            <div className="w-full md:w-1/3 flex flex-col justify-center">
                <img className="h-[500px]" src={heroImg} />
            </div>

        </section>
    );
}