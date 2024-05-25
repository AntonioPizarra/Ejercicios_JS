document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputText = document.getElementById('inputText').value;
    
    if (!/[a-zA-Z]/.test(inputText)) {
        alert('La cadena debe contener al menos una letra.');
        return;
    }
    
    let result;

    if (inputText === inputText.toUpperCase() && /[A-Z]/.test(inputText)) {
        result = "La cadena está en mayúsculas.";
    } else if (inputText === inputText.toLowerCase() && /[a-z]/.test(inputText)) {
        result = "La cadena está en minúsculas.";
    } else {
        result = "La cadena contiene una mezcla de mayúsculas y minúsculas.";
    }

    document.getElementById('result').textContent = result;
});
