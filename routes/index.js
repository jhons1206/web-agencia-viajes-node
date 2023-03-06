import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    // req: lo que enviamos - res: lo que express nos responde
    res.send('Inicio'); // .send: Método utilizado para mostrar algo en pantalla
});
router.get('/nosotros', (req, res) => {
    res.render('nosotros'); // Renderiza una vista
});

export default router;

// Muestra un objeto en formato .json
// res.json({
//     id: 1,
// });
