import { useLocation, useSearchParams } from "react-router-dom"
export default function RoutePage2() {
    const loc = useLocation();
    console.log("locpathname=", loc.pathname);
    console.log("locsearch=", loc.search);

    const [sParams] = useSearchParams();

    let item1 = sParams.get('item1');
    let item2 = sParams.get('item2');
    
  return (
    <div className="w-full flex justify-center items-center font-bold text-xl text-gray-600
                    ">
      { !item1 ? "★ page2 메뉴를 선택하셨습니다 ★"
                    : `${item1}은 ${item2}입니다.`}
    </div>
  )
}
