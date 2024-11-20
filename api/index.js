const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

const proyectos = [
    {
        'nombre': 'GeoHistory',
        'descripcion': 'Mapa que muestra eventos historicos en el lugar en que ocurrieron',
        'repositorio': 'https://github.com/felig76/GeoHistory'
    },
    {
      'nombre': 'Air Quality Project ESP32',
      'descripcion': 'Dispositivo que mide la calidad del aire usando placa ESP32',
      'repositorio': 'https://github.com/felig76/air-quality-esp32-project'
    },
    {
      'nombre': 'MyFitness',
      'descripcion': 'Aplicación de control de stock para empresa de articulos de gimnasio',
      'repositorio': 'https://github.com/felig76/control-stock-empresa-myfitness'
    }
    
];


app.get('/proyectos', (req, res) => {
  res.json(proyectos);
});

app.listen(3000, () => {
  console.log(`Servidor corriendo en http://localhost:3000`);
});