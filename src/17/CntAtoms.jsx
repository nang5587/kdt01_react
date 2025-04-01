import { atom } from "jotai"
//전역상태변수 선언
export const cntAtom = atom(0);
//파생 상태 정의
export const cntAtom2 = atom((get)=>get(cntAtom)*2);