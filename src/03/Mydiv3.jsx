export default function Mydiv3({m1, m2, m3}) {
  return (
    <div className="w-8/10 h-8/10
                    flex flex-col justify-start items-center
                     bg-emerald-600 text-white text-xl
                     p-10">
        <div className="w-full text-left mb-10">
        {m1} > {m2} > {m3}
        </div>
    </div>
  )
}
