
export default function TailButton({caption, color, onClick}) {
    const bg = {
        "blue" : "bg-blue-700",
        "red" : "bg-red-700"
    }
    const bgHover = {
        "blue" : "hover:bg-blue-500",
        "red" : "hover:bg-red-500"
    }
  return (
    <button onClick={onClick} className={`py-2 px-4 text-lg
                    flex justify-center items-center
                    text-white
                    ${bgHover[color]} hover:font-bold
                    ${bg[color]} rounded-lg`}>
      {caption}
    </button>
  )
}
