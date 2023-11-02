// get random char
export function randomLetters(length, chars) {
  let str = "";
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * chars.length);
    str = str + chars.charAt(random);
  }
  return str;
}
