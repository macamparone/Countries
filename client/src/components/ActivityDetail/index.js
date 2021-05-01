import React from "react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getActivity } from "../../redux/actions";

function ActivityDetail({ match, nombreAccionEnComponente, state1 }) {
  //const [ actualEstate, setState] = useState("")
  console.log(match);
  useEffect(() => {
    nombreAccionEnComponente(match.match.params.id);
  }, []);
  state1 && console.log(state1);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card_details}>
          <div className={styles.titleCard}>
            <h2>
              {state1.name}({state1.id})
            </h2>
          </div>
          <div>
            <img src={state1.flag} alt="Imagen no disponible" />
          </div>
          <h3>
            <p className={styles.region}>
              Se encuentra en el continente: {state1.region}
            </p>
            <p className={styles.subregion}>
              En la subregion de: {state1.subregion}
            </p>
            <p className={styles.capital}>{state1.capital} es su capital</p>
            <p className={styles.area}>
              El pais posee una cantidad de {state1.area} km²
            </p>
            <p className={styles.population}>
              La poblacion total es: {state1.population}
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { state1: state.activity };
};
const mapDispatchToProps = (dispatch) => {
  return {
    nombreAccionEnComponente: (name) => dispatch(getActivity(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetail);
