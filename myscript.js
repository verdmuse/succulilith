let body = document.querySelector("body");
let p = document.createElement("p");
let p1 = document.querySelector("p");
p.textContent = "Try";

body.insertBefore(p, p1);
console.log(p1);
