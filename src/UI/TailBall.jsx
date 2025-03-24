
export default function TailBall({n}) {
    const bgColor = {
        "n0" : "bg-yellow-200",
        "n1" : "bg-green-200",
        "n2" : "bg-sky-300",
        "n3" : "bg-purple-300",
        "n4" : "bg-sky-500"
    }
  return (
    <div className={
        `w-16 h-16 ${bgColor["n" + Math.floor(n / 10)]}
        flex justify-center items-center
        p-10 rounded-full mr-5
        text-3xl text-white font-bold`
    }>
      {n}
      <div className="bg-purple-300"></div>
    </div>
  )
}
