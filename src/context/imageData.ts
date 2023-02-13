//pics for char choice
import boba_choice from "../assets/assets_characterChoice/bobaFett.png";
import c3po_choice from "../assets/assets_characterChoice/c3po.png";
import darthVader_choice from "../assets/assets_characterChoice/darthVader.png";
import r2d2_choice from "../assets/assets_characterChoice/r2d2.png";
import yoda_choice from "../assets/assets_characterChoice/yoda.png";
import darthMaul_choice from "../assets/assets_characterChoice/darthMaul.png";
import ig88_choice from "../assets/assets_characterChoice/ig88.png";
import hanSolo_choice from "../assets/assets_characterChoice/hanSolo.png";
import palpatine_choice from "../assets/assets_characterChoice/palpatine.png";
import obiWan_choice from "../assets/assets_characterChoice/obiWan.png";
import jarjar_choice from "../assets/assets_characterChoice/jarjar.png";
import bossk_choice from "../assets/assets_characterChoice/bossk.png";
import maceWindu_choice from "../assets/assets_characterChoice/maceWindu.png";

//pics for loginform

import boba_login from "../assets/assets_login_screen/bobaFett.jpg";
import bossk_login from "../assets/assets_login_screen/bossk.jpg";
import c3po_login from "../assets/assets_login_screen/c3po.jpg";
import r2d2_login from "../assets/assets_login_screen/r2d2.jpg";
import hanSolo_login from "../assets/assets_login_screen/hanSolo.jpg";
import ig88_login from "../assets/assets_login_screen/ig88.jpg";
import jarjar_login from "../assets/assets_login_screen/jarjar.jpg";
import darthMaul_login from "../assets/assets_login_screen/darthMaul.jpg";
import obiWan_login from "../assets/assets_login_screen/obiWan.jpg";
import palpatine_login from "../assets/assets_login_screen/palpatine.jpg";
import darthVader_login from "../assets/assets_login_screen/darthVader.jpg";
import maceWindu_login from "../assets/assets_login_screen/maceWindu.jpg";
import yoda_login from "../assets/assets_login_screen/yoda.jpg";

//pics for transition screen

import yoda_ship from "../assets/assets_ship/yoda.png";
import darthVader_ship from "../assets/assets_ship/darthVader.png";
import r2d2_ship from "../assets/assets_ship/r2d2.png";
import c3po_ship from "../assets/assets_ship/c3po.png";
import maceWindu_ship from "../assets/assets_ship/maceWindu.png";
import boba_ship from "../assets/assets_ship/bobaFett.png";
import darthMaul_ship from "../assets/assets_ship/darthMaul.png";
import bossk_ship from "../assets/assets_ship/bossk.png";
import hanSolo_ship from "../assets/assets_ship/hanSolo.png";
import ig88_ship from "../assets/assets_ship/ig88.png";
import palpatine_ship from "../assets/assets_ship/palpatine.png";
import jarjar_ship from "../assets/assets_ship/jarjar.png";
import obiWan_ship from "../assets/assets_ship/obiWan.png";

//planetpics
import yoda_planet from "../assets/assets_planets/yoda.png";
import c3po_planet from "../assets/assets_planets/c3po.png";
import r2d2_planet from "../assets/assets_planets/r2d2.png";
import boba_planet from "../assets/assets_planets/bobaFett.png";
import darthMaul_planet from "../assets/assets_planets/darthMaul.png";
import bossk_planet from "../assets/assets_planets/bossk.png";
import hanSolo_planet from "../assets/assets_planets/hanSolo.png";
import ig88_planet from "../assets/assets_planets/ig88.png";
import palpatine_planet from "../assets/assets_planets/palpatine.png";
import jarjar_planet from "../assets/assets_planets/jarjar.png";
import maceWindu_planet from "../assets/assets_planets/maceWindu.png";
import obiWan_planet from "../assets/assets_planets/obiWan.png";
import darthVader_planet from "../assets/assets_planets/darthVader.png";

