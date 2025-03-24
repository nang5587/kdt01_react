// import Hello from "./01/Hello"
// import HelloDate from "./01/HelloDate"
// import { IoHome } from "react-icons/io5";
import home from "./assets/home.png"
// import { PiFileJsxLight } from "react-icons/pi";
// import MyClock from "./02/MyClock";
// import Mydiv1 from "./03/Mydiv1";
// import MyList from "./04/MyList";
// import Lotto from "./05/Lotto";
// import FoodMain from "./06/FoodMain";
// import MyToggle from "./07/MyToggle";
// import MyEffect from "./08/MyEffect";
// import BoxOffice from "./09/BoxOffice";
// import Traffic from "./10/Traffic";
// import MyRef from "./11/MyRef";
// import Gallery from "./12/Gallery";
import Festival from "./13/Festival";
function App() {

  return (
    <div className='w-full xl:w-8/10 h-screen mx-auto
                    flex flex-col'>
      <header className="w-full min-h-20 bg-linear-to-t from-amber-50 to-sky-200
                         px-10
                         flex justify-between items-center">
        <div className="text-4xl font-bold text-gray-700 flex flex-row">
          {/* <PiFileJsxLight />&nbsp; */}
          KDT01_React&nbsp;&nbsp;&nbsp;
          <p className="text-base text-white">
            ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★
          </p>
          {/* <div className="flex text-sm items-center mx-5">
            <img src={reactLogo} alt="react" className="w-8" /> + 
            <img src={viteLogo} alt="vite" className="w-8" />
          </div> */}
        </div>
        <div className="w-15 text-3xl font-bold text-gray-700">
        {/* <IoHome /> */}
        <img src={home} alt="home"/>
        </div>
      </header>
      <main className="w-full h-full flex-grow 
                      pt-10 bg-amber-50
                      flex flex-col justify-start items-center
                      overflow-y-auto">
      {/* <Hello /> */}
      {/* <MyClock />
            <div className="text-medium font-bold mt-15 text-gray-700 text-center my-5">
              <p className="my-5">
                🔈 천원아침: 08:00~09:20 <br/>
                🔈 아침정식: 08:00~11:00 <br/>
              </p>
              <span className="text-sky-800 text-xs bg-white rounded-2xl px-3 py-0.5">아침식사시간 08:20 → 08:00 변경 운영합니다. 많은 이용부탁드립니다.</span>
            </div> */}
      {/* <Mydiv1 /> */}
      {/* <MyList /> */}
      {/* <Lotto /> */}
      {/* <FoodMain /> */}
      {/* <MyToggle /> */}
      {/* <MyEffect /> */}
      {/* <BoxOffice /> */}
      {/* <Traffic /> */}
      {/* <MyRef /> */}
      {/* <Gallery /> */}
      <Festival />
      </main>
      <footer className="w-full h-20  bg-linear-to-t from-sky-200 to-amber-50 flex justify-center items-center">
        <h2 className="text-xs text-gray-700 font-bold text-center">
          -금정식당 이용안내-<br />
          메뉴선택후(부산대 홈페이지참조) 식권 자판기에서 식권 발권후<br/>
          배식라인에 맞춰 줄을 서주셔야합니다.</h2>
      </footer>
    </div>
  )
}

export default App
