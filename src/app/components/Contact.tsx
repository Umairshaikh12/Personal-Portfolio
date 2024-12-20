import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";






export default function Contact(){
    return(

        <div id="Contact" className="w-[1360px] h-[400px] bg-slate-300 flex flex-row justify-between">

        <div className="flex flex-col">



            <h1 className="text-4xl ml-32 pt-12"><b>Get in Touch</b></h1>
            <p className="ml-32 pt-4 text-lg">You can drop a message here </p>

            <form className="ml-32 mt-4" action="/Send">
            <li><input type="text" placeholder="Your Name"></input></li>
            <br></br>
            <li><textarea name="message" placeholder="Please drop your message here"></textarea></li>
            <li><button className="w-32 h-10 bg-green-600 ml-1 mt-5">Send</button></li>
            </form>
            </div>




            <div className="flex flex-col items-start pt-12 mr-44">
                <h2 className="text-2xl"><b>Connect with me</b></h2>
            <a href="https://www.linkedin.com/in/muhammad-umair-49193b334" target="_blank" className="text-blue-500 text-3xl flex items-center pt-6 transition hover:underline gap-2"><FaLinkedin/>  Linkedin</a>

            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100000760317874" target="_blank" className="text-blue-500 text-3xl flex items-center pt-6 transition hover:underline gap-2"><FaFacebook /> Facebook</a>


            <a href="https://mail.google.com/mail/u/0/?hl=en-GB#inbox" target="_blank" className="text-blue-500 text-3xl flex items-center pt-6 transition hover:underline gap-2"><CgMail />
            Gmail</a>

            <a href="tel:+92 315 6225537" target="_blank" className="text-blue-500 text-3xl flex items-center pt-6 transition hover:underline"><FaWhatsapp />+92 315 6225537
            </a>



            </div>


        

            </div>
    )
}



