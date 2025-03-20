import TailButton from "./TailButton"
export default function TailInput({type, id, refInfo, onFocus}) {
  return (
        <form className="w-full flex justify-start items-center mb-5">
            <input ref={refInfo} id={id} onFocus={onFocus}
                type={type} name="word" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                    mr-5 ml-5"/>

        </form>
  )
}
