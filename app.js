// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true })); // para formularios
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// "Base de datos" en memoria
let orders = [];

/* RUTAS */

// Home
app.get('/', (req, res) => {
  res.render('index');
});

// Mostrar formulario (GET) — pasar posibles valores por defecto
app.get('/register', (req, res) => {
  res.render('register', { error: null, formData: {} });
});

// Procesar registro (POST) — con validación servidor
app.post('/register', (req, res) => {
  const { id, client, destination, packageType } = req.body;

  // Validaciones servidor
  const idRegex = /^\d+$/;
  const textRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // acepta letras (incluye acentos) y espacios

  let error = null;
  if (!id || !client || !destination || !packageType) {
    error = 'Por favor completa todos los campos.';
  } else if (!idRegex.test(id)) {
    error = 'El ID sólo puede contener números.';
  } else if (!textRegex.test(client)) {
    error = 'El campo "Cliente" sólo puede contener letras y espacios.';
  } else if (!textRegex.test(destination)) {
    error = 'El campo "Destino" sólo puede contener letras y espacios.';
  }

  if (error) {
    // devolver formulario con mensaje de error y valores ya ingresados
    return res.render('register', { error, formData: { id, client, destination, packageType } });
  }

  // Si pasa validación, crear el pedido
  const newOrder = {
    id,
    client,
    destination,
    packageType,
    status: 'Pendiente',
    createdAt: new Date()
  };
  orders.push(newOrder);

  // Mostrar pantalla de éxito con opciones
  res.render('register-success', { order: newOrder });
});

// Vista "Ver envíos" (centrada y bonita)
app.get('/orders/view', (req, res) => {
  res.render('orders', { orders });
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`🚚 LogisticsPro corriendo en http://localhost:${PORT}`);
});
