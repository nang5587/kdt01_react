import FoodCard from "./FoodCard"
import foodData from './fooddata.json'
import { useState } from "react";
import TailButton from "../UI/TailButton"
export default function  FoodMain(){
    const[tags, setTags] = useState([]);
    let category = foodData.map(item => item["운영주체 분류"].replaceAll(' ','')
                                        );
    category = [...new Set(category)];

    const handleCategory = (c) => {
        console.log("handleCategory", c);
        let tm = foodData.filter(item => item["운영주체 분류"].replaceAll(' ','') == c);
        setTags(tm.map(item => <FoodCard 
                                key={item['사업장명']}
                                obj={item}/>));
    }
    const bts = category.map(item => <TailButton 
                                    key={item}
                                    caption={item.split('.')[1]}
                                    color={"lblue"}
                                    onClick={() => handleCategory(item)}
                                     />)

  return (
    <div className="w-11/12 h-full">
        <div className="h-15 flex justify-center items-center mb-10">
            {bts}
        </div>
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-7">
            {tags}
        </div>
    </div>
  )
}
