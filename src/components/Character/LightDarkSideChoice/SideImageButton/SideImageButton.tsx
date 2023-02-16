import { Dispatch, SetStateAction } from "react"
import {side} from "../../../../typings/ESide"


interface SideProps{
    side:side
    logopath:string
    className:string
    setSide: () => void
    altTitle: string
    setSideChoosen:  Dispatch<SetStateAction<boolean>>
}


export const SideImageButton = ({logopath,className, setSide, altTitle, setSideChoosen}:SideProps) => {

  return (
    <div>
         <img src={logopath} className={className} alt={altTitle} onClick={() =>{setSide(); setSideChoosen(true)}}/>
    </div>
   
  )
}
