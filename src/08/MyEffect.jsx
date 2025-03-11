import { useEffect, useState } from "react"
import TailButtonLine from "../UI/TailButtonLine"
export default function MyEffect() {
    const [msg, setMsg] = useState('');
    const[color, setColor] = useState('blue');
    const handleClick = () => {
        if(msg == '') setMsg("useEffect 예제: state변수 변경 시");
        else setMsg('')
    }
    const handleClickColor = ()=>{
        setColor(color == "blue" ? "orange" : "blue")
    }
    //useEffect 사용법 -> 첫번째 인수는 콜백 함수/ 한 번만 실행, 의존성 배열에 의해 실행, 없으면 컴포넌트 생성 시 실행
    useEffect(()=>{
        console.log("의존성 배열 []일 때 컴포넌트 생성 시 한 번 실행");
        console.log("msg=", msg);
        console.log("color=", color);
    } , []);
    //특정 state 변수 값이 변경(화면 랜더링)될 때 마다
    useEffect(()=>{
        setColor(color == "blue" ? "orange" : "blue")
        console.log("state변수 useEffect msg=", msg);
        console.log("state변수 useEffect color=", color);
    }, [msg]);
    //어떤 state변수든 변경(화면 랜더링)이 될 때 마다
    useEffect(()=>{
        console.log("useEffect msg=", msg);
        console.log("useEffect color=", color);
    });
  return (
    <div className="w-full text-2xl font-bold
                    flex flex-col justify-center items-center">
        <div className="text-2xl font-bold m-2 h-20">
            {msg}
        </div>
      <TailButtonLine caption="useEffect 예제" color="blue" onClick={handleClick}/>
      <TailButtonLine caption="useEffect 예제" color={color} onClick={handleClickColor}/>
    </div>
  )
}
