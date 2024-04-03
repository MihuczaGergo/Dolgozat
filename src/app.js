/*
* File: app.js
* Author: Mihucza Gergő
* Copyright: 2024, Mihucza Gergő
* Group: Szoft I-2-N
* Date: 2024-04-03
* Github: https://github.com/MihuczaGergo/
* Licenc: GNU GPL
*/

const oldalInput = document.querySelector("#oldal")
const teruletInput = document.querySelector("#terulet")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener("click", () => {
    teruletszamitas()
})

function teruletszamitas(){
    let oldal = Number(oldalInput.value)
    let terulet = (4 * Math.pow(oldal, 2)) / Math.tan(Math.PI / 16)
    teruletInput.value = terulet.toFixed(2)
}