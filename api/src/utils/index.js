function processCountry(example) {
  return {
    id: example.alpha3Code,
    name: example.name,
    region: example.region,
    subregion: example.subregion,
    capital: example.capital,
    area: example.area,
    population: example.population,
    flag: example.flag,
  };
}

function processActivity(example) {
  return {
    id: example.id,
    name: example.name,
    duration: example.duration,
    season: example.duration,
    difficulty: example.difficulty,
  };
}
module.exports = {
  processCountry,
  processActivity,
};
