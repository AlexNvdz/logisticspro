// app.js
const express = require('express');
const path = require('path');

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// "Base de datos" en memoria
let orders = [];

/* RUTAS */
app.get('/', (req, res) => res.render('index'));

app.get('/register', (req, res) => {
  res.render('register', { error: null, formData: {} });
});

app.post('/register', (req, res) => {
  const { id, client, destination, packageType } = req.body;
  const idRegex = /^\d+$/;
  const textRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

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
    return res.render('register', { error, formData: { id, client, destination, packageType } });
  }

  const newOrder = {
    id,
    client,
    destination,
    packageType,
    status: 'Pendiente',
    createdAt: new Date()
  };
  orders.push(newOrder);

  res.render('register-success', { order: newOrder });
});

app.get('/orders/view', (req, res) => {
  res.render('orders', { orders });
});

app.get('/orders', (req, res) => res.json(orders));

// 👇 Exporta la app para Vercel
module.exports = app;
