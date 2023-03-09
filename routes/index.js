import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    // req: lo que enviamos - res: lo que express nos responde
    res.render('Inicio'); // .send: Método utilizado para mostrar algo en pantalla
});
router.get('/nosotros', (req, res) => {
    // Renderiza una vista
    res.render('nosotros');
});

export default router;
