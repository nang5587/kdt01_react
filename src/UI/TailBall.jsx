
export default function TailBall({n}) {
    const bgColor = {
        "n0" : "bg-pink-500",
        "n1" : "bg-blue-500",
        "n2" : "bg-cyan-500",
        "n3" : "bg-indigo-500",
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
    </div>
  )
}
