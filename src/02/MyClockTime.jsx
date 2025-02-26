function MyClockTime(){
    const nTime = new Date();
    return(
        <div className="w-full p-5 text-lime-800 font-bold text-2xl">
            현재 시각 : {nTime.toLocaleTimeString()}
        </div>
    )
}

export default MyClockTime