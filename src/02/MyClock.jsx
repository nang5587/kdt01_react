import MyClockImage from "./MyClockImage ";
import MyClockTime from "./MyClockTime";
import './MyClock.css';


export default function MyClock() {
        return(
            <div>
                <div>
                    <MyClockImage />
                </div>
                <div>
                    <MyClockTime />
                </div>
            </div>
        )
}