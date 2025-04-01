import TailButton from "../UI/TailButton"
import { useCnt } from "./UseCnt"


export default function Mydiv3() {
  const n = useCnt((state)=> state.cnt)
  const increase = useCnt((state)=>state.increase);
  const decrease = useCnt((state)=>state.decrease);
  const handleSave = () => {
    localStorage.setItem("n", n);
  }

  return (
    <div className="w-8/10 h-8/10
                    flex flex-col justify-start items-center
                     bg-blue-100 text-white text-xl
                     p-10">
      <div className="w-full grid grid-cols-2 gap-5">
        <TailButton caption="증가"
                    color='lblue'
                    onClick={increase} />
        <TailButton caption="감소"
                    color='lblue'
                    onClick={decrease} />
        <TailButton caption="저장"
                    color='lorange'
                    onClick={handleSave} />
      </div>
    </div>
  )
}
