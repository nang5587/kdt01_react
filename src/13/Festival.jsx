import TailSelect from "../UI/TailSelect"
import TailCard from "../UI/TailCard";
import mark from "../assets/busanMark.png"
import { useState, useEffect, useRef } from "react";
export default function Festival() {
    const [dt, setDt] = useState([]);
    const [sel, setSel] = useState([]);
    const [tag, setTag] = useState([]);
    const refInfo = useRef();

    const getFetchData = async() => {
        const apiKey = import.meta.env.VITE_APP_API_KEY;
        let url = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?";
        url = `${url}serviceKey=${apiKey}&pageNo=1&numOfRows=39&resultType=json`;
        
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(url);
        const dataList = data.getFestivalKr.item;
        console.log(dataList);

        setDt(dataList)
    }
    useEffect(()=>{
        getFetchData();
    }, []);

    useEffect(()=>{
        if(!dt) return;
        let tm = dt.map(item => item["GUGUN_NM"]);
        let list = [...new Set(tm)];
        list = list.sort();
        setSel(list);
    }, [dt]);

    const handleChange = ()=>{
        console.log("부산바다축제(한,영, 중간,중번,일)".split('('));
        let ndt = dt.filter(item => item["GUGUN_NM"] == refInfo.current.value)
                            .map(item => 
                                <TailCard
                                key={item["UC_SEQ"]}
                                title = {item.MAIN_TITLE.split('(')[0]}
                                subtitle={item["TRFC_INFO"]}
                                imgurl={item["MAIN_IMG_THUMB"]}
                                kws={item["USAGE_DAY_WEEK_AND_TIME"]}
                                />
                    );
        setTag(ndt);
    }

  return (
    <>
    <div className="w-10/12 flex flex-col justify-center items-center">
        <h2 className="w-full flex flex-row justify-center items-center text-3xl text-center font-bold text-gray-600 mb-10">
            <img src={mark} className="w-8" />
            &nbsp;Busan Festival
        </h2>
        <div className="w-1/2">
            <TailSelect id="text1" refSel={refInfo} items={sel} handleChange={handleChange}/>
        </div>
        <div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {tag}
        </div>
    </div>
    </>
  )
}
