import { useSearchParams } from "react-router-dom"
import { useRef, useEffect, useState } from "react";
import getdata from "./getcode.json"
import TailSelect from "../UI/TailSelect";
export default function FcstList() {
  const refsel = useRef();
  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);
  const [sParams] = useSearchParams();

  let dt = sParams.get('dt');
  let si = sParams.get('si');
  let gubun = sParams.get('gubun');
  let x = sParams.get('x');
  let y = sParams.get('y');

  let selList = getdata.filter( item => item["예보구분"] == gubun)
                    .map(item => `${item["항목명"]}(${item["항목값"]})`);

  const getFetchData = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY; 
    let gb ="";
    let baseTime ="";

    if(gubun == "단기예보"){
      gb = "getVilageFcst";
      baseTime = "0500";
    }
    else {
      gb = "getUltraSrtFcst";
      baseTime = "0630";
    }

    dt = dt.replaceAll('-', '');

    let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/";
    url = `${url}${gb}?serviceKey=${apiKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=${baseTime}&nx=${x}&ny=${y}`
    console.log(url);
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);
    const tm = data.response.body.items.item;
    setData(tm);
    console.log(tm);
  }

  const handleChange = () => {
    let sel = refsel.current.value.split('(')[1].replace(')', '');
    let data2 = data.filter(item => item["category"] == sel);
    // refsel.current.value = sel;
    console.log(data2);
    console.log(sel);

    let p = getdata.filter(item => item["항목값"] == sel)[0];
    p = p["단위"];
    console.log(p);
    let table = data2.map(item => 
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                                                                                                             hover:bg-gray-50 dark:hover:bg-gray-600 hover:cursor-pointer hover:font-bold">
                                            <td className="px-6 p-4 text-center">
                                              {refsel.current.value}
                                            </td>
                                            <td className=" px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                              {item.fcstDate.slice(0,4)+"-"+item.fcstDate.slice(4,6)+"-"+item.fcstDate.slice(6,8)}
                                            </td>
                                            <td className=" px-6 py-4 text-center">
                                              {item.fcstTime.slice(0,2)+":"+item.fcstTime.slice(2,4)}
                                            </td>
                                            <td className=" px-6 py-4 text-center">
                                              {item.fcstValue}{p}
                                            </td>
                                          </tr>
    );
    setTags(table);
    console.log("data : ", refsel.current.value);
  }

  useEffect(()=>{
     getFetchData();
     
  }, []);

  useEffect(()=>{
    
  }, [data]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-10/12 grid grid-cols-2 gap-5 place-items-center mb-5">
        <h2 className="w-full text-2xl text-gray-600 font-bold truncate">{si} {gubun} ({dt})</h2>
        <p className="w-full"><TailSelect
                                          id="selName"
                                          refSel={refsel}
                                          items={selList}
                                          handleChange={handleChange}
                              />
        </p>
      </div>

      <table className="w-10/12 text-sm text-left rtl:text-right text-gray-600 dark:text-gray-400 mb-10">
      <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <td className="w-1/4 font-bold px-6 py-3 text-center">
            항목명
          </td>
          <th className="w-1/4 px-6 py-3 text-center">
            예측일자
          </th>
          <th className="w-1/4 px-6 py-3 text-center">
            예측시간
          </th>
          <th className="w-1/4 px-6 py-3 text-center">
            예측값
          </th>
        </tr>
      </thead>
      <tbody>
        {tags}    
      </tbody>
    </table>
    </div>
  )
}
