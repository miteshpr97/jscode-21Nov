let n = 5; 

let string = "";

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n+2; j++) { 
    string += "*";
  }
 
  string += "\n";
}

console.log(string);