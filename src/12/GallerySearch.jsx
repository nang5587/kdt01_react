import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton";
// import kto from "../assets/kto.jpg"

export default function GallerySearch({title, refInfo, handleClick, handleReset}) {
  return (
    <>
        <h2 className="w-full flex flex-row justify-center items-center
                         font-bold text-3xl text-gray-600 mt-5 mb-10">
            {title}&nbsp; 
            {/* <img src={kto} className="w-10" /> */}
        </h2>
        <div className="w-full p-2 flex flex-row mr-5">
            <div className="w-4/6"><TailInput  type ="text"
                        id="txt1"
                        refInfo = {refInfo}
                        onFocus={()=>{}}
                        /></div>
            <div className="w-1/6 mr-5"><TailButton caption="확인"
                    color="lblue"
                    onClick={handleClick} /></div>
            <div className="w-1/6"><TailButton caption="취소"
                    color="lblue"
                    onClick={handleReset} /></div>
        </div>
    </>
  )
}
