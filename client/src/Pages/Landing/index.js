import React, { Fragment } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={styles.landingPage}>
      <Link to="/Home">
        <button className={styles.btnLanding} name="Ingresar">
          Enter
        </button>
      </Link>
    </div>
  );
}
