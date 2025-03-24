
export default function TailButton({caption, color, onClick}) {
    const bg = {
        "blue" : "bg-blue-700 text-white",
        "red" : "bg-red-700 text-white",
        "emerald" : "bg-emerald-800 text-white",
        "orange" : "bg-orange-600 text-white",
        "lblue" : "bg-blue-400 text-white",
        "gray" : "bg-gray-100 text-white",
        "white" : "bg-white text-gray-600 font-bold",
    }
    const bgHover = {
        "blue" : "hover:bg-blue-500 text-white",
        "red" : "hover:bg-red-500 text-white",
        "emerald" : "hover:bg-emerald-600 text-white",
        "orange" : "hover:bg-orange-500 text-white",
        "lblue" : "hover:bg-blue-700 text-white",
    }
  return (
    <button onClick={onClick} className={`w-full py-1 px-4 text-base
                    flex justify-center items-center mr-5 mb-5
                    
                    ${bgHover[color]} hover:font-bold
                    ${bg[color]} rounded-lg
                    `}>
      {caption}
    </button>
  )
}
