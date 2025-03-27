import fcstdata from "./getxy.json"
import TailSelect from "../UI/TailSelect";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TailButton from "../UI/TailButton";
export default function Fcst() {
    const refInfo = useRef();
    const refDate = useRef();
    const navigate = useNavigate();

    let tm = fcstdata.map(item => item["1단계"]);
    tm = ["---시도선택---", ...tm];
    console.log(tm);

    const handleChange = () => {
        console.log(refInfo.current.value)
    }

    const handleClick = (gubun) => {
        if(refInfo.current.value == "---시도선택---"){
            alert("시도를 선택하세요.");
            refInfo.current.focus();
            return;
        }
        const ntm = fcstdata.filter(item => item["1단계"] == refInfo.current.value)[0];
        const x = ntm["격자 X"];
        const y = ntm["격자 Y"];
        
        navigate(`/fcstList?dt=${refDate.current.value}&si=${refInfo.current.value}&gubun=${gubun}&x=${x}&y=${y}`);
        console.log(refDate.current.value, gubun, refInfo.current.value, x, y);
    }

    useEffect(()=>{
        refDate.current.value = new Date().toISOString().split('T')[0];
    }, []);

  return (
    <>
    <h2 className="text-2xl font-bold text-gray-600 mb-5">일기예보 선택</h2>
    <form className="w-full flex flex-col justify-center items-center"
        onSubmit={(e)=>e.preventDefault()}>

      <div className="w-11/12 flex justify-around">
        <input type="date" ref={refDate} id="date" className="w-1/3 my-5 px-4 py-1 bg-white border border-gray-200 rounded-lg shadow-sm 
                          focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 cursor-pointer"/>
        <p className="w-1/3"><TailSelect 
                                        id="sel"
                                        refSel={refInfo}
                                        items={tm}
                                        handleChange={handleChange}
                                        />
        </p>
      </div>

      <div className="w-11/12 flex justify-around items-center">
        <p className="w-1/3"><TailButton    caption="초단기예보"
                                            color="lblue"
                                            onClick={()=>handleClick("초단기예보")} 
                                            />
        </p>
        <p className="w-1/3"><TailButton    caption="단기예보"
                                            color="lblue"
                                            onClick={()=>handleClick("단기예보")}
                                            />
        </p>
      </div>
    </form>
    </>
  )
}
