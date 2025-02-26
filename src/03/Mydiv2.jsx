import Mydiv3 from "./Mydiv3"

export default function Mydiv2({md1, md2, md3}) {
  return (
    <div className="w-8/10 h-8/10
                    flex flex-col justify-start items-center
                     bg-emerald-700 text-white text-xl
                     p-10">
        <div className="w-full text-left mb-10">
            {md1} > {md2}
        </div>
      <Mydiv3 m1={md1} m2={md2} m3={md3} />
    </div>
  )
}
