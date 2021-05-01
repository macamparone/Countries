import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import {
  getCountry,
  searchCountry,
  filtradoAction,
  ordenadoAction,
} from "../../redux/actions";

function FiltrosOrdenamiento(props) {
  //////////////////// const [selectedRegion, setSelectedRegion] = useState([])

  function handleSelectedRegion(event) {
    props.filter([...props.countriesData], { region: event.target.value }); // filter de Redux
    if (event.target.value === "SelectContinent") {
      props.getCountry(event.target.value);
    }
  }

  function handleSelectedSeason(event) {
    if (event.target.value === "SelectSeason") {
      props.getCountry(event.target.value);
    }
    props.filter([...props.countriesData], { season: event.target.value });
  }
  function handleSelectedPopulation(event) {
    props.order([...props.countriesData], { population: event.target.value });
    if (event.target.value === "SelectPopulation") {
      props.getCountry(event.target.value);
    }
  }
  function handleSelectedName(event) {
    props.order([...props.countriesData], { name: event.target.value });
  }

  return (
    <div className={styles.container}>
      <div>
        <label>Filter by Region: </label>

        <select onChange={handleSelectedRegion}>
          <option label="Select" value="SelectContinent"></option>
          {props.continent.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      <div>
        <label>Order by Population: </label>
        <select
          onChange={handleSelectedPopulation}
          className={styles.btnfilter}>
          <option label="Select" value="SelectPopulation"></option>
          <option value="Ascendent" label="Ascendent"></option>
          <option value="Descendent" label="Descendent"></option>
        </select>
      </div>
      <div>
        <label>Order by Name: </label>
        <select onChange={handleSelectedName} className={styles.btnfilter}>
          {/* <option label="Select  " value="SelectPopulation" ></option>    */}
          <option value="Ascendent">A-Z</option>
          <option value="Descendent">Z-A</option>
        </select>
      </div>

      <div>
        <label>Filter by Turistic Act: </label>
        <select onChange={handleSelectedSeason} className={styles.btnfilter}>
          <option label="Select" value="SelectSeason"></option>
          <option value="Verano"> Summer</option>
          <option value="Otoño"> Autumn</option>
          <option value="Invierno">Winter</option>
          <option value="Primavera"> Spring</option>
          <option value="AllSeasons"> All seasons</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    continent: state.continent,
    countriesData: state.countriesData,
  }; // consumo state
};
const mapDispatchToProps = (dispatch) => {
  return {
    filter: (data, opciones) => dispatch(filtradoAction(data, opciones)),
    order: (data, opciones) => dispatch(ordenadoAction(data, opciones)),
    getCountry: () => dispatch(getCountry()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltrosOrdenamiento);
