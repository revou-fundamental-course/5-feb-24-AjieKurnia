function celsius(c) {
    var a = []
    result = (c * 9/5) + 32;
    return result;
}

function fahrenheit(c) {
    result = (c - 32) * 5/9;
    return result;
}

document.getElementById('tempConverterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let tempInput = parseFloat(document.getElementById('tempInput').value);
    let tempUnit = document.getElementById('tempUnit').value;
    let result;

    if (tempUnit === 'celsius') {
        result = celsius(tempInput);
        document.getElementById('conversionResult').innerHTML = `<b>Hasil :</b><p style="color:blue">Celsius ke Fahrenheit<p> ${tempInput} Celsius = ${result.toFixed(2)} Fahrenheit 
        <br> <p><b>Cara Kalkulasi:</b></p> <hr> (${tempInput}&degC x 9/5) + 32 = ${result.toFixed(2)}&degF <hr> 
        <br><b>Cara Konversi dari Celsius (&degC) ke Fahrenheit (&degF)</b> <hr> Suhu S dalam derajat Fahrenheit (&degF) 
        sama dengan suhu S dalam derajat Celsius (&degC) kali 9/5 tambah 32. <br> <b>Rumus:</b> <br>
        &degF = (&degC x 9/5) +32`;
    } else {
        result = fahrenheit(tempInput);
        document.getElementById('conversionResult').innerHTML = `<b>Hasil :</b><p style="color:blue">Fahrenheit ke Celsius<p> ${tempInput} Fahrenheit = ${result.toFixed(2)} Celsius 
        <br> <p><b>Cara Kalkulasi:</b></p> <hr> (${tempInput}&degF - 32) + 5/9 = ${result.toFixed(2)}&degC <hr> 
        <br><b>Cara Konversi dari Fahrenheit (&degF) ke Celsius (&degC)</b> <hr> Suhu S dalam derajat Celsius (&degC)
        sama dengan suhu S dalam derajat Fahrenheit (&degF) kurang 32 kali 5/9. <br> <b>Rumus:</b> <br>
        &degC = (&degF - 32) x 5/9`;
    }
});

document.getElementById('reverseBtn').addEventListener('click', function () {
    let reverseInput = parseFloat(document.getElementById('tempInput').value);
    let reverseUnit = document.getElementById('tempUnit').value;
    if (!reverseInput){
        alert("Input Harus di Isi");
    }else if (reverseUnit === 'celsius') {
        document.getElementById('tempUnit').selectedIndex = 1;
        result = fahrenheit(reverseInput);
        document.getElementById('conversionResult').innerHTML = `<b>Hasil :</b><p style="color:blue">Fahrenheit ke Celsius<p> ${reverseInput} Fahrenheit = ${result.toFixed(2)} Celsius 
        <br> <p><b>Cara Kalkulasi:</b></p> <hr> (${reverseInput}&degF - 32) + 5/9 = ${result.toFixed(2)}&degC <hr> 
        <br><b>Cara Konversi dari Fahrenheit (&degF) ke Celsius (&degC)</b> <hr> Suhu S dalam derajat Celsius (&degC)
        sama dengan suhu S dalam derajat Fahrenheit (&degF) kurang 32 kali 5/9. <br> <b>Rumus:</b> <br>
        &degC = (&degF - 32) x 5/9`;
    }else {
        document.getElementById('tempUnit').selectedIndex = 0;
        result = celsius(reverseInput);
        document.getElementById('conversionResult').innerHTML = `<b>Hasil :</b><p style="color:blue">Celsius ke Fahrenheit<p> ${reverseInput} Celsius = ${result.toFixed(2)} Fahrenheit 
        <br> <p><b>Cara Kalkulasi:</b></p> <hr> (${reverseInput}&degC x 9/5) + 32 = ${result.toFixed(2)}&degF <hr> 
        <br><b>Cara Konversi dari Celsius (&degC) ke Fahrenheit (&degF)</b> <hr> Suhu S dalam derajat Fahrenheit (&degF) 
        sama dengan suhu S dalam derajat Celsius (&degC) kali 9/5 tambah 32. <br> <b>Rumus:</b> <br>
        &degF = (&degC x 9/5) +32`;
    }
})

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('conversionResult').innerHTML = ''
})