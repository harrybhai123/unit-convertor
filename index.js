/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const meterNFeet = document.getElementById("meterNfeet");
const litersNGallons = document.getElementById("litersNgallons");
const kilogramsNPounds = document.getElementById("kilogramsNpounds");

convertBtn.addEventListener("click", function(){
    meterNFeet.textContent = `
    ${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet
    |
    ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters
    `
    
    litersNGallons.textContent =  `
    ${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons
    |
    ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters
    `
    
    kilogramsNPounds.textContent =  `
    ${inputEl.value} kilos  = ${(inputEl.value * 2.204).toFixed(3)} pounds
    |
    ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos
    `
})