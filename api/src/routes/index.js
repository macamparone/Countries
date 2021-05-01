const { Router } = require('express');
const countries = require('./countries')
const turisticactivity = require('./turisticactivity')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.get('/', (req,res)=>{
 ////   res.send("Nada")
//})
router.use('/countries', countries)
router.use('/turisticactivity', turisticactivity)


module.exports = router;
