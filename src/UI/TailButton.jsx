
export default function TailButton({caption, color, onClick}) {
    const bg = {
        "blue" : "bg-blue-700",
        "red" : "bg-red-700",
        "emerald" : "bg-emerald-800",
        "orange" : "bg-orange-600",
        "lblue" : "bg-blue-400",
        "gray" : "bg-gray-100"
    }
    const bgHover = {
        "blue" : "hover:bg-blue-500",
        "red" : "hover:bg-red-500",
        "emerald" : "hover:bg-emerald-600",
        "orange" : "hover:bg-orange-500",
        "lblue" : "hover:bg-blue-700",
    }
  return (
    <button onClick={onClick} className={`w-full py-1 px-4 text-base
                    flex justify-center items-center mr-5 mb-5
                    text-white
                    ${bgHover[color]} hover:font-bold
                    ${bg[color]} rounded-lg
                    `}>
      {caption}
    </button>
  )
}
