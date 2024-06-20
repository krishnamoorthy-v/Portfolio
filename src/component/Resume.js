import "../App.css"
import resumeImg from "../assets/resume.jpg"

export default function Resume() {

    return (
        <section id="resume" className="w-full flex flex-col justify-evenly md:flex-row bg-secondary" >
            
            <div className="sm:w-full md:w-1/2 flex flex-row justify-center">
                <img className="w-[400px] h-[500px] py-10" src={resumeImg} />
            </div>

            <div className="aboutContent w-full md:w-1/4 py-32 p-5">
                <h1 className="text-4xl border-b-4 border-[#003135] text-white w-[130px]">Resume</h1>
                <p className="text-white pt-4 text-justify">You can view my resume <a href="#" className="bg-primary p-1 hover:border-2 hover:border-white">Download</a>  </p>
            </div>
        </section>
    );
}