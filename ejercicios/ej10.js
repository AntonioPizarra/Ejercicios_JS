const monthNames = {
    "español": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    "inglés": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};

const monthSelect = document.getElementById('monthSelect');
for (let i = 0; i < monthNames.español.length; i++) {
    const option = document.createElement('option');
    option.value = i + 1;
    option.textContent = monthNames.español[i];
    monthSelect.appendChild(option);
}

document.getElementById('monthForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedMonthIndex = parseInt(monthSelect.value) - 1;
    const selectedMonthName = monthNames.español[selectedMonthIndex];
    const translatedMonthName = monthNames.inglés[selectedMonthIndex];
    
    document.getElementById('result').textContent = `La traducción de ${selectedMonthName} es: ${translatedMonthName}`;
});
