import clockimg from './clock.png'
function MyClockImage(){
    return(
        <div className='w-70 h-70 animate-[bounce_5s_infinite]
                        // -[transform:translateY(-100%)]
                        '>
        <img src={clockimg}/>
        </div>
    )
}

export default MyClockImage