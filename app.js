let caucularIMC = () => { // Função que fará o cáuculo
    const peso = parseFloat(document.getElementById('massa').value); // Variável de peso
    const altura = parseFloat(document.getElementById('estatura').value); // Variável de altura
    if(peso <= 0 || altura <=0) { // Seletor que não permite valores maiores ou iguais a zero
        alert("peso e altura devem ser valores positivos e maiores que zero")
        return; 
    }
    const imc = peso / (altura**2); // Fórmula do IMC
    document.getElementById('resultado').textContent = `Seu IMC é: ${imc.toFixed(2)}`; // Exibe o resultado no HTML
}