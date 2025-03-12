
import clockimg from './clock.png'
function MyClockImage(){
    return(
        // animate-[bounce_5s_infinite]
        //                 // -[transform:translateY(-110%)]
        <div className='w-70 h-70 
                        '>
        <img src={clockimg}/>
        </div>
    )
}

export default MyClockImage