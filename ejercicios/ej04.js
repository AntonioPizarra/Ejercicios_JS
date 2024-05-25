document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dni = document.getElementById('dni').value;
    
    if (!/^\d{7,8}$/.test(dni)) {
        alert('Por favor, introduce un número de DNI válido de 7 u 8 dígitos.');
        return;
    }
    
    const dniNumber = parseInt(dni, 10);
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letter = letters[dniNumber % 23];
    
    document.getElementById('result').textContent = `La letra correspondiente a tu DNI es: ${letter}`;
});
