import { side } from "../../typings/character/ESide";
import { CharacterStyle } from "../../typings/character/ICharacterStyle";
import { CHARACTER, charMap } from "../context_data/imageData";

/**
 * Dataclass that exports Characterlist with necessary informations
 */
export const charList: Array<CharacterStyle> = [
  {
    name: "Yoda",
    img_path: charMap.get(CHARACTER.YODA)?.choiceImgPath,
    side: side.LIGHT,
    login_img_path: charMap.get(CHARACTER.YODA)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg,rgba(0,0,0,0.30) 0%, rgba(164,164,164,0.6643032212885154) 11%, rgba(11,50,5,0.9) 60%)",
    },
    ship_img_path: charMap.get(CHARACTER.YODA)?.shipImgPath,
    charInfoFrameColor: { r: 9, g: 69, b: 6, a: 1 },
    planet_img_path: charMap.get(CHARACTER.YODA)?.planetImgPath,
  },
  {
    name: "C-3PO",
    img_path: charMap.get(CHARACTER.C3PO)?.choiceImgPath,
    side: side.LIGHT,
    login_img_path: charMap.get(CHARACTER.C3PO)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(0,0,0,0.5158438375350141) 0%, rgba(164,164,164,0.6643032212885154) 11%, rgba(144,94,0,1) 60%)",
    },
    ship_img_path: charMap.get(CHARACTER.C3PO)?.shipImgPath,
    charInfoFrameColor: { r: 233, g: 224, b: 19, a: 1 },
    planet_img_path: charMap.get(CHARACTER.C3PO)?.planetImgPath,
  },
  {
    name: "R2-D2",
    img_path: charMap.get(CHARACTER.R2D2)?.choiceImgPath,
    side: side.LIGHT,
    login_img_path: charMap.get(CHARACTER.R2D2)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg,rgba(0,0,0,0.5158438375350141)0%,rgba(164,164,164,0.6643032212885154)11%,rgba(0,8,110,1) 60%)",
    },
    ship_img_path: charMap.get(CHARACTER.R2D2)?.shipImgPath,
    charInfoFrameColor: { r: 19, g: 34, b: 233, a: 1 },
    planet_img_path: charMap.get(CHARACTER.R2D2)?.planetImgPath,
  },
  {
    name: "Darth Vader",
    img_path: charMap.get(CHARACTER.DARTHVADER)?.choiceImgPath,
    side: side.DARK,
    login_img_path: charMap.get(CHARACTER.DARTHVADER)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 80%)",
    },
    ship_img_path: charMap.get(CHARACTER.DARTHVADER)?.shipImgPath,
    charInfoFrameColor: { r: 255, g: 0, b: 0, a: 1 },
    planet_img_path: charMap.get(CHARACTER.DARTHVADER)?.planetImgPath,
  },
  {
    name: "Boba Fett",
    img_path: charMap.get(CHARACTER.BOBAFETT)?.choiceImgPath,
    side: side.DARK,
    login_img_path: charMap.get(CHARACTER.BOBAFETT)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(0,0,0,0.5158438375350141) 0%, rgba(164,164,164,0.6643032212885154) 11%, rgba(0,40,1,1) 60%)",
    },
    ship_img_path: charMap.get(CHARACTER.BOBAFETT)?.shipImgPath,
    charInfoFrameColor: { r: 8, g: 34, b: 0, a: 1 },
    planet_img_path: charMap.get(CHARACTER.BOBAFETT)?.planetImgPath,
  },
  {
    name: "Darth Maul",
    img_path: charMap.get(CHARACTER.DARTHMAUL)?.choiceImgPath,
    side: side.DARK,
    login_img_path: charMap.get(CHARACTER.DARTHMAUL)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 80%)",
    },
    ship_img_path: charMap.get(CHARACTER.DARTHMAUL)?.shipImgPath,
    charInfoFrameColor: { r: 255, g: 0, b: 0, a: 1 },
    planet_img_path: charMap.get(CHARACTER.DARTHMAUL)?.planetImgPath,
  },
  {
    name: "Bossk",
    img_path: charMap.get(CHARACTER.BOSSK)?.choiceImgPath,
    side: side.DARK,
    login_img_path: charMap.get(CHARACTER.BOSSK)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(40,34,0,1) 80%)",
    },
    ship_img_path: charMap.get(CHARACTER.BOSSK)?.shipImgPath,
    charInfoFrameColor: { r: 40, g: 34, b: 0, a: 1 },
    planet_img_path: charMap.get(CHARACTER.BOSSK)?.planetImgPath,
  },
  {
    name: "Han Solo",
    img_path: charMap.get(CHARACTER.HANSOLO)?.choiceImgPath,
    side: side.LIGHT,
    login_img_path: charMap.get(CHARACTER.HANSOLO)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(0,0,0,0.5158438375350141) 0%, rgba(164,164,164,0.6643032212885154) 11%, rgba(150,144,120,1) 60%)",
    },
    ship_img_path: charMap.get(CHARACTER.HANSOLO)?.shipImgPath,
    charInfoFrameColor: { r: 163, g: 157, b: 112, a: 1 },
    planet_img_path: charMap.get(CHARACTER.HANSOLO)?.planetImgPath,
  },
  {
    name: "IG-88",
    img_path: charMap.get(CHARACTER.IG88)?.choiceImgPath,
    side: side.DARK,
    login_img_path: charMap.get(CHARACTER.IG88)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(0,0,0,0.4990371148459384) 0%, rgba(164,164,164,0.6643032212885154) 0%, rgba(34,34,34,0.9051995798319328) 66%)",
    },
    ship_img_path: charMap.get(CHARACTER.IG88)?.shipImgPath,
    charInfoFrameColor: { r: 69, g: 69, b: 69, a: 1 },
    planet_img_path: charMap.get(CHARACTER.IG88)?.planetImgPath,
  },
  {
    name: "Palpatine",
    img_path: charMap.get(CHARACTER.PALPATINE)?.choiceImgPath,
    side: side.DARK,
    login_img_path: charMap.get(CHARACTER.PALPATINE)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 80%)",
    },
    ship_img_path: charMap.get(CHARACTER.PALPATINE)?.shipImgPath,
    charInfoFrameColor: { r: 255, g: 0, b: 0, a: 1 },
    planet_img_path: charMap.get(CHARACTER.PALPATINE)?.planetImgPath,
  },
  {
    name: "Jar Jar Binks",
    img_path: charMap.get(CHARACTER.JARJAR)?.choiceImgPath,
    side: side.LIGHT,
    login_img_path: charMap.get(CHARACTER.JARJAR)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(0,0,0,0.4990371148459384) 0%, rgba(164,164,164,0.6643032212885154) 0%, rgba(140,73,0,1) 66%)",
    },
    ship_img_path: charMap.get(CHARACTER.JARJAR)?.shipImgPath,
    charInfoFrameColor: { r: 172, g: 108, b: 3, a: 1 },
    planet_img_path: charMap.get(CHARACTER.JARJAR)?.planetImgPath,
  },
  {
    name: "Mace Windu",
    img_path: charMap.get(CHARACTER.MACEWINDU)?.choiceImgPath,
    side: side.LIGHT,
    login_img_path: charMap.get(CHARACTER.MACEWINDU)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(0,0,0,0.4990371148459384) 0%, rgba(164,164,164,0.6643032212885154) 0%, rgba(70,36,0,1) 66%)",
    },
    ship_img_path: charMap.get(CHARACTER.MACEWINDU)?.shipImgPath,
    charInfoFrameColor: { r: 46, g: 24, b: 0, a: 1 },
    planet_img_path: charMap.get(CHARACTER.MACEWINDU)?.planetImgPath,
  },
  {
    name: "Obi Wan Kenobi",
    img_path: charMap.get(CHARACTER.OBIWAN)?.choiceImgPath,
    side: side.LIGHT,
    login_img_path: charMap.get(CHARACTER.OBIWAN)?.loginFormImgPath,
    loginStyle: {
      background:
        "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(150,84,12,1) 80%)",
    },
    ship_img_path: charMap.get(CHARACTER.OBIWAN)?.shipImgPath,
    charInfoFrameColor: { r: 150, g: 84, b: 12, a: 1 },
    planet_img_path: charMap.get(CHARACTER.OBIWAN)?.planetImgPath,
  },
];
