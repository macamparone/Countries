import React from "react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDetailCountry } from "../../redux/actions";
import NavBar from "../NavBar";

function CardDetail({ match, nombreAccionEnComponente, country }) {
  //const [ actualEstate, setState] = useState("")

  useEffect(() => {
    nombreAccionEnComponente(match.match.params.id);
    console.log(match.match.params.id);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card_details}>
          <div className={styles.titleCard}>
            <h2>
              {country.name} ({country.id})
            </h2>
          </div>
          <div>
            <img src={country.flag} alt="Imagen no disponible" />
          </div>

          <p>
            Continent: <span>{country.region} </span>
          </p>
          <p>
            Subregion: <span>{country.subregion}</span>
          </p>
          <p>
            Capital: <span>{country.capital}</span>{" "}
          </p>

          <p>
            Area: <span>{country.area}</span> km²
          </p>
          <p>
            Population: <span>{country.population} </span>
          </p>
          <p>
            Activities:{" "}
            <div>
              {country.Activities
                ? country.Activities.map((item) => <span> {item.name} </span>)
                : null}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { country: state.country };
};
const mapDispatchToProps = (dispatch) => {
  return {
    nombreAccionEnComponente: (name) => dispatch(getDetailCountry(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);
