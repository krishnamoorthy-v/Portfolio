import "../App.css"

export default function Contact() {
    return (
        <section id="contact" className="bg-primary w-full h-full p-5 flex flex-col text-white  ">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold flex justify-center py-5"><span className="border-b-4 border-[#024950]" >Contact</span></h1>
                <p className="flex justify-center py-2 text-center">If you want to discuss more in detail, please contact me</p>
                <p className="flex justify-center py-2"><b>Email</b>:clashkrishnamvp@gmail.com</p>
                <p className="flex justify-center py-2"><b>Phone</b>:</p>

            </div>
        
        </section>
    );
}