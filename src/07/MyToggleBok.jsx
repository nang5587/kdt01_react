import TailButtonLine from "../UI/TailButtonLine";
import { useState } from "react";
export default function MyToggleBok({color}) {
    const[bgcolor, setBgcolor] = useState(false);
    
    const handleClick = () => {
        setBgcolor(!bgcolor);
    } 

    const bg700 ={
        "blue" : "bg-blue-200",
        "orange" : "bg-orange-200",
    }

  return (
    <div className={`w-full flex flex-col justify-center items-center p-5 ${bgcolor && bg700[color]}`}>
        <TailButtonLine caption={color} color="gray" onClick={()=>{}}/>
        <TailButtonLine caption={`${color} Toggle`} color={color} onClick={handleClick}/>
    </div>
  )
}