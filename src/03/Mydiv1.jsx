import Mydiv2 from "./Mydiv2"
export default function Mydiv1() {
    let mdv1 = "Mydiv1"
    let mdv2 = "Mydiv2"
    let mdv3 = "Mydiv3"
  return (
    <>
    <div className="w-8/10 h-8/10
                    flex flex-col justify-start items-center
                     bg-emerald-800 text-white text-xl
                     p-10">
        <div className="w-full text-left mb-10">
            {mdv1}
        </div>
      <Mydiv2 md1={mdv1} md2={mdv2} md3={mdv3}/>
    </div>
    </>
  )
}
