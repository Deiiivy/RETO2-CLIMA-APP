
const express = require("express");
const app = express();
const PORT = 3002;
const fetch = require("node-fetch");

app.use(express.json());

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a4b70c69ab740a7301d6e29ff4b9dd59`);
    const data = await response.json();
    res.json({
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      temp: data.main.temp,
      wind : data.wind.speed
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});