//sounds for characters?

export enum CHARACTER {
  YODA,
  C3PO,
  R2D2,
  DARTHVADER,
  BOBAFETT,
  DARTHMAUL,
  BOSSK,
  HANSOLO,
  IG88,
  PALPATINE,
  JARJAR,
  MACEWINDU,
  OBIWAN,
}

interface CharImageData {
  choiceImgPath: string;
  loginFormImgPath: string;
  shipImgPath: string;
  transitionImgPath: string;
  planetImgPath: string;
  soundFilePath: string;
}

let charMap = new Map<CHARACTER, CharImageData>();

charMap.set(CHARACTER.YODA, {
  choiceImgPath: yoda_choice,
  loginFormImgPath: yoda_login,
  shipImgPath: yoda_ship,
  transitionImgPath: yoda_ship,
  planetImgPath: yoda_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.C3PO, {
  choiceImgPath: c3po_choice,
  loginFormImgPath: c3po_login,
  shipImgPath: c3po_ship,
  transitionImgPath: c3po_ship,
  planetImgPath: c3po_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.R2D2, {
  choiceImgPath: r2d2_choice,
  loginFormImgPath: r2d2_login,
  shipImgPath: r2d2_ship,
  transitionImgPath: r2d2_ship,
  planetImgPath: r2d2_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.DARTHVADER, {
  choiceImgPath: darthVader_choice,
  loginFormImgPath: darthVader_login,
  shipImgPath: darthVader_ship,
  transitionImgPath: darthVader_ship,
  planetImgPath: darthVader_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.BOBAFETT, {
  choiceImgPath: boba_choice,
  loginFormImgPath: boba_login,
  shipImgPath: boba_ship,
  transitionImgPath: boba_ship,
  planetImgPath: boba_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.DARTHMAUL, {
  choiceImgPath: darthMaul_choice,
  loginFormImgPath: darthMaul_login,
  shipImgPath: darthMaul_ship,
  transitionImgPath: darthMaul_ship,
  planetImgPath: darthMaul_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.BOSSK, {
  choiceImgPath: bossk_choice,
  loginFormImgPath: bossk_login,
  shipImgPath: bossk_ship,
  transitionImgPath: bossk_ship,
  planetImgPath: bossk_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.HANSOLO, {
  choiceImgPath: hanSolo_choice,
  loginFormImgPath: hanSolo_login,
  shipImgPath: hanSolo_ship,
  transitionImgPath: hanSolo_ship,
  planetImgPath: hanSolo_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.IG88, {
  choiceImgPath: ig88_choice,
  loginFormImgPath: ig88_login,
  shipImgPath: ig88_ship,
  transitionImgPath: ig88_ship,
  planetImgPath: ig88_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.PALPATINE, {
  choiceImgPath: palpatine_choice,
  loginFormImgPath: palpatine_login,
  shipImgPath: palpatine_ship,
  transitionImgPath: palpatine_ship,
  planetImgPath: obiWan_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.JARJAR, {
  choiceImgPath: jarjar_choice,
  loginFormImgPath: jarjar_login,
  shipImgPath: jarjar_ship,
  transitionImgPath: jarjar_ship,
  planetImgPath: obiWan_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.MACEWINDU, {
  choiceImgPath: maceWindu_choice,
  loginFormImgPath: maceWindu_login,
  shipImgPath: maceWindu_ship,
  transitionImgPath: maceWindu_ship,
  planetImgPath: maceWindu_planet,
  soundFilePath: "",
});

charMap.set(CHARACTER.OBIWAN, {
  choiceImgPath: obiWan_choice,
  loginFormImgPath: obiWan_login,
  shipImgPath: obiWan_ship,
  transitionImgPath: obiWan_ship,
  planetImgPath: obiWan_planet,
  soundFilePath: "",
});

export { charMap };
