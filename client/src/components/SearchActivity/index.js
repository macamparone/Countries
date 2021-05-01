import React from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { useState } from "react";
import { searchActivity } from "../../redux/actions";
import { Link } from "react-router-dom";

function SearchActivity(props) {
  const [estadoActualForm, setEstado] = useState("");

  function handleChange(event) {
    setEstado(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.searchAct(estadoActualForm);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formcontainer}>
        <input
          type="text"
          placeholder="Search by activities name."
          value={estadoActualForm}
          onChange={handleChange}
        ></input>
        <button className={styles.searchButton} type="submit">
          SEARCH
        </button>
        {/* <Link to={`/Activities/`}><button className={styles.searchAct}>SEE ACTIVITIES</button></Link> */}
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return { searchAct: (name) => dispatch(searchActivity(name)) };
};
export default connect(null, mapDispatchToProps)(SearchActivity);
