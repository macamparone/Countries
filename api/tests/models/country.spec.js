const { Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { v4: uuidv4 } = require("uuid");


describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => conn.sync({ force: true})); // fuerzo el reinicio de la bd
    describe('name', () => {
      it('should throw an error if any attributes are be null', (done) => {
        const id = uuidv4()
        Activity.create({name: 'Futbol', difficulty: 5, duration: 5, season: 'Verano' })
          .then(() => console.log('It requires a valid attributes'))
          .catch(() => done())
      });
      it('should work when its a valid attributes', (done) => {
        const id = uuidv4()
        Activity.create({id: id, name: 'Futbol', difficulty: 5, duration: 5, season: 'Verano' })
        .then((result) => done())
        .catch((error) => console.log("Error en el catch", error))
      });
    });
  });
});
