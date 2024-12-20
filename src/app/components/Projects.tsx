import Image from "next/image"

export default function Projects(){
    return (
        <div id="Projects" className="w-[1360px] h-[900px] bg-slate-300">
  <h1 className="text-4xl ml-32 pt-3 mb-8 transition hover:underline"><b>My Projects</b></h1>
  <div className="grid grid-cols-3 gap-6 px-36">
    <div className="bg-white shadow-md p-4 rounded-lg transition duration-1000 hover:scale-110 hover:bg-slate-300">
    <Image src="/simple-calculator.png" alt="calculator" width={300} height={200}></Image>
    <h2 className="text-2xl mt-12">Project 1</h2>
      <p className="text-gray-700">A simple Typescript based calculator for performing essential arithmetic operation.</p>
      <a href="https://github.com/Umairshaikh12/Smart-Mini-calculator" target="_blank" className="text-blue-500 mt-4 inline-block">
        View on GitHub
      </a>
    </div>




    <div className="bg-white shadow-md p-4 rounded-lg transition duration-1000 hover:scale-110 hover:bg-slate-300">
    <Image src="/task manager app.png" alt="calculator" width={300} height={200}></Image>

      <h2 className="text-2xl mt-9">Project 2</h2>
      <p className="text-gray-700">A React and typescript based app for managing and organizing your task efficiently.</p>
      <a href="https://github.com/Umairshaikh12/To-do-list" target="_blank" className="text-blue-500 mt-4 inline-block">
        View on GitHub
      </a>
    </div>



    <div className="bg-white shadow-md p-4 rounded-lg transition duration-1000 hover:scale-110 hover:bg-slate-300">
    <Image src="/currency-exchange.png" alt="calculator" width={300} height={200}></Image>

      <h2 className="text-2xl mt-1">Project 3</h2>
      <p className="text-gray-700">This is a currency exchange converter use to convert your currency value easily with real time rates.</p>
      <a href="https://github.com/Umairshaikh12/Currency-converter" target="_blank" className="text-blue-500 mt-4 inline-block">
        View on GitHub
      </a>
    </div>




    <div className="bg-white shadow-md p-4 rounded-lg transition duration-1000 hover:scale-110 hover:bg-slate-300">
    <Image src="/word-counter.png" alt="calculator" width={300} height={200}></Image>
      <h2 className="text-2xl mb-2">Project 4</h2>
      <p className="text-gray-700">Javascript based app through which you can easily count your words</p>
      <a href="https://github.com/Umairshaikh12/Word-count" target="_blank" className="text-blue-500 mt-4 inline-block">
        View on GitHub
      </a>
    </div>


    
    <div className="bg-white shadow-md p-4 rounded-lg transition duration-1000 hover:scale-110 hover:bg-slate-300">
    <Image src="/atm-machine.png" alt="calculator" width={300} height={200}></Image>
      <h2 className="text-2xl mt-14">Project 5</h2>
      <p className="text-gray-700">I made a ATM machine program which can be used for ATM installation</p>
      <a href="https://github.com/Umairshaikh12/ATM-machine" target="_blank" className="text-blue-500 mt-4 inline-block">
        View on GitHub
      </a>
    </div>


    
    <div className="bg-white shadow-md p-4 rounded-lg transition duration-1000 hover:scale-110 hover:bg-slate-300">
    <Image src="/Number-Guessing.png" alt="calculator" width={300} height={200}></Image>
      <h2 className="text-2xl mt-16">Project 6</h2>
      <p className="text-gray-700">This is a simple cli number guessing program</p>
      <a href="https://github.com/Umairshaikh12/Number-guessing-game" target="_blank" className="text-blue-500 mt-4 inline-block">
        View on GitHub
      </a>
    </div>

  </div>
</div>

    
    )
}