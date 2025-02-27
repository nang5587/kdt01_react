import { useState } from "react";

export default function MyListItem({title, imgUrl, content}) {
    const [stCnt, setStCnt] = useState(0);
    const handleClick = () => {
        setStCnt(stCnt + 1);
    }
  return (
    <div className="w-full h-full border-1 border-zinc-200 rounded-xl shadow-md shadow-gray-100
                    flex">
      <div className="w-1/4">
        <img src = {imgUrl} className=" rounded-tl-lg"/>
      </div>

      <div className="w-3/4">
        <h1 className="h-1/4 text-2xl font-bold text-zinc-600 p-5">{title}</h1>
        <p className="h-1/2 text-sm/loose font-bold  text-zinc-500 p-5">
            {content}
        </p>
        <div className="h-1/4 text-sm font-bold flex justify-end items-end p-5">
            <span className="hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                   onClick = {() => handleClick(1)}>
                💗 좋아요 {stCnt}        
            </span>
        </div>
      </div>



    </div>
  )
}
