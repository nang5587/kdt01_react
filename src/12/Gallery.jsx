import TailCard from "../UI/TailCard"
import GallerySearch from "./GallerySearch";
import { useEffect, useState, useRef } from "react";
export default function Gallery() {
    const [tags, setTags] = useState([]);
    const [dt, setDt] = useState([]);
    const [loading, setLoading] = useState(false);
    const refInfo = useRef();

    const getFetchData = async () => {
        setLoading(true);
        const korApiKey = import.meta.env.VITE_APP_API_KEY;
        let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?" ;
        url = `${url}serviceKey=${korApiKey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = `${url}&keyword=${encodeURI(refInfo.current.value)}&_type=json`;
        
        const resp = await fetch(url);
        const data = await resp.json();
        const dataList = data.response.body.items.item;
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
        setLoading(false);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(refInfo.current.value == ''){
            alert('검색어를 입력하세요');
            refInfo.current.focus();
        }
       setDt(refInfo.current.value);
    }

    const handleReset = (e) => {
        e.preventDefault();
        refInfo.current.focus();      
        refInfo.current.value = '';
        setTags([]);
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
    <div className="w-10/12 flex flex-col justify-center items-center">
        <GallerySearch title="한국관광공사 관광사진 정보"
                        refInfo={refInfo}
                        handleClick={handleClick}
                        handleReset={handleReset} />
       {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-12 h-12 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="w-full grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                    {tags}
                </div>
            )}
        </div>
    );
}