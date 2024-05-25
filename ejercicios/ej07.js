document.getElementById('euclideanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dividend = parseInt(document.getElementById('dividend').value);
    const divisor = parseInt(document.getElementById('divisor').value);
    
    if (isNaN(dividend) || isNaN(divisor) || divisor === 0) {
        alert('Por favor, introduce valores válidos para el dividendo y el divisor.');
        return;
    }
    
    const { quotient, remainder } = euclideanDivision(dividend, divisor);
    
    document.getElementById('result').textContent = `Resultado: Cociente = ${quotient}, Resto = ${remainder}`;
});

function euclideanDivision(dividend, divisor) {
    let remainder = dividend % divisor;
    let quotient = (dividend - remainder) / divisor;
    
    if (remainder < 0) {
        remainder += Math.abs(divisor);
        quotient = (dividend - remainder) / divisor;
    }
    
    return { quotient, remainder };
}
