import React, { useState, useEffect, Fragment } from "react";
import styles from "./styles.module.css";
import Card from "../Card";

import { connect } from "react-redux";

export default function Cards({ countries }) {
  const [actualCountries, setActualCountries] = useState([]);

  const countriesForPage = 12;

  const numberOfPages = Math.ceil(countries.length / countriesForPage);

  const [actualPage, setActualPage] = useState(1);

  const paginate = (pageNumber) => {
    const aux =
      pageNumber === 0
        ? pageNumber + 1 * countriesForPage
        : pageNumber * countriesForPage + 1;
    setActualCountries(countries.slice(aux - countriesForPage, aux)); // define la seccion que renderizo en la pagina
    // define cual es el indice del principio y el final
    setActualPage(pageNumber);
  };

  useEffect(() => {
    paginate(0);
  }, [countries]); //ejecuto el paginate

  return (
    <Fragment>
      <div className={styles.paginationBttns}>
        <button
          onClick={() =>
            paginate(actualPage >= 1 ? actualPage - 1 : actualPage)
          }
        >{` < `}</button>
        <button
          onClick={() =>
            paginate(actualPage < numberOfPages ? actualPage + 1 : actualPage)
          }
        >{` > `}</button>
      </div>
      <div className={styles.cards}>
        {actualCountries &&
          actualCountries.map((item, i) => (
            <div>
              {" "}
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                region={item.region}
                population={item.population}
                flag={item.flag}
              />
            </div>
          ))}
      </div>
    </Fragment>
  );
}
// const mapStateToProps = (state) => {
//     return { countries : state.countries}
// }
// export default connect(mapStateToProps, null)(Cards)
