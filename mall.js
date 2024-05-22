
function inc(element) {
  let el = document.querySelector(`[name="${element}"]`);
  el.value = parseInt(el.value) + 1;
}
function dec(element) {
  let el = document.querySelector(`[name="${element}"]`);
	if (parseInt(el.value) > 0) {
	  el.value = parseInt(el.value) - 1;
  }
}

//document.getElementById("count").innerText = 6

let x = document.getElementById("count")
let y = 0
let z = document.getElementById("save-el")

function increment(){

  y = y + 1
  //console.log(y)
  x.innerText = y
}
function save(){
  y = 0
  x.innerText = 0
  let = countairsave = y + " - "
}
alert('مرحبا بك')
function rest() {
  alert('تم الإعادة')
}