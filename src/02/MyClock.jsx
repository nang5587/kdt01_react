import MyClockImage from "./MyClockImage"
import MyClockTime from "./MyClockTime";
function MyClock(){
    return(
        <>
            <div>
                <MyClockImage />
            </div>
            <div>
                <MyClockTime />
            </div>
        </>
    )
}

export default MyClock