let input1 = document.getElementById("n1");
let input2 = document.getElementById("n2")
let resultado = document.querySelector('span')


function somar(){

    resultado.innerHTML = parseInt(input1.value) + parseInt(input2.value)
    
    
}

function subtrair(){
    resultado.innerHTML = parseInt(input1.value) - parseInt(input2.value)
    
}

function multiplicar(){

    resultado.innerHTML = parseInt(input1.value) * parseInt(input2.value)

} 

function dividir(){
    resultado.innerHTML = parseInt(input1.value) / parseInt(input2.value)
}