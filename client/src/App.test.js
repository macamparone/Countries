import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Landing from "./Pages/Landing";
import LoadActivity from "./Pages/LoadActivity"
import Home from "./Pages/Home"
import SearchBar from "./components/SearchBar"

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

configure({ adapter: new Adapter() });

describe("App", () => {
  // lo uqe voy q testar
  let store;
  let middleware = [thunk]; // llamado asincro
  let mockstore = configureStore(middleware);

  beforeEach(() => {
    store = mockstore( {
      countries: [
        {
        "id": "AFG",
        "name": "Afghanistan",
        "flag": "https://restcountries.eu/data/afg.svg",
        "region": "Asia",
        "capital": "Kabul",
        "subregion": "Southern Asia",
        "area": 652230,
        "population": 27657145,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ALA",
        "name": "Åland Islands",
        "flag": "https://restcountries.eu/data/ala.svg",
        "region": "Europe",
        "capital": "Mariehamn",
        "subregion": "Northern Europe",
        "area": 1580,
        "population": 28875,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ALB",
        "name": "Albania",
        "flag": "https://restcountries.eu/data/alb.svg",
        "region": "Europe",
        "capital": "Tirana",
        "subregion": "Southern Europe",
        "area": 28748,
        "population": 2886026,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "DZA",
        "name": "Algeria",
        "flag": "https://restcountries.eu/data/dza.svg",
        "region": "Africa",
        "capital": "Algiers",
        "subregion": "Northern Africa",
        "area": 2381741,
        "population": 40400000,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ASM",
        "name": "American Samoa",
        "flag": "https://restcountries.eu/data/asm.svg",
        "region": "Oceania",
        "capital": "Pago Pago",
        "subregion": "Polynesia",
        "area": 199,
        "population": 57100,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AND",
        "name": "Andorra",
        "flag": "https://restcountries.eu/data/and.svg",
        "region": "Europe",
        "capital": "Andorra la Vella",
        "subregion": "Southern Europe",
        "area": 468,
        "population": 78014,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AGO",
        "name": "Angola",
        "flag": "https://restcountries.eu/data/ago.svg",
        "region": "Africa",
        "capital": "Luanda",
        "subregion": "Middle Africa",
        "area": 1246700,
        "population": 25868000,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AIA",
        "name": "Anguilla",
        "flag": "https://restcountries.eu/data/aia.svg",
        "region": "Americas",
        "capital": "The Valley",
        "subregion": "Caribbean",
        "area": 91,
        "population": 13452,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ATA",
        "name": "Antarctica",
        "flag": "https://restcountries.eu/data/ata.svg",
        "region": "Polar",
        "capital": "",
        "subregion": "",
        "area": 14000000,
        "population": 1000,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ATG",
        "name": "Antigua and Barbuda",
        "flag": "https://restcountries.eu/data/atg.svg",
        "region": "Americas",
        "capital": "Saint John's",
        "subregion": "Caribbean",
        "area": 442,
        "population": 86295,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ARG",
        "name": "Argentina",
        "flag": "https://restcountries.eu/data/arg.svg",
        "region": "Americas",
        "capital": "Buenos Aires",
        "subregion": "South America",
        "area": 2780400,
        "population": 43590400,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [
        {
        "id": "55200748-da1c-4e0d-8a7e-4c597d386da0",
        "name": "Prueba",
        "difficulty": 1,
        "duration": "1",
        "season": "allseasons",
        "createdAt": "2021-04-15T13:08:58.571Z",
        "updatedAt": "2021-04-15T13:08:58.571Z",
        "MiddleTable": {
        "createdAt": "2021-04-15T13:08:58.635Z",
        "updatedAt": "2021-04-15T13:08:58.635Z",
        "countryId": "ARG",
        "ActivityId": "55200748-da1c-4e0d-8a7e-4c597d386da0"
        }
        }
        ]
        },
        {
        "id": "ARM",
        "name": "Armenia",
        "flag": "https://restcountries.eu/data/arm.svg",
        "region": "Asia",
        "capital": "Yerevan",
        "subregion": "Western Asia",
        "area": 29743,
        "population": 2994400,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ABW",
        "name": "Aruba",
        "flag": "https://restcountries.eu/data/abw.svg",
        "region": "Americas",
        "capital": "Oranjestad",
        "subregion": "Caribbean",
        "area": 180,
        "population": 107394,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AUS",
        "name": "Australia",
        "flag": "https://restcountries.eu/data/aus.svg",
        "region": "Oceania",
        "capital": "Canberra",
        "subregion": "Australia and New Zealand",
        "area": 7692024,
        "population": 24117360,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AUT",
        "name": "Austria",
        "flag": "https://restcountries.eu/data/aut.svg",
        "region": "Europe",
        "capital": "Vienna",
        "subregion": "Western Europe",
        "area": 83871,
        "population": 8725931,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AZE",
        "name": "Azerbaijan",
        "flag": "https://restcountries.eu/data/aze.svg",
        "region": "Asia",
        "capital": "Baku",
        "subregion": "Western Asia",
        "area": 86600,
        "population": 9730500,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BHS",
        "name": "Bahamas",
        "flag": "https://restcountries.eu/data/bhs.svg",
        "region": "Americas",
        "capital": "Nassau",
        "subregion": "Caribbean",
        "area": 13943,
        "population": 378040,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BHR",
        "name": "Bahrain",
        "flag": "https://restcountries.eu/data/bhr.svg",
        "region": "Asia",
        "capital": "Manama",
        "subregion": "Western Asia",
        "area": 765,
        "population": 1404900,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BGD",
        "name": "Bangladesh",
        "flag": "https://restcountries.eu/data/bgd.svg",
        "region": "Asia",
        "capital": "Dhaka",
        "subregion": "Southern Asia",
        "area": 147570,
        "population": 161006790,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BRB",
        "name": "Barbados",
        "flag": "https://restcountries.eu/data/brb.svg",
        "region": "Americas",
        "capital": "Bridgetown",
        "subregion": "Caribbean",
        "area": 430,
        "population": 285000,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BLR",
        "name": "Belarus",
        "flag": "https://restcountries.eu/data/blr.svg",
        "region": "Europe",
        "capital": "Minsk",
        "subregion": "Eastern Europe",
        "area": 207600,
        "population": 9498700,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BEL",
        "name": "Belgium",
        "flag": "https://restcountries.eu/data/bel.svg",
        "region": "Europe",
        "capital": "Brussels",
        "subregion": "Western Europe",
        "area": 30528,
        "population": 11319511,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BLZ",
        "name": "Belize",
        "flag": "https://restcountries.eu/data/blz.svg",
        "region": "Americas",
        "capital": "Belmopan",
        "subregion": "Central America",
        "area": 22966,
        "population": 370300,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BEN",
        "name": "Benin",
        "flag": "https://restcountries.eu/data/ben.svg",
        "region": "Africa",
        "capital": "Porto-Novo",
        "subregion": "Western Africa",
        "area": 112622,
        "population": 10653654,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BMU",
        "name": "Bermuda",
        "flag": "https://restcountries.eu/data/bmu.svg",
        "region": "Americas",
        "capital": "Hamilton",
        "subregion": "Northern America",
        "area": 54,
        "population": 61954,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BTN",
        "name": "Bhutan",
        "flag": "https://restcountries.eu/data/btn.svg",
        "region": "Asia",
        "capital": "Thimphu",
        "subregion": "Southern Asia",
        "area": 38394,
        "population": 775620,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BOL",
        "name": "Bolivia (Plurinational State of)",
        "flag": "https://restcountries.eu/data/bol.svg",
        "region": "Americas",
        "capital": "Sucre",
        "subregion": "South America",
        "area": 1098581,
        "population": 10985059,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BES",
        "name": "Bonaire, Sint Eustatius and Saba",
        "flag": "https://restcountries.eu/data/bes.svg",
        "region": "Americas",
        "capital": "Kralendijk",
        "subregion": "Caribbean",
        "area": 294,
        "population": 17408,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        }],
      continent: [
        "America", "Oceania"
      ],
      country: {},
      activity: {},
      countriesData: [
        {
        "id": "AFG",
        "name": "Afghanistan",
        "flag": "https://restcountries.eu/data/afg.svg",
        "region": "Asia",
        "capital": "Kabul",
        "subregion": "Southern Asia",
        "area": 652230,
        "population": 27657145,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ALA",
        "name": "Åland Islands",
        "flag": "https://restcountries.eu/data/ala.svg",
        "region": "Europe",
        "capital": "Mariehamn",
        "subregion": "Northern Europe",
        "area": 1580,
        "population": 28875,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ALB",
        "name": "Albania",
        "flag": "https://restcountries.eu/data/alb.svg",
        "region": "Europe",
        "capital": "Tirana",
        "subregion": "Southern Europe",
        "area": 28748,
        "population": 2886026,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "DZA",
        "name": "Algeria",
        "flag": "https://restcountries.eu/data/dza.svg",
        "region": "Africa",
        "capital": "Algiers",
        "subregion": "Northern Africa",
        "area": 2381741,
        "population": 40400000,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ASM",
        "name": "American Samoa",
        "flag": "https://restcountries.eu/data/asm.svg",
        "region": "Oceania",
        "capital": "Pago Pago",
        "subregion": "Polynesia",
        "area": 199,
        "population": 57100,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AND",
        "name": "Andorra",
        "flag": "https://restcountries.eu/data/and.svg",
        "region": "Europe",
        "capital": "Andorra la Vella",
        "subregion": "Southern Europe",
        "area": 468,
        "population": 78014,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AGO",
        "name": "Angola",
        "flag": "https://restcountries.eu/data/ago.svg",
        "region": "Africa",
        "capital": "Luanda",
        "subregion": "Middle Africa",
        "area": 1246700,
        "population": 25868000,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AIA",
        "name": "Anguilla",
        "flag": "https://restcountries.eu/data/aia.svg",
        "region": "Americas",
        "capital": "The Valley",
        "subregion": "Caribbean",
        "area": 91,
        "population": 13452,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ATA",
        "name": "Antarctica",
        "flag": "https://restcountries.eu/data/ata.svg",
        "region": "Polar",
        "capital": "",
        "subregion": "",
        "area": 14000000,
        "population": 1000,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ATG",
        "name": "Antigua and Barbuda",
        "flag": "https://restcountries.eu/data/atg.svg",
        "region": "Americas",
        "capital": "Saint John's",
        "subregion": "Caribbean",
        "area": 442,
        "population": 86295,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ARG",
        "name": "Argentina",
        "flag": "https://restcountries.eu/data/arg.svg",
        "region": "Americas",
        "capital": "Buenos Aires",
        "subregion": "South America",
        "area": 2780400,
        "population": 43590400,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [
        {
        "id": "55200748-da1c-4e0d-8a7e-4c597d386da0",
        "name": "Prueba",
        "difficulty": 1,
        "duration": "1",
        "season": "allseasons",
        "createdAt": "2021-04-15T13:08:58.571Z",
        "updatedAt": "2021-04-15T13:08:58.571Z",
        "MiddleTable": {
        "createdAt": "2021-04-15T13:08:58.635Z",
        "updatedAt": "2021-04-15T13:08:58.635Z",
        "countryId": "ARG",
        "ActivityId": "55200748-da1c-4e0d-8a7e-4c597d386da0"
        }
        }
        ]
        },
        {
        "id": "ARM",
        "name": "Armenia",
        "flag": "https://restcountries.eu/data/arm.svg",
        "region": "Asia",
        "capital": "Yerevan",
        "subregion": "Western Asia",
        "area": 29743,
        "population": 2994400,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "ABW",
        "name": "Aruba",
        "flag": "https://restcountries.eu/data/abw.svg",
        "region": "Americas",
        "capital": "Oranjestad",
        "subregion": "Caribbean",
        "area": 180,
        "population": 107394,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AUS",
        "name": "Australia",
        "flag": "https://restcountries.eu/data/aus.svg",
        "region": "Oceania",
        "capital": "Canberra",
        "subregion": "Australia and New Zealand",
        "area": 7692024,
        "population": 24117360,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AUT",
        "name": "Austria",
        "flag": "https://restcountries.eu/data/aut.svg",
        "region": "Europe",
        "capital": "Vienna",
        "subregion": "Western Europe",
        "area": 83871,
        "population": 8725931,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "AZE",
        "name": "Azerbaijan",
        "flag": "https://restcountries.eu/data/aze.svg",
        "region": "Asia",
        "capital": "Baku",
        "subregion": "Western Asia",
        "area": 86600,
        "population": 9730500,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BHS",
        "name": "Bahamas",
        "flag": "https://restcountries.eu/data/bhs.svg",
        "region": "Americas",
        "capital": "Nassau",
        "subregion": "Caribbean",
        "area": 13943,
        "population": 378040,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BHR",
        "name": "Bahrain",
        "flag": "https://restcountries.eu/data/bhr.svg",
        "region": "Asia",
        "capital": "Manama",
        "subregion": "Western Asia",
        "area": 765,
        "population": 1404900,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BGD",
        "name": "Bangladesh",
        "flag": "https://restcountries.eu/data/bgd.svg",
        "region": "Asia",
        "capital": "Dhaka",
        "subregion": "Southern Asia",
        "area": 147570,
        "population": 161006790,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BRB",
        "name": "Barbados",
        "flag": "https://restcountries.eu/data/brb.svg",
        "region": "Americas",
        "capital": "Bridgetown",
        "subregion": "Caribbean",
        "area": 430,
        "population": 285000,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BLR",
        "name": "Belarus",
        "flag": "https://restcountries.eu/data/blr.svg",
        "region": "Europe",
        "capital": "Minsk",
        "subregion": "Eastern Europe",
        "area": 207600,
        "population": 9498700,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BEL",
        "name": "Belgium",
        "flag": "https://restcountries.eu/data/bel.svg",
        "region": "Europe",
        "capital": "Brussels",
        "subregion": "Western Europe",
        "area": 30528,
        "population": 11319511,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BLZ",
        "name": "Belize",
        "flag": "https://restcountries.eu/data/blz.svg",
        "region": "Americas",
        "capital": "Belmopan",
        "subregion": "Central America",
        "area": 22966,
        "population": 370300,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BEN",
        "name": "Benin",
        "flag": "https://restcountries.eu/data/ben.svg",
        "region": "Africa",
        "capital": "Porto-Novo",
        "subregion": "Western Africa",
        "area": 112622,
        "population": 10653654,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BMU",
        "name": "Bermuda",
        "flag": "https://restcountries.eu/data/bmu.svg",
        "region": "Americas",
        "capital": "Hamilton",
        "subregion": "Northern America",
        "area": 54,
        "population": 61954,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BTN",
        "name": "Bhutan",
        "flag": "https://restcountries.eu/data/btn.svg",
        "region": "Asia",
        "capital": "Thimphu",
        "subregion": "Southern Asia",
        "area": 38394,
        "population": 775620,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BOL",
        "name": "Bolivia (Plurinational State of)",
        "flag": "https://restcountries.eu/data/bol.svg",
        "region": "Americas",
        "capital": "Sucre",
        "subregion": "South America",
        "area": 1098581,
        "population": 10985059,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        },
        {
        "id": "BES",
        "name": "Bonaire, Sint Eustatius and Saba",
        "flag": "https://restcountries.eu/data/bes.svg",
        "region": "Americas",
        "capital": "Kralendijk",
        "subregion": "Caribbean",
        "area": 294,
        "population": 17408,
        "createdAt": "2021-04-15T13:08:23.047Z",
        "updatedAt": "2021-04-15T13:08:23.047Z",
        "Activities": [ ]
        }],
    });
    // }).catch((error) => {
    //   console.log(error);
  });
  describe("Landing", () => {
    it("test Landing", () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App></App>
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Landing)).toHaveLength(1);
    });
  });
  
  describe("Home", () => {
    it("test Home", () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/LoadActivity"]}>
            <App></App>
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find("Form")).toHaveLength(1); // devuelve array y matchea con el length
    });
  });
});
