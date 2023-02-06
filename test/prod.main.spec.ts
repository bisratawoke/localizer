import builtLocalizer, {
  TextToBeTranslatedNotFoundInPretranslatedObject,
} from "../dist/Localizer.es";
import { describe, test, expect } from "vitest";
import eng_am from "../src/eng_am.json";

describe("Testing localizer in production", () => {
  test("testing built localizer", () => {
    let localizer = new builtLocalizer(eng_am);

    expect(localizer.__("name")).toEqual("ስም");
  });

  test("does it return expected result when you enter a text that doesnot exist in the pretranlated object", () => {
    let localizer = new builtLocalizer(eng_am);
    expect(() => localizer.__("home")).toThrow(
      TextToBeTranslatedNotFoundInPretranslatedObject
    );
  });
});
