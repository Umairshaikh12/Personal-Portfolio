import Image from "next/image"
export default function Hero(){
    return(
            

        <div id="Hero" className="w-[1360px] h-[550px] bg-slate-300 flex ">
        <div className="pt-28 ml-32">
        <Image src="/profile.png" alt="profile-image" width={350} height={300}/>
        </div>

        <div className="flex flex-col items-center pt-28">
        <h1 className="text-4xl transition hover:underline"><b>Hi , I am Muhammad Umair</b></h1>
        <p className="ml-32 text-lg pt-5">A front-end developer, astute in creating visually appealing,user-friendly<br></br>  web interfaces using technologies like HTML, CSS, JavaScript, and frameworks <br></br>such as React or Next.js. It includes projects demonstrating responsive design,<br></br> accessibility, and interactive functionality.</p></div>   
         </div> 
        
            

       
    )
}