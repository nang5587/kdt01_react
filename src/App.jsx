// import Hello from "./01/Hello"
// import HelloDate from "./01/HelloDate"
import { IoHome } from "react-icons/io5";
import { PiFileJsxLight } from "react-icons/pi";
// import MyClock from "./02/MyClock";
// import Mydiv1 from "./03/Mydiv1";
import MyList from "./04/MyList";
function App() {

  return (
    <div className='w-full xl:w-8/10 h-screen mx-auto
                    flex flex-col'>
      <header className="w-full h-20 bg-amber-50
                         px-10
                         flex justify-between items-center">
        <div className="text-4xl font-bold text-emerald-900 flex flex-row">
          <PiFileJsxLight />
          KDT01
          {/* <div className="flex text-sm items-center mx-5">
            <img src={reactLogo} alt="react" className="w-8" /> + 
            <img src={viteLogo} alt="vite" className="w-8" />
          </div> */}
        </div>
        <div className="text-3xl font-bold text-black">
        <IoHome />
        </div>
      </header>
      <main className="w-full h-full flex-grow
                      pt-10
                      flex flex-col justify-start items-center
                      overflow-y-auto">
      {/* <Hello /> */}
      {/* <MyClock />
            <div className="text-medium">
              - 천원아침: 08:00~09:20 <br/>
              - 아침정식: 08:00~11:00 <br/>
              <span className="text-red-600 text-xs">아침식사시간 08:20 → 08:00 변경 운영합니다. 많은 이용부탁드립니다.</span>
            </div> */}
      {/* <Mydiv1 /> */}
      <MyList />


      </main>
      <footer className="w-full h-20 bg-emerald-900 flex justify-center items-center">
        <h2 className="text-xs text-white text-center">
          -금정식당 이용안내-<br />
          메뉴선택후(부산대 홈페이지참조) 식권 자판기에서 식권 발권후<br/>
          배식라인에 맞춰 줄을 서주셔야합니다.</h2>
      </footer>
    </div>
  )
}

export default App
