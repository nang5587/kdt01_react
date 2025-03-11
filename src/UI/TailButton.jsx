
export default function TailButton({caption, color, onClick}) {
    const bg = {
        "blue" : "bg-blue-700",
        "red" : "bg-red-700",
        "emerald" : "bg-emerald-800",
        "orange" : "bg-orange-700",
        "gray" : "bg-gray-100"
    }
    const bgHover = {
        "blue" : "hover:bg-blue-500",
        "red" : "hover:bg-red-500",
        "emerald" : "hover:bg-emerald-600",
        "orange" : "hover:bg-orange-500",
    }
  return (
    <button onClick={onClick} className={`py-1 px-4 text-base ml-5
                    flex justify-center items-center
                    text-white
                    ${bgHover[color]} hover:font-bold
                    ${bg[color]} rounded-lg`}>
      {caption}
    </button>
  )
}
