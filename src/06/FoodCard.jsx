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
    // const obj =  {
    //     "구분": "광역지원센터",
    //     "시군구": "부산시",
    //     "사업장명": "부산광역푸드뱅크",
    //     "신고기준": "당연",
    //     "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    //     "연락처(대표번호)": "051-791-1377",
    //     "팩스번호": "051-714-3096",
    //     "운영주체 분류": "1. 사회복지법인",
    //     "운영주체명": "부산광역시사회복지협의회"
    //   }
  return (
    <div className="w-full h-58 border-1 border-gray-400 flex justify-start items-start">
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
        <div className="h-1/5 text-xs bg-gray-500 text-white flex items-center pt-2 pb-2 pl-3
                        cursor-pointer
                        " onClick={handleShow}>
            {isShow && `연락처(대표번호) : ${obj["연락처(대표번호)"]}, 팩스 : ${obj["팩스번호"]}`}
        </div>
      </div>
    </div>
  )
}
