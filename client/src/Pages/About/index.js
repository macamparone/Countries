import React, { Fragment } from 'react'
import styles from './styles.module.css'
import react from '../../assets/imgabout/react.png'
import redux from '../../assets/imgabout/redux.png'
import express from '../../assets/imgabout/express.png'
import sequelice from '../../assets/imgabout/sequelice.png'
import postgress from '../../assets/imgabout/postgress.png'

export default function About() {
  return (
    <Fragment>
      <div className={styles.aboutPage}>
        <div className={styles.about}>
          <div className={styles.about_details}>
            <h2>This project was made with some awesome technologies:</h2>
            <p>
                <li> 
               
                <img  src={react} /> 
                <a href="https://reactjs.org/" target="_blank">React:  17.0.1</a></li>

                <li> 
                <img src={redux} />
                <a href="https://es.redux.js.org/" target="_blank">Redux:  4.0.5</a></li>

                <li>   
                <img src={express} />
                <a href="https://expressjs.com/es//" target="_blank">Express:  4.17.1</a></li>

                <li> 
                <img src={sequelice} />
                <a href="https://sequelize.org/" target="_blank">Sequelize:  6.5.1</a></li>
                <li> 
                <img src={postgress} />
                <a href="https://www.postgresql.org/" target="_blank">Postgres:  1.0.2</a></li>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

