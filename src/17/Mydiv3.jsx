import TailButton from "../UI/TailButton"
import { useAtom } from "jotai"
import { cntAtom } from "./CntAtoms"
export default function Mydiv3() {
  //전역변수랑 이름 다르게 해야 함
  const [n, setN] = useAtom(cntAtom);
  return (
    <div className="w-8/10 h-8/10
                    flex flex-col justify-start items-center
                     bg-blue-100 text-white text-xl
                     p-10">
      <div className="w-full grid grid-cols-2 gap-5">
        <TailButton caption="증가"
                    color='lblue'
                    onClick={() => setN(n+1)} />
        <TailButton caption="감소"
                    color='lblue'
                    onClick={() => setN(n-1)} />
      </div>
    </div>
  )
}
