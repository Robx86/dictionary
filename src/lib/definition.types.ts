export type DefinitionType = { definition: string, example: string, synonyms:string[], antonyms: string[] }

export type MeaningType = {
  partOfSpeech: string;
  definitions: DefinitionType[];
  synonyms: string[];
  antonyms: string[];
}

export type PhoneticType = {
  text: string;
  audio: string;
}

export type LicenseType = {
  name: string;
  url: string;
}

export type TermType = {
    word: string;
    phonetic: string;
    phonetics: PhoneticType[];
    origin: string;
    meanings: MeaningType[];
    license: LicenseType[];
    sourceUrls: string[];
  }


export type Error = {
  message: string;
  title: string;
  resolution: string;
}