import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaArrowAltCircleUp } from "react-icons/fa";

function App() {

  return (
    <div className='w-full h-full bg-blue-50'>
      <div className='w-full flex justify-center items-center p-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-bold text-6xl text-blue-950'>Vite + React</h1>
      <div className="card text-2xl text-zinc-900 font-bold animate-pulse">
        <p>
          부산대학교 KDT 1기 강나현
        </p>
      </div>
      <p className='justify-items-center mb-4'>
        오늘의 일품은 돼지국밥
      </p>
      <p className="read-the-docs justify-items-center text-xs">
        <FaArrowAltCircleUp className='text-3xl text-blue-900 mb-7 animate-bounce transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/>
        Click on the Vite and React logos to learn more
        
      </p>
    </div>
  )
}

export default App
