import Mydiv2 from "./Mydiv2"
import { useState, useEffect } from "react";
export default function Mydiv1() {
  const [n, setN] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(()=>{
    setN2(n*2);
  }, [n]);

  return (
    <>
    <div className="w-8/10 h-8/10
                    flex flex-col justify-start items-center
                     bg-blue-300 text-white text-xl
                     p-10">
        <div className="w-full text-left mb-10">
            n = {n} , n2 = {n2}
        </div>
        <Mydiv2 n={n} setN={setN}/>
    </div>
    </>
  )
}
