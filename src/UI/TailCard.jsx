
export default function TailCard({title, subtitle, imgurl, kws}) {
    let arraykws = kws.split(',');
    arraykws = arraykws.map(item =>
        <div className=" bg-gray-200 font-bold rounded-xl text-sm text-gray-600 text-center
                        w-fit px-3 py-0.5">
            {item}
        </div>
        );

  return (
        <div className="w-full
                    max-w-sm bg-white border border-gray-200 rounded-lg
                     shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={imgurl} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
                    {title}
                </h5>
                <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                    {subtitle}
                </p>
                <div className="w-fit grid grid-cols-1 gap-2 lg:grid-cols-2">
                    {arraykws}
                </div>
            </div>
        </div>  
  )
}
