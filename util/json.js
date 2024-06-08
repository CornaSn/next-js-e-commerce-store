import { sjson } from 'secure-json-parse';

export function parseJson(json) {
  if (!json) {
    return undefined;
  }
  try {
    return sjson.parse(json);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
