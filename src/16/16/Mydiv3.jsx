import TailButton from "../../UI/TailButton";
export default function Mydiv3({n,setN}) {
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
