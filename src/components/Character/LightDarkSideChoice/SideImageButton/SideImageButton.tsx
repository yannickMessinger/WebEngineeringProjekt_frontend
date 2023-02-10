import {side} from "../../../../typings/ESide"


interface SideProps{
    side:side
    logopath:string
    className:string
    setSide: () => void
}

//namen ändern

export const SideImageButton = ({logopath,className, setSide}:SideProps) => {

  return (
    <div>
         <img src={logopath} className={className} onClick={() => {setSide()}} />
    </div>
   
  )
}
