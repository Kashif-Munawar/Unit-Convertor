/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilo = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("div-meter")
const volumeEl = document.getElementById("div-liter")
const massEl = document.getElementById("div-pound")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)
    
    // Check if input is empty or not a number
    if (isNaN(baseValue) || baseValue === 0) {
        alert("Please enter a valid number")
        return
    }

    // Length (Meters <-> Feet)
    const metersToFeetVal = (baseValue * meterToFeet).toFixed(3)
    const feetToMetersVal = (baseValue / meterToFeet).toFixed(3)
    lengthEl.textContent = `${baseValue} meters = ${metersToFeetVal} feet | ${baseValue} feet = ${feetToMetersVal} meters`

    // Volume (Liters <-> Gallons)
    const litersToGallonsVal = (baseValue * literToGallon).toFixed(3)
    const gallonsToLitersVal = (baseValue / literToGallon).toFixed(3)
    volumeEl.textContent = `${baseValue} liters = ${litersToGallonsVal} gallons | ${baseValue} gallons = ${gallonsToLitersVal} liters`

    // Mass (Kilograms <-> Pounds)
    const kilosToPoundsVal = (baseValue * kiloToPound).toFixed(3)
    const poundsToKilosVal = (baseValue / kiloToPound).toFixed(3)
    massEl.textContent = `${baseValue} kilos = ${kilosToPoundsVal} pounds | ${baseValue} pounds = ${poundsToKilosVal} kilos`
})