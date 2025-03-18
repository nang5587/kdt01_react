
import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react";
export default function MyRef() {
    //컴포넌트 변수
    let cnt = 0;
    //state 변수
    const [stCnt, setStCnt] = useState(0);
    //ref 변수
    const refCnt = useRef(0);

    //컴포넌트 변수 증가 함수 : 화면에 안 나타남(화면 랜더링 안 일어남)
    const handleCnt = ()=>{
        cnt = cnt + 1;
        console.log("cnt", cnt);
    }
    //state 변수 증가 함수
    const handleStCnt = ()=>{
        setStCnt(stCnt + 1);
        // console.log("stCnt", stCnt)
    }

    //Ref 변수 증가 함수 : 랜더링 될 때 화면에 반영됨, 변수형태보다 form태그 핸들링할 때 많이 씀
    const handleRefCnt = ()=>{
        refCnt.current = refCnt.current + 1;
        console.log("refCnt", refCnt.current)
    }

    //state변수가 변경되었을 때
    useEffect(()=>{
       console.log("stCnt", stCnt)
    }, [stCnt]);
  return (
    <div className="w-full">
      <div className="w-10/12 grid grid-cols-3 gap-4">
            <div className="flex justify-center items-end my-5 text-xl font-bold">
                컴포넌트 변수 : {cnt}
            </div>
            <div className="flex justify-center items-end my-5 text-xl font-bold">
                state 변수 : {stCnt}
            </div>
            <div className="flex justify-center items-end my-5 text-xl font-bold">
                Ref 변수 : {refCnt.current}
            </div> 
            <TailButton caption="컴포넌트 변수 증가"
                        color="blue"
                        onClick={handleCnt}/>
            <TailButton caption="state 변수 증가"
                        color="blue"
                        onClick={handleStCnt}/>
            <TailButton caption="Ref 변수 증가"
                        color="blue"
                        onClick={handleRefCnt}/>
        </div>
    </div>
  )
}
