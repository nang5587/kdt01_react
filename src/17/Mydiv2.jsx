import Mydiv3 from "./Mydiv3"

export default function Mydiv2() {
  return (
    <div className="w-8/10 h-8/10
                    flex flex-col justify-start items-center
                     bg-blue-200 text-white text-xl
                     p-10">
      <div className="w-full text-left mb-10">
        Mydiv2
        </div>
      <Mydiv3 />
    </div>
  )
}
