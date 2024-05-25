document.getElementById('circleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const radius = parseFloat(document.getElementById('radius').value);
    
    if (isNaN(radius) || radius <= 0) {
        alert('Por favor, introduce un radio válido.');
        return;
    }
    
    const circunferencia = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    const volumen = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    document.getElementById('circunferencia').textContent = `Longitud de la circunferencia: ${circunferencia.toFixed(2)} cm`;
    document.getElementById('area').textContent = `Área del círculo: ${area.toFixed(2)} cm²`;
    document.getElementById('volumen').textContent = `Volumen de la esfera: ${volumen.toFixed(2)} cm³`;
});
