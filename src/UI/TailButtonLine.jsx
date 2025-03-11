
export default function TailButtonLine({caption, color, onClick}) {
  const border100 = {
    "blue" : "border-blue-300",
    "orange" : "border-orange-300",
    "gray" : "border-gray-300",
  }
  const bg200 = {
    "blue" : "bg-blue-200",
    "orange" : "bg-orange-200",
    "gray" : "bg-white",
  }
  const bgHover = {
    "blue" : "hover:bg-blue-500",
    "orange" : "hover:bg-orange-400",
    "gray" : "",
  }
  return (
    <button className={`border ${border100[color]} rounded-md
                        text-lg font-bold p-5 mb-5
                        ${bg200[color]} ${bgHover[color]}
                        ${color!=="gray" && "hover:text-white"}`}
                        onClick={onClick}>
      {caption}
    </button>
  )
}
