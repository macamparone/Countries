const axios = require("axios"); // import axios
const { processCountry, processActivity } = require("../utils");
require("dotenv").config();
const { COUNTRIES_API_KEY } = process.env;
// carpeta para hacer las llamadas. esta no tiene api key porque en la pagina no estaba.

async function apiConsult() {
  try {
    const response = await axios.get("https://restcountries.eu/rest/v2/all"); // hago la consulta para el getr
    return response.data.map((item) => processCountry(item)); // axios le agrega data al response. //
    // me importo processoCountry
  } catch (error) {
    // si entra aca es porque hubo algun error en al llamada
    console.error(error);
  }
}

// axios.get("https://restcountries.eu/rest/v2/all")
// .then((response)=> response.data.map((item) => processCountry(item))) // asi con .then



async function apiSearchName(code) {
  try {
    // hago el search por el name
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${code}`
    );

    return response.data.map((item) => processCountry(item)); // axios le agrega data al response.
  } catch (error) {
    console.error(error);
  }
}

// axios.get(`https://restcountries.eu/rest/v2/name/${code}`)
// .then((response)=>response.data.map((item) => processCountry(item)))
// .catch((error)=> console.log(error))



async function apiSearchId(anyId) {
  try {
    // hago el search por el id
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${anyId}`); // busco por id, segun la api me lo indica
    return response.data.map((item) => processCountry(item)); // axios le agrega data al response.
  } catch (error) {
    console.error(error);
  }
}

async function apiPostActivity() {
  try {
    // hago el search por el id
    const response = await axios.get(`http://localhost:3001/turisticactivity`); // busco por id, segun la api me lo indica
    return response.data.map((item) => processActivity(item)); // axios le agrega data al response.
  } catch (error) {
    console.error(error);
  }
}

async function apiSearchActivityName(name) {
  try {
    // hago el search por el name
    const response = await axios.get(`http://localhost:3001/turisticactivity?${name}`);
    return response.data.map((item) => processActivity(item)); // axios le agrega data al response.
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  apiConsult,
  apiSearchName,
  apiSearchId,
  apiSearchActivityName,
};
