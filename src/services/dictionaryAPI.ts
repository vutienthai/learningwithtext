const API_KEY = "c913b6ce-b922-45a9-9326-0e41c90ee56f";
// export const API_URL = (word: string) =>
//   `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${API_KEY}`;

export const API_URL = (word: string) =>
  `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
