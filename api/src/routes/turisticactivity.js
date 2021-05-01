const { Router } = require("express");
const turisticactivity = Router();
const { Country } = require("../db");
const { v4: uuidv4 } = require("uuid");
const { Activity } = require("../db");
const {
  apiConsult,
  apiSearchName,
  apiSearchId,
  apiSearchActivityName,
} = require("../services");

//uuidv4();

turisticactivity.post("/", (req, res) => {
  // para hacer un post de la activity me tienen que pasar todos esos datos.

  const { name, difficulty, duration, season, country } = req.body; // destructuro las propiedades del objeto body
  if (!name || !difficulty || !duration || !season || !country) {
    // en el caso de que algun dato no me llega, le mando el mensaje de que no se encontro
    // recibo la data

    res.status(404).send("De esta actividad no hay info"); // con el 404 le dijo que no hay infomacion de la info
    // habria que buscar algun status que sea mas acorde
  } else {
    // en el caso de que me haya enviado todos los datos, creo la activity en con el model
    const id = uuidv4();
    Activity.create({
      // ya es promesa aca. entonces le aplico el .then
      id,
      name,
      difficulty,
      duration,
      season,
    }) // create

      .then(async (activitySave) => {
        await activitySave.addCountry(country); // el metodo addcountry viene de la relacion en DB
        // Seq agrega los metodos de addcountry y addactivity por defect ( por las relacion en db)
        // add de countries es una promesa // aca agrego el country
        return activitySave; // aca le agrego el pais a la actividad creada
      })

      .then(async (activitySave) => {
        const result = await Activity.findOne({
          // uso un method de seq para hallar un elemento
          where: { id: activitySave.id }, // tengo que comentar esto.
          include: [Country], // incluyo el country que tiene la actividad. // aca busco el country
        });
        return result;
      })

      .then((activitySave) => res.send(activitySave)); // respuesta OK
    // .catch((error) => res.send(error)); // valido si hay error al crear
  }
});

/* turisticactivity.get("/", async (req, res) => {
  
  }); */

turisticactivity.get("/", async (req, res) => {
  if (req.query.name) {
    //
    try {
      const result = await Activity.findAll({
        // method de sequeliceee
        where: { name: req.query.name }, // hago el findall en la bd peroooooooo...busco por name pasandole el query que me llega
      });
      res.send(result);
    } catch {
      console.log("No existe el pais");
    }
  } else {
    const findActivity = await Activity.findAll(); // si no me pasaron req.name busco todo los que estan en la bd
    if (findActivity.length > 0) {
      // valido si findactivity tiene data

      res.send(findActivity);
    }else{
      res.send("No se encontraron resultados")
    }
  }
});

module.exports = turisticactivity;
