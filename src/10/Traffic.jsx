import { useEffect, useState } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
    const [tdata, setTdata] = useState([]);

    const myApiKey = import.meta.env.VITE_APP_API_KEY;
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18'
    url = `${url}&serviceKey=${myApiKey}`;

    // fetch 데이터 가져오기
    const getFetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.data);
    }

    // 대분류 및 사고유형 상태 관리
    const [c1, setC1] = useState([]);
    const [selC1, setSelC1] = useState(null);
    const [c2, setC2] = useState([]);
    const [selC2, setSelC2] = useState(null);
    const [info, setInfo] = useState(null);

    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        if (tdata.length === 0) return;
        console.log("tdata", tdata);

        // 대분류 데이터 (중복 제거)
        let tm = [...new Set(tdata.map(item => item["사고유형대분류"]))];
        setC1(tm);
    }, [tdata]);

    useEffect(() => {
        if (!selC1) return;
        console.log("선택된 대분류:", selC1);

        setC2([]);
        setSelC2(null);
        setInfo(null);

        let tm = [...new Set(tdata.filter(item => item["사고유형대분류"] === selC1).map(item => item["사고유형"]))];
        setC2(tm);
    }, [selC1]);

    useEffect(() => {
        if (!selC1 || !selC2) return;
        console.log("선택된 사고유형:", selC2);

        let selectedData = tdata.find(item => item["사고유형대분류"] === selC1 && item["사고유형"] === selC2);

        if (selectedData) {
            let infokey = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];
            setInfo(
                <div className="grid grid-cols-2 gap-4 w-full max-w-2xl mt-5">
                    {infokey.map(item => (
                        <div key={item} className="bg-white shadow-lg p-4 rounded-lg text-center">
                            <p className="text-gray-500 font-bold">{item}</p>
                            <p className="text-lg font-bold text-gray-700">{parseInt(selectedData[item]).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            );
        }
    }, [selC2]);

    return (
        <div className="w-full h-full flex flex-col items-center p-5">
            
            <div className="w-full flex flex-col jus items-center">
                {c1.length > 0 && <TrafficNav title="대분류" ct={c1} selc={selC1} setSelC={setSelC1} />}
                {c2.length > 0 && <TrafficNav title="사고유형" ct={c2} selc={selC2} setSelC={setSelC2} />}
            </div>

            <div className="w-full flex justify-center items-center">
                {info}
            </div>
        </div>
    )
}
