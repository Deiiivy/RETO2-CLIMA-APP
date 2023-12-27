const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");
const PORT = 3003;

app.use(cors());

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;

  try {
    
    const response = await fetch(`http://localhost:3002/weather/${city}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Servicio de comunicación escuchando en el puerto ${PORT}`);
});
