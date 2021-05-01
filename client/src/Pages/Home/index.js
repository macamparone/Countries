import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { getCountry } from "../../redux/actions";
import Cards from "../../components/Cards";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import FiltrosOrdenados from "../../components/FiltrosOrdenados";

function Home({ showCountries, countries }) {
  useEffect(() => {
    showCountries();
  }, []);

  return (
    <div className={styles.homePage}>
      <h1></h1>
      <SearchBar />
      <FiltrosOrdenados />
      <Cards countries={countries} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showCountries: () => dispatch(getCountry()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
