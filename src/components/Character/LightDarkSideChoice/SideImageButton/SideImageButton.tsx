import {side} from "../../../../typings/ESide"


interface SideProps{
    side:side
    logopath:string
    className:string
    setSide: () => void
    altTitle: string
}


export const SideImageButton = ({logopath,className, setSide, altTitle}:SideProps) => {

  return (
    <div>
         <img src={logopath} className={className} alt={altTitle} onClick={setSide} />
    </div>
   
  )
}
