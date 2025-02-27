import MyListItem from "./MyListItem"
import MyListData from "./MyListData.json"

export default function MyList() {
    //html 태그로 넣어주면 h1에 자동으로 넣어줌
    let show = true;
    let tags = MyListData.map( item => 
                                    <MyListItem key ={item.title} 
                                                title ={item.title} 
                                                imgUrl = {item.imgUrl} 
                                                content = {item.content} 
                                                show = {show}/>);
    console.log(tags);
    const data = { "title" : "HTML",
                    "imgUrl" : "../../public/img/html.png", 
                    "content": "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
    }

  return (
    <div className="w-full h-2/4 grid grid-cols-1 lg:grid-cols-2 gap-4 px-10 lg:px-2">
      {tags}
    </div>
  )
}
