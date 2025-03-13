import { useEffect, useState } from "react"
import TrafficNav from "./TrafficNav";
// import TrafficCon from "./TrafficCon";
export default function Traffic() {
    const [tdata, setTdata] = useState([]);

    const myApiKey = import.meta.env.VITE_APP_API_KEY;
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18'
    url = `${url}&serviceKey=${myApiKey}`;


    //fetch
    const getFetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        //data.data 는 18개 데이터 배열 만들어짐
        setTdata(data.data);
        //console.log(tdata); 하면 빈 배열 나옴 왜냐하면 set으로 변경되는 상태이기 때문에 바로 안떠서
        //useEffect로 tdata를 잡아야 함
    }

    //대분류 데이터 (버튼)
    const [c1, setC1] = useState();
    const [selC1, setSelC1] = useState();
    //사고유형 데이터
    const [c2, setC2] = useState();
    const [selC2, setSelC2] = useState();
    const [info, setInfo] = useState();
    useEffect(() => {
        getFetchData();
    }, []);
    useEffect(() => {
        if (tdata.length == 0) return;
        console.log("tdata", tdata)
        //대분류 데이터 (버튼)
        let tm = tdata.map(item =>
            item["사고유형대분류"]
        )
        tm = [...new Set(tm)];
        setC1(tm);

    }, [tdata]);

    useEffect(()=>{
        console.log(selC1);
        setC2([]);
        setSelC2('');
        setInfo('');
        let tm = tdata.filter(item => item["사고유형대분류"] == selC1)
                            .map(item => item["사고유형"]);

        tm = [...new Set(tm)];
        setC2(tm);
    }, [selC1]);

    useEffect(()=>{
        if( !selC1 || !selC2) return;
        console.log(selC2);
        let tm = tdata.filter(item => item["사고유형대분류"] == selC1 && item["사고유형"] == selC2)[0];
        console.log(tm);


        let infokey = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];
        tm = infokey.map(item => <div key={item} className="w-1/5 flex my-3 ">
                                    <span className="w-3/5  bg-blue-800 font-bold text-white rounded-xl
                                                    inline-flex justify-center items-center
                                                    p-2 text-center">
                                        {item}
                                    </span>
                                    <span className="w-2/5 font-bold inline-flex justify-center items-center
                                                     text-center">
                                        {parseInt(tm[item]).toLocaleString()}
                                    </span>
                                </div>);

        setInfo(tm);
    }, [selC2]);

    return (
        <div className="w-full h-full">
            <div className="w-full h-1/3">
                {c1 && <TrafficNav title="대분류" ct={c1} selc={selC1} setSelC={setSelC1} />}
                {c2 && <TrafficNav title="사고유형" ct={c2} selc={selC2} setSelC={setSelC2} />}
            </div>
            <div className="w-11/12 h-2/3 flex justify-center items-start text-lg ml-10">
                {info}
            </div>
        </div>
    )
}

