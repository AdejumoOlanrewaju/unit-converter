function metertoFeet(a){
  return a * 3.281
}

function feettoMeter(b){
  return  b / 3.281
}

function litertoGal(c){
 return  c * 0.264
}

function galtoLiter(d){
  return d / 0.264
}

function kilotoPounds(f){
  return f * 2.204
}

function poundstoKilo(g){
   return g /2.204
}

let elOne = document.getElementById("el-1")
let elTwo = document.getElementById("el-2")
let elThree = document.getElementById("el-3")
let Input = document.getElementById("input-el")
let Btn = document.getElementById("btn")
let value = Input.value
console.log(value)
Btn.addEventListener("click", function(){
  console.log("worked")
  firRender()
  secRender()
  thirRender()
})

function firRender(){
  let value = Input.value
  let calc1 = metertoFeet(value)
  let calc2 = feettoMeter(value)
  let total = `${value} meters = ${calc1.toFixed(2)} feet | ${value} feet = ${calc2.toFixed(2)} meters`
  elOne.textContent = total
}


function secRender(){
  let value = Input.value
  let calc3 = litertoGal(value)
  let calc4 =  galtoLiter(value)
  let total2 = `${value} liters = ${calc3.toFixed(2)} gallons | ${value} gallons = ${calc4.toFixed(2)} liters`
  elTwo.textContent = total2
}


function thirRender(){
  let value = Input.value
  let calc5 = kilotoPounds(value)
  let calc6 =  poundstoKilo(value)
  let total3 = `${value} kilos = ${calc5.toFixed(2)} pounds | ${value} pounds = ${calc6.toFixed(2)} kilos`
  elThree.textContent = total3
}
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound