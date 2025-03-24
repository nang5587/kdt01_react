import bank from '../assets/bank.png'
import busan from '../assets/busan.png'
import market from '../assets/market.png'
import { useState } from 'react'
export default function FoodCard({obj}) {
    const imgs = {
        "광역지원센터" : busan,
        "기초푸드뱅크" : bank,
        "기초푸드마켓" : market,
    }
    const [isShow, setIsShow] = useState(false);
    const handleShow = () => {
        setIsShow(!isShow);
    }

  return (
    <div className="w-full h-58  rounded-2xl text-gray-600 bg-white flex justify-start items-start
                    shadow-md">
      <div className="w-1/4 flex justify-center pt-3 pl-3">
        <img src={imgs[obj["구분"]]} alt= {obj["구분"]} />
      </div>
      <div className="w-3/4 h-full flex flex-col px-4 py-5">
        <div className="h-1/5 mb-1">
            <p className='text-xl font-bold'>{obj["사업장명"]}</p> 
        </div>
        <div className="h-1/5 mb-1">
            <p className='text-base font-bold'>{obj["운영주체명"]}</p>
        </div>
        <div className="h-2/5">
            <p className='text-xs text-gray-500'>{obj["사업장 소재지"]}</p>
        </div>
        <div className="h-1/5 " onClick={handleShow}>
            <p className='h-11/12 text-xs bg-gray-400 rounded-2xl font-bold text-white flex items-center px-3 py-1
                        cursor-pointer'>{isShow && `연락처(대표번호) : ${obj["연락처(대표번호)"]}, 팩스 : ${obj["팩스번호"]}`}</p>
        </div>
      </div>
    </div>
  )
}
