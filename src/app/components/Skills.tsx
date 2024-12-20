

export default function Skills (){
    return(
        <div id="Skills" className="w-[1360px] h-[300px] bg-gray-500 flex flex-row">
            <div className="flex flex-col">
            <h1 className="ml-32 text-2xl pt-2"><b>Technologies I work with</b></h1>
            <p className="ml-32 pt-3 text-lg">I have a solid foundation in Web development, specializing in HTML, CSS and Javascript.<br></br>My experience extends to using frameworks like React and Next.js to create dynamic and<br></br>user friendly applications. I am also proficient in Tailwind CSS for efficient styling and<br></br>design. With a passion for learning, I stay updated on the latest technologies to enhance<br></br>my skills set and contribute effectively to projects</p>
            </div>



            <div className="flex flex-col ml-44">
            <h1 className="text-2xl pt-2"><b>Skills</b></h1>
            <ul className="pt-3 text-lg">
                <li className=" transition duration-1000 hover:scale-125 hover:bg-slate-300">HTML</li>
                <li className="transition duration-1000 hover:scale-125 hover:bg-slate-300">CSS</li>
                <li className="transition duration-1000 hover:scale-125 hover:bg-slate-300">Javascript</li>
                <li className="transition duration-1000 hover:scale-125 hover:bg-slate-300">Tailwind</li>
                <li className="transition duration-1000 hover:scale-125 hover:bg-slate-300">React.js</li>
                <li className="transition duration-1000 hover:scale-125 hover:bg-slate-300">Next.js</li>
            </ul>
            </div>



        </div>
    )
}