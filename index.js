// Sintaxis common.js
// const express = require('express');
import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar Pug (Template Engine)
app.set('view engine', 'pug');

// Agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El Servidor este funcionando en el puerto ${port}`);
});
