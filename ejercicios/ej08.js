document.getElementById('euclideanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    
    if (isNaN(number1) || isNaN(number2) || number2 === 0) {
        alert('Por favor, introduce valores válidos para los números.');
        return;
    }
    
    const gcd = euclideanAlgorithm(number1, number2);
    
    document.getElementById('result').textContent = `El MCD de ${number1} y ${number2} es: ${gcd}`;
});

function euclideanAlgorithm(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}
