import { Viaje } from '../models/Viaje.js';

const paginaInicio = (req, res) => {
    // req: lo que enviamos
    // res: lo que express nos responde
    res.render('Inicio', {
        pagina: 'Inicio',
    });
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros',
    });
};

const paginaViajes = async (req, res) => {
    // Consultar BD
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    });
};

const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug }});

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
};

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales',
    });
};

export { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
};
