document.getElementById('monthForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const monthSelect = document.getElementById('monthSelect');
    const selectedMonth = monthSelect.options[monthSelect.selectedIndex].text;
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    const monthName = monthNames[selectedMonth - 1];
    
    document.getElementById('result').textContent = `El mes seleccionado es: ${monthName}`;
});
