document.getElementById('palindromeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputText = document.getElementById('inputText').value.trim();
    
    if (!/[a-zA-Z]/.test(inputText)) {
        alert('La cadena debe contener al menos una letra.');
        return;
    }
    
    const normalizedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = normalizedText.split('').reverse().join('');
    
    let result;

    if (normalizedText === reversedText) {
        result = "La cadena es un palíndromo.";
    } else {
        const palindrome = inputText + reversedText.slice(1);
        result = `La cadena no es un palíndromo. El palíndromo generado es: ${palindrome}`;
    }

    document.getElementById('result').textContent = result;
});
