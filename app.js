
let obtenerValorButton = document.getElementById('obtenerValorButton');

obtenerValorButton.addEventListener('click', async () => {
  let valorInput = document.getElementById('myInput').value;

  try {
    const response = await fetch(`http://localhost:3003/weather/${valorInput}`);
    const data = await response.json();

    mostrarDatosEnDocumento(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

function mostrarDatosEnDocumento(data) {
  const humidity = data.humidity;
  const pressure = data.pressure;
  const temp = data.temp;
  const wind = data.wind;

  const humidityElement = document.createElement('p');
  const pressureElement = document.createElement('p');
  const tempElement = document.createElement('p');
  const windElement = document.createElement('p');

  humidityElement.textContent = `Humedad: ${humidity}`;
  pressureElement.textContent = `Presión: ${pressure}`;
  tempElement.textContent = `Temperatura: ${temp}`;
  windElement.textContent = `viento: ${wind}`;

  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = '';

  resultadoElement.appendChild(humidityElement);
  resultadoElement.appendChild(pressureElement);
  resultadoElement.appendChild(tempElement);
  resultadoElement.appendChild(windElement);
}
