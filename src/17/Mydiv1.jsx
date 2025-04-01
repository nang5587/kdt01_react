import Mydiv2 from "./Mydiv2"
import { useAtom } from "jotai";
import { cntAtom, cntAtom2 } from "./CntAtoms";

export default function Mydiv1() {
  //ATOM 값만 넣어줌
  const [n] = useAtom(cntAtom);
  const [n2] = useAtom(cntAtom2);

  return (
    <>
    <div className="w-8/10 h-8/10
                    flex flex-col justify-start items-center
                     bg-blue-300 text-white text-xl
                     p-10">
        <div className="w-full text-left mb-10">
            (jotai) n = {n} , n2 = {n2}
        </div>
        <Mydiv2 />
    </div>
    </>
  )
}
