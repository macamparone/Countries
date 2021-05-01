import React from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { useState } from "react";
import { searchCountry } from "../../redux/actions";

function SearchBar(props) {
  const [estadoActualForm, setEstado] = useState("");

  function handleChange(event) {
    setEstado(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.searchCountry(estadoActualForm);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formcontainer}>
        <input
          type="text"
          placeholder="Search by country..."
          value={estadoActualForm}
          onChange={handleChange}
        ></input>
        <button className={styles.searchButton} type="submit">
          SEARCH
        </button>
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return { searchCountry: (name) => dispatch(searchCountry(name)) };
};
export default connect(null, mapDispatchToProps)(SearchBar);
