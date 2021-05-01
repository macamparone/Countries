import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Activity({
  name,
  duration,
  season,
  difficulty,
  countries,
}) {
  return (
    <div className={styles.activity}>
      {/* <img src={flag} alt="Imagen no disponible"/> */}

      <div className={styles.activity_details}>
        {/* <Link to={`/CardDetail/${name}`}><h1>{name}</h1></Link> */}
        <p>Name: {name}</p>
        <p>Duration: {duration}</p>
        <p>Season: {season}</p>
        <p>difficulty: {difficulty}</p>
        <p>countries: {countries}</p>
      </div>
    </div>
  );
}
