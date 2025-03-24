
import TailButton from "../UI/TailButton"
export default function TrafficNav({title, ct, selc, setSelC}) {
    const tags = ct.map(item => <TailButton key={item} caption={item}
                                    color={selc == item? "blue" : "lblue"} 
                                    onClick={()=> setSelC(item) } />);
  return (
    <div className="w-11/12 flex justify-between items-center my-5">
        <div className="w-1/4 font-bold text-2xl text-gray-600 ml-10">
            교통사고 {title}
        </div>
        <div className="flex flex-row text-sm">
            {tags}
        </div>
    </div>
  )
}
