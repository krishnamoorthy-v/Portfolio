import "../App.css"
import moneymanageImg from "../assets/money_management.png"
import weather from "../assets/weather.png"
import portfolio from "../assets/portfolio.png"

export default function Project() {
 

    return (
        <section id="project" className="bg-primary text-white w-full h-full flex flex-col justify-center pb-10">
            
            <div className="w-1/2 px-10 py-10 font-bold">
                <h1 className="text-3xl w-[100px] text-white border-b-4 border-[#024950]">Project</h1>
            </div>

            <div className="w-full flex justify-center flex-wrap gap-10 px-10 ">

                <div className="relative">
                    <img className="object-cover h-[400px]" src={weather}/>
                    <p className="description">A Weather-website. Build using the react js</p>
                </div>
                
                <div className="relative">
                    <img className="object-cover h-[400px]" src={moneymanageImg} />
                    <p className="description">A Money Management Application. Build using the android SDK</p>
                </div>

                <div className="relative">
                    <img className="object-fit h-[400px]" src={portfolio} />
                    <p className="description">A Portfolio-website. Build using the react js</p>
                </div>                 


            </div>
            
           
        </section>
    );
}