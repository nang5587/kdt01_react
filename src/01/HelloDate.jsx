function HelloDate(){
    const current = new Date()
    const tStyle = {
        backgroundColor: "aliceblue",
        paddig : "5px",
        fontSize : "medium"
    }

    return(
        <div style={tStyle}>
            현재 시각 : 
            <span style={{color : "blue", fontWeight : "bolder"}}>
                {current.toLocaleTimeString()}
            </span>
        </div>
    )
}

export default HelloDate