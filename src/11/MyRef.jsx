import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react";
export default function MyRef() {
    //state 변수

    //ref 변수
    const refInput1 = useRef();
    const refSelect = useRef();
    const refInput2 = useRef();
    const refResult = useRef();

    //계산
    const handleCal =(e)=> {
        e.preventDefault();

        //입력 공백 체크
        if(refInput1.current.value == ''){
            alert('첫 번째 값을 입력하세요.');
            refInput1.current.focus();
            return;
        }
        if(refInput2.current.value == ''){
            alert('두 번째 값을 입력하세요.');
            refInput2.current.focus();
            return;
        }

        let num1 = parseInt(refInput1.current.value);
        let num2 = parseInt(refInput2.current.value);
        let set = refSelect.current.value;
        let result = 0;

        switch (set){
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': result = num1 / num2;
            break;
        default: 
            break;
        }
        refResult.current.value = result;
    }

    //입력 초기화
    const handleInit=()=>{
        refInput1.current.value = '';
        refInput2.current.value = '';
        refResult.current.value = '';
        refSelect.current.value = '+';
    }

    //컴포넌트 생성 시 입력상자에 포커스
    useEffect(()=>{
        refInput1.current.focus();
    }, []);
    
  return (
    <div className="w-full flex justify-center items-center mt-10">
        <div className="w-10/12 flex justify-center items-center">
            <form className="3/5 grid grid-cols-5 gap-4 bg-gray-50 px-20 py-5">
                    <input type="number" id="num1" ref={refInput1} onFocus={handleInit}
                            className=" bg-gray-50 border text-center font-bold border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                              dark:focus:border-blue-500"/>
                    <select id="sel" ref={refSelect}
                                     className="bg-amber-50 border font-bold text-center focus:text-left border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                                      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                       dark:focus:border-blue-500">
                        <option value="+" defaultValue>+</option>
                        <option value="-">-</option>
                        <option value="*">x</option>
                        <option value="/">/</option>
                    </select>
                    <input type="number" id="num2" ref={refInput2}
                            className=" bg-gray-50 border border-gray-300 font-bold text-center text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                              dark:focus:border-blue-500"/>
                    <TailButton caption="="
                                color="lblue"
                                onClick={handleCal}/>
                    <input type="number" id="set" ref={refResult}
                            className=" bg-gray-50 border text-center font-bold border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                              dark:focus:border-blue-500" readOnly/>
            </form>
        </div>
    </div>
  )
}