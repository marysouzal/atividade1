const cont = document.querySelector('#cont')
const textarea = getElement('#texto')
const modificado = getElement("#modificado")
let boldCheck = getElement('#bold')
let italic = getElement('#italic')
let color = getElement('#color')

cont.style.color ="red"
texto.addEventListener('change', function(){
    console.log(240 - texto.value.length)
    cont.innerHTML = 240 - texto.value.length
})
//funcao para selecionar o texto
function getElement(elementIDorClass) {
    const element = document.querySelector(elementIDorClass)
    return element
}
function caseModify () {
    if (select.value == 'lowercase') toLowerCase()
    else toUpperCase()}

//maiusculo
document.getElementById('texto').addEventListener('keyup', () => {
	const input = modificado.target;
	input.value = input.value.toUpperCase();
});

// minusculo
function toLowerCase() {
    modificado.value = textarea.value.toLowerCase()
}

//cor do texto modificado
color.addEventListener('change', () => {
    
    modificado.style.color = color.value
})
// coloca tudo no campo do modificado
const select = getElement("#efeito")
select.addEventListener('change', () => {
    caseModify()
})
    // negrito
function changeBold(checked) {
    if(checked) {
         
        modificado.style.fontWeight = "bold";
    }else {
        modificado.style.fontWeight = "normal";
      
    }
}
boldCheck.addEventListener('click', () => changeBold(boldCheck.checked))

function toUpperCase() {
    modificado.value = textarea.value.toUpperCase()
}

