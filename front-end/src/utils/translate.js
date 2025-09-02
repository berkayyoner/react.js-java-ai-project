import en from "../locales/en.json";
import tr from "../locales/tr.json";

const languages = { en, tr };

export function translate(lang, key) {
  const dict = languages[lang] || languages["en"];
  return dict[key] || languages["en"][key] || key;
}