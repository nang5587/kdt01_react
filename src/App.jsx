import home from "./assets/home.png"
import MyClock from "./02/MyClock";
import Lotto from "./05/Lotto";
import FoodMain from "./06/FoodMain";
import BoxOffice from "./09/BoxOffice";
import Traffic from "./10/Traffic";
import Gallery from "./12/Gallery";
import Festival from "./13/Festival";
import Fcst from "./15/Fcst";
import FcstList from "./15/FcstList";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
    <div className='w-full xl:w-8/10 h-screen mx-auto
                    flex flex-col'>
      <header className="w-full mx-auto min-h-30 bg-linear-to-t from-yellow-50 to-sky-200
                         px-10 flex justify-between items-center">
        <div className=" text-4xl font-bold text-gray-700 flex flex-row">
          {/* <PiFileJsxLight />&nbsp; */}
          KDT01_React&nbsp;&nbsp;&nbsp;
          <p className="text-base text-white truncate">
            ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★
          </p>
        </div>
        <div className="w-1/12 text-3xl font-bold text-gray-700">
        <Link to="/">
          <img src={home} alt="home" className="w-4/5"/>
        </Link>
        </div>
      </header>
      <main className="w-full h-full flex-grow 
                       bg-yellow-50
                      flex flex-col justify-start items-center
                      overflow-y-auto">
      <ul className="w-11/12 min-h-16 py-4 bg-white rounded-2xl flex flex-row justify-center items-center
                     border-1 border-gray-100 shadow-md shadow-gray-300 mb-20 truncate">
        <li>
          <Link to="/lotto" className="w-20 h-full inline-flex text-lg text-gray-600 font-bold px-4 py-2 mr-5
                        justify-center">
                Lotto
          </Link>
        </li>
        <li>
          <Link to="/foodMain"  className="w-20 h-full inline-flex text-lg text-gray-600 font-bold px-4 py-2 mr-5
                        justify-center">
                FoodMain
          </Link>
        </li>
        <li>
          <Link to="/boxOffice"  className="w-20 h-full inline-flex text-lg text-gray-600 font-bold px-4 py-2 mr-5
                        justify-center">
                BoxOffice
          </Link>
        </li>
        <li>
          <Link to="/traffic"  className="w-20 h-full inline-flex text-lg text-gray-600 font-bold px-4 py-2 mr-5
                        justify-center">
                Traffic
          </Link>
        </li>
        <li>
          <Link to="/gallery"  className="w-20 h-full inline-flex text-lg text-gray-600 font-bold px-4 py-2 mr-5
                        justify-center">
                Gallery
          </Link>
        </li>
        <li>
          <Link to="/festival"  className="w-20 h-full inline-flex text-lg text-gray-600 font-bold px-4 py-2 mr-5
                        justify-center">
                Festival
          </Link>
        </li>
        <li>
          <Link to="/fcst"  className="w-20 h-full inline-flex text-lg text-gray-600 font-bold px-4 py-2 mr-5
                        justify-center">
                Weather
          </Link>
        </li>
      </ul>
      <Routes>
            <Route path="/" element={<MyClock />}/>
            <Route path="/lotto" element={<Lotto />}/>
            <Route path="/foodMain" element={<FoodMain />}/>
            <Route path="/boxOffice" element={<BoxOffice />}/>
            <Route path="/Traffic" element={<Traffic />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/festival" element={<Festival />}/>
            <Route path="/fcst" element={<Fcst />}/>
            <Route path="/fcstList" element={<FcstList />}/>
      </Routes>                  
      </main>
      <footer className="w-full h-20  bg-linear-to-t from-sky-200 to-yellow-50 flex justify-center items-center">
        <h2 className="text-xs text-gray-700 font-bold text-center">
          -금정식당 이용안내-<br />
          메뉴선택후(부산대 홈페이지참조) 식권 자판기에서 식권 발권후<br/>
          배식라인에 맞춰 줄을 서주셔야합니다.</h2>
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App
