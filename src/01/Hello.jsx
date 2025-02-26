import HelloDate from "./HelloDate"
function Hello(){
    let name = undefined
    
    return(
        <div>
            <h1 className="text-2xl">
                {/* {name == undefined ? "이름이 존재하지 않습니다." : `${name} 님 안녕하세요!`} */}
                {name && `${name}님 안녕하세요!`}
            </h1>
            <HelloDate />
        </div>
    )
}

export default Hello