import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, id, region, flag, population }) {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.card}>
        <Link to={`/CardDetail/${id}`}>
          <img src={flag} alt="Imagen no disponible" />
        </Link>
        <div className={styles.card_details}>
          {/* <Link to={`/CardDetail/${id}`}></Link> */}
          <h1>{name}</h1>
          <p>Region: {region}</p>
          <p>Population: {population}</p>
        </div>
      </div>
    </div>
  );
}
