export async function ordenado(dataParaOrdenar, opciones) {
  let dataOrdenada;
  if (opciones.name) {
    dataOrdenada = dataParaOrdenar.sort((a, b) => {
      if (opciones.name === "Descendent") {
        
        // https://developer.mozilla.org/es/search?q=sort
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
      } else {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      }
      // ordeno la data que me trae con un sort por primera letra del name
      return 0;
    }); // funcion que ordena
  }

  if (opciones.population) {
    const dataOrdenadaClear = dataParaOrdenar.filter((item) => item.area && item )
    dataOrdenada = dataOrdenadaClear.sort((a, b) => {
      
      const aresult = a.area / a.population
      const bresult = b.area / b.population
      
      if (opciones.population === "Descendent") {
       
        if (aresult < bresult) {
          return 1;
        }
        if (aresult > bresult) {
          return -1;
        }
      } else {
        if (aresult > bresult) {
          return 1;
        }
        if (aresult < bresult) {
          return -1;
        }
      }
      // ordeno la data que me trae con un sort por primera letra del name
      return 0;
    }); // funcion que ordena
  }
  return dataOrdenada;
}

export async function filtrado(dataParaFiltrar, opciones) {
  let dataFiltrada; // creo la const
  if (opciones.season) {
    dataFiltrada = dataParaFiltrar.filter(
      (
        item // asigno a DF los filtros.
      ) =>
        item.Activities.find(
          (item) => item.season.toLowerCase() === opciones.season.toLowerCase()
        ) // aca filtro la season con la dataparafiltrar
    );
  }

  if (opciones.region) {
    dataFiltrada = dataParaFiltrar.filter((item) =>
      item.region.includes(opciones.region)
    );
    // filtro la data por el nombre, mayus y si incluye tmb a Mayus.
  }
  return dataFiltrada;
}
