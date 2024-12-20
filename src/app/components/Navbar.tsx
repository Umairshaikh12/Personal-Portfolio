
export default function Navbar(){
    return(
        <div>

        <div className="w-[1360px] h-[90px] bg-gray-500">
        <ul className="flex justify-end gap-14 pt-7 text-xl">
            <li className="transition hover:underline"><a href="#Hero">Home</a></li>
            <li className="transition hover:underline"><a href="#About">About</a></li>
            <li className="transition hover:underline"><a href="#Projects">Projects</a></li>
            <li className="transition hover:underline"><a href="#Skills">Skills</a></li>
            <li className="transition hover:underline"><a href="#Contact">Contact</a></li>
            <button className="bg-slate-300 w-44 h-10 rounded-2xl mr-8 pb-3 transiton hover:bg-white hover:underline">Download Resume</button>
        </ul>
        </div>
        
        </div>
        
    )
}








