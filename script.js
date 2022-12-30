


let n = 6;
let string = "";
for (let i = 0; i <= n; i++) {
    string += "* ".repeat(i);
    string += "\n";
}
console.log(string);

/**********************************/

let t = 6;
let strings = "";
for (let i = 0; i <= t; i++) {
    let space = ""
  for (let j = 0; j < i; j++) {
    strings += space +" * ";
  }
  strings += "\n";

}
console.log(strings);