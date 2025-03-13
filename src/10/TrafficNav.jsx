
import TailButton from "../UI/TailButton"
export default function TrafficNav({title, ct, selc, setSelC}) {
    const tags = ct.map(item => <TailButton key={item} caption={item}
                                    color={selc == item? "lblue" : "blue"} 
                                    onClick={()=> setSelC(item) } />);
  return (
    <div className="w-11/12 flex justify-between items-center my-5">
        <div className="font-bold text-2xl ml-10">
            교통사고 {title}
        </div>
        <div className="flex flex-row">
            {tags}
        </div>
    </div>
  )
}
