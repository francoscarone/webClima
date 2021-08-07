function cargarTabla(){

var ciudad = document.getElementById("ciudad").value;


const url= "https://api.openweathermap.org/data/2.5/weather?q="+ciudad+",UY&units=metric&appid=ffc0dd0e2d496aaa2fa7bcb3d5d0ba09";

fetch(url)
.then(respuesta => respuesta.json())
.then(clima =>{
    document.getElementById("tablita").innerHTML=`<tbody><tr><th colspan="4">${ciudad}</th></tr>`
    document.getElementById("tablita").innerHTML+=`<tr><th colspan="4">Temperatura</th></tr>`
    document.getElementById("tablita").innerHTML+=`<tr><td colspan="2" rowspan="2">${clima.main.temp}°C</td><th colspan="2"> Mínima / Máxima </th></tr>
    <tr><td>${clima.main.temp_min}°C</td><td>${clima.main.temp_max}°C</td></tr>`
    document.getElementById("tablita").innerHTML+=`<tr><th colspan="4">Sensación Termica</th></tr><tr><td colspan="4">${clima.main.feels_like}°C</td></tr>`
    document.getElementById("tablita").innerHTML+=`<tr><th colspan="4">Humedad</th></tr><tr><td colspan="4">${clima.main.humidity}%</td></tr></tbody>`
})} 

