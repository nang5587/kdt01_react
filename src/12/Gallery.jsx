import TailCard from "../UI/TailCard"
import TailButton from "../UI/TailButton"
import { useEffect, useState, useRef } from "react";
export default function Gallery() {
    const [tags, setTags] = useState([]);
    const [dt, setDt] = useState([]);
    const refInfo = useRef();

    const getFetchData = async () => {
        const korApiKey = import.meta.env.VITE_APP_API_KEY;
        let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?" ;
        url = `${url}serviceKey=${korApiKey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ed%83%9c%ec%a2%85%eb%8c%80&_type=json`;
        const resp = await fetch(url);
        const data = await resp.json();
        const dataList = data.response.body.items.item ;
        let tm = dataList.map(item => 
                                        <TailCard
                                        key={item.galContentId} 
                                        title={item.galTitle}
                                        subtitle={item.galPhotographyLocation}
                                        imgurl={item.galWebImageUrl}
                                        kws={item.galSearchKeyword}/>
                                       
                            );
        setTags(tm);
        console.log("tm", tm);
    }

    const handleClick = (e) => {
        e.preventDefault();
       setDt(refInfo.current.value);
    }
    useEffect(()=>{
        refInfo.current.focus();      
        refInfo.current.value = '';      
    }, []);

    useEffect(()=>{
        if(!dt || dt.length == 0) return;
        // if(dt.toString() == '태종대')
        console.log(dt);
        getFetchData();
    }, [dt]);
    
  return (
    <div>
        <div className="w-full flex justify-center items-center mb-10">
            <h2 className="font-bold text-3xl">한국관광공사_관광사진 정보</h2>
        </div>
        <div className="w-full">
            <form className="w-full flex flex-row justify-center items-center mb-10 mx-5">
            <input ref={refInfo}
                type="text" name="word" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                    mr-5"/>
                <span  className="mr-5 w-1/5"><TailButton caption="확인"
                            color="blue"
                            onClick={handleClick} /></span>
                <span className="mr-5 w-1/5"><TailButton caption="취소"
                            color="blue"
                            onClick={()=>{}} /></span>
            </form>
        </div>
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-4">
            {tags}
        </div>
    </div>
  )
}
