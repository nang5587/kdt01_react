import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import RouteNav from "./RouteNav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function RouteMain() {
  return (
    <BrowserRouter>
        <div className="w-full h-full flex flex-col items-start justify-center">
            <div className="w-full h-1/5 flex justify-center items-start">
            <RouteNav />
            </div>
            <div className="w-full h-4/5 flex justify-center items-start">
            <Routes>
                {/* path="/" 루트 */}
                <Route path="/" element={<RouteHome />} />
                <Route path="/p1/:item1/:item2" element={<RoutePage1 />} />
                <Route path="/p2" element={<RoutePage2 />} />
            </Routes>
            </div>
        </div>
    </BrowserRouter>
  )
}
