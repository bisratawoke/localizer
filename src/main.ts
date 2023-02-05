interface ILocalizer {
  languageObj:Record<string,string>;
  toBeTranslatedTextContainer:Array<string>;
  __(text:string):string ;
  
}

export default class localizer implements ILocalizer {

  languageObj:Record<string,string>;
  toBeTranslatedTextContainer: string[]

  constructor(inputLanguageObj:Record<string,string>) {
    this.languageObj = inputLanguageObj
    this.toBeTranslatedTextContainer = Object.keys(this.languageObj)
  }

  __(text:string):string  {
   
      if(this.toBeTranslatedTextContainer.includes(text)) {
        return this.languageObj[text]
      }
      else throw new errorClass()
  
  }
}

export class errorClass extends Error {
   constructor() {
    super("Text doesnot exist in pre translated object")
   }

}