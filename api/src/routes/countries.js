const { Router } = require("express");
const countries = Router();
const { Country,Activity } = require("../db");
const { v4: uuidv4 } = require("uuid");
const { apiConsult,apiSearchName, apiSearchId } = require("../services");
const { Op } = require("sequelize")


uuidv4();
// Logica

countries.get("/", async (req, res) => {
    try {
      if (req.query.name) {
        // averiguo el query de una URL
        //const result = await apiSearchName(req.query.name); // hago la consulta pasandole como parametro lo que me mandan
        var convertName = [
          `%${req.query.name}%`,
          `%${req.query.name.toUpperCase()}%`,
          `%${req.query.name.toLowerCase()}%`,
        ];
        const findCountry = await Country.findAll({
          where : { // no importa donde esta, le mando todo lo que matchea con el OP
            [Op.or]: [ // 
              { name: { [Op.like]: convertName[0] } }, // todos los que matchean con estos u otros
              { name: { [Op.like]: convertName[1] } },
              { name: { [Op.like]: convertName[2] } },
            ],    
          },
          include: [Activity], // traigo los resultado de activity que matchean con el countryid
          order : [ ["name", "ASC"]],
          
        })

        if(findCountry.length > 0 ){ 
          res.send(findCountry)// mando el resu
        }else{
            const result = await apiSearchName(req.query.name);
            res.send(result);
        }
        res.sendStatus(404); // envio error code con el msg de no encontrad
         
      }else{
       const findCountry = await Country.findAll({
        //  where : { name : ""}, // aca es el caso donde no busque por nombre sino que ejecute countries/
         include: Activity,
         order : [ ["name", "ASC"]],
       })  // si no me pasaron req.name busco todo los que estan en la bd
        if(findCountry.length > 0 ){
          res.send(findCountry)
        }else{

          const result = await apiConsult(); // busco y llevo los 10 resultados // hago la consulta
          await Country.bulkCreate(result) // aca hay que comentar tmb // lo mismo que create pero recibo un array de objetos 
         // https://sequelize.org/master/class/lib/model.js~Model.html#static-method-bulkCreate
         res.send(result);
        }
      }
   }catch (error) {
     res.send(error); // envio error code porque murio el server
   }
  });






  countries.get("/:id", async (req, res) => {
    try {
      if (req.params.id) { 
          const result = await Country.findOne({
             where : { id : req.params.id },  // tengo que comentar esto.
             include: [Activity],
          });

        if(!result){  res.status(404).send("No existe el ID en la BD")}
        res.json(result);
      }
    } catch (error) {
      console.log(error)
      res.status(500).send("Se murio el server")
    }
  });

  module.exports = countries
    