
const guardarTestimonial = (req, res) => {

    // Validar formulario
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre esta vacío' });
    }

    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vacío' });
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacío' });
    }

    if(errores.length > 0) {

        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores
        })
    }
}

export {
    guardarTestimonial
}