import TailButton from "../UI/TailButton"
import { Link, useNavigate } from "react-router-dom"
export default function RouteHome() {
    const navigate = useNavigate();

  return (
    <div className="w-10/12 h-full flex flex-col justify-start items-center">
      <ul className="w-70">
        <li>
            <Link to="/p1/🥕/채소"  className="w-full inline-flex bg-white text-base text-gray-600 font-bold px-4 py-1 mr-5 mb-5
                        border-1 border-gray-100 shadow-md shadow-gray-300 rounded-2xl justify-center">
                당근 🥕
            </Link>
        </li>
        <li >
            <Link to="/p1/🍥/단백질" className="w-full inline-flex bg-white text-base text-gray-600 font-bold px-4 py-1 mr-5 mb-5
                        border-1 border-gray-100 shadow-md shadow-gray-300 rounded-2xl justify-center">
                어묵 🍥
            </Link>
        </li>
        <li>
            <Link to="/p1/🍙/탄수화물"  className="w-full inline-flex bg-white text-base text-gray-600 font-bold px-4 py-1 mr-5 mb-5
                        border-1 border-gray-100 shadow-md shadow-gray-300 rounded-2xl justify-center">
                주먹밥 🍙
            </Link>
        </li>
        <TailButton caption="사과 🍎" color="lblue" onClick={()=>navigate("/p2?item1=🍎&item2=과일")}/>
        <TailButton caption="치즈 🧀" color="lblue" onClick={()=>navigate("/p2?item1=🧀&item2=유제품")}/>
        <TailButton caption="우유 🥛" color="lblue" onClick={()=>navigate("/p2?item1=🥛&item2=유제품")}/>
      </ul>
    </div>
  )
}
