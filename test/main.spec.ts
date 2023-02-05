import {describe,expect,test} from "vitest"
import eng_am from "../src/eng_am.json"
import Localizer,{TextToBeTranslatedNotFoundInPretranslatedObject} from "../src/main"

describe("Testing tranlator",() => {

    test("does it translate text that exists inside the pretranslated object",() => {

        let localizer = new Localizer(eng_am)
        
        expect(localizer.__("name")).toEqual("ስም")

    })

    test("does it return expected result when you enter a text that doesnot exist in the pretranlated object",() => {

        let localizer = new Localizer(eng_am)
        expect(() => localizer.__("home")).toThrow(TextToBeTranslatedNotFoundInPretranslatedObject)

    })

})