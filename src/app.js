import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


function getSumAllArray() {
  let newArray = []
  for (let pro of pronoun) {
    for (let ad of adj) {
      for (let n of noun) {
        newArray.push(pro + ad + n + '.com' + "<br>")
      }
    }
  }
  return newArray
}

let domain = getSumAllArray()

window.onload = function () {
  //write your code here

  document.querySelector("#exercise").innerHTML= domain

};
