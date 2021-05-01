/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: "TRA",
  name: "ToniLand",
  region: "Henry",
  subregion: "SubHenry",
  capital: "Saturno",
  area: "234567",
  population: "1",
  flag: "https://henry-social-resources.s3-sa-east-1.amazonaws.com/LOGO-REDES-01_og.jpg"
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true }) // reinicio bd
    .then(() => Country.create(country))); // le paso el country que traigo del objeto

    describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
  describe('GET /countries/:id', () => {
    it('should get 200', () =>
      agent.get('/countries/TRA').expect(200)
    );
    it('should get 404', () =>
    agent.get('/countries/TONI').expect(404)
  );
  });
});
