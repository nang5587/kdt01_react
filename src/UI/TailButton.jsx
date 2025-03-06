
export default function TailButton({caption, color, onClick}) {
    const bg = {
        "blue" : "bg-blue-700",
        "red" : "bg-red-700",
        "emerald" : "bg-emerald-800"
    }
    const bgHover = {
        "blue" : "hover:bg-blue-500",
        "red" : "hover:bg-red-500",
        "emerald" : "hover:bg-emerald-600"
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
