
import {side} from "./ESide"
export interface ICharacter {
    swapi_id?:number,
    name?: string,
    img_path: string,
    side?:side
    validationErrorMsg?:string
    login_img_path?:string
    loginStyle?:{background:string}
    button_style?:{background:string, color:string}
    ship_img_path?:string
}
  