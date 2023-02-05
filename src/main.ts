interface ILocalizer {
  languageObj:Record<string,string>;
  toBeTranslatedTextContainer:Array<string>;
  __(text:string):string;
  
}

export default class localizer implements ILocalizer {

  languageObj:Record<string,string>;
  toBeTranslatedTextContainer: string[]

  constructor(inputLanguageObj:Record<string,string>) {
    this.languageObj = inputLanguageObj
    this.toBeTranslatedTextContainer = Object.keys(this.languageObj)
  }

  __(text:string):string {
    try {
      if(this.toBeTranslatedTextContainer.includes(text)) {
        return this.languageObj[text]
      }
      throw new Error("Text doesnot exist in pre translated object")
    } catch (error:any) {
        return error.message
    }
  }
}