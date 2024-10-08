/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let fin = [".com", ".net", ".org"];

for (let index = 0; index < pronoun.length; index++) {
  for (let i = 0; i < adj.length; i++) {
    for (let ind = 0; ind < noun.length; ind++) {
      for (let inde = 0; inde < fin.length; inde++) {
        console.log(`${pronoun[index]}${adj[i]}${noun[ind]}${fin[inde]}`);
      }
    }
  }
}
