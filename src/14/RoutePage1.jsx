import { useParams } from "react-router-dom"
export default function RoutePage1() {
    const {item1, item2} = useParams();
  return (
    <div className="w-full flex justify-center items-center font-bold text-xl text-gray-600
                    ">
        { item1 == 'm' ? "★ page1 메뉴를 선택하셨습니다 ★"
                    : `${item1}은 ${item2}입니다.`}
    </div>
  )
}
