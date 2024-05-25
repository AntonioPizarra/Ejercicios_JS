document.getElementById('triangleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
    
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert('Por favor, introduce valores válidos para los tres lados.');
        return;
    }

    let result;

    if (lado1 === lado2 && lado2 === lado3) {
        result = "El triángulo es equilátero.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        result = "El triángulo es isósceles.";
    } else {
        result = "El triángulo es escaleno.";
    }

    document.getElementById('result').textContent = result;
});
