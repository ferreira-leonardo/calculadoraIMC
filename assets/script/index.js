let nome = document.querySelector('#nome')
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let resultado = document.querySelector('#resultado')
let buttom = document.querySelector('#buttom')

const calcular = () => {
    let imc = (peso.value/altura.value**2)

    if(imc < 18.5){
        resultado.innerHTML = `
        ${nome.value} seu IMC é ${imc.toFixed(2)} e você está abaixo do peso`;
    } else if(imc < 24.99){
        resultado.innerHTML = `
        ${nome.value} seu IMC é ${imc.toFixed(2)} e seu peso está normal`;
    } else if(imc < 29.99){
        resultado.innerHTML = `
        ${nome.value} seu IMC é ${imc.toFixed(2)} e você está no sobrepeso`;
    } else {
        resultado.innerHTML = `
        ${nome.value} seu IMC é ${imc.toFixed(2)} e você está na obesidade`;
    }
}

buttom.addEventListener('click', calcular)