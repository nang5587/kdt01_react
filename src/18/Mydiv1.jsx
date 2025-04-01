import Mydiv2 from "./Mydiv2"
import { useCnt } from "./UseCnt";
import { useState, useEffect } from "react";

export default function Mydiv1() {
  const n = useCnt((state)=> state.cnt)
  const [n2, setN2] = useState();
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
            (zustand) n = {n} , n2 = {n2}
        </div>
        <Mydiv2 />
    </div>
    </>
  )
}
