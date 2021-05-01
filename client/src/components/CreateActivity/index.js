import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { getCountry, postActivity } from "../../redux/actions";

function CreateActivity(props) {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const [estadoActualForm, setEstado] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: "",
    wrong : ""
  });

  const [notifications, setNotifications] = useState({
    success: "",
    
  });

  useEffect(() => {
    props.getCountry();
  }, []);

  function handleSelectedCountries(event) {
    if (event.target.value === "") {
      setErrors({ ...errors, country: "Error in selected country " });
      return;
    }
    setErrors({ ...errors, country: "" });
    const countryExists = estadoActualForm.country.find(
      (item) => item === event.target.innerText
    );

    if (!countryExists) {

      setEstado({
        ...estadoActualForm,
        country: [...estadoActualForm.country, event.target.value],
      });
    }
  }

  function handleDeleteCountry(event) {
    const filterCountry = estadoActualForm.country.filter(
      (item) => item !== event.target.innerText
    );

    setEstado({ ...estadoActualForm, country: filterCountry });
  }

  function handleChange(event) {
    const reg = /^[a-z]+$/i;

    if (event.target.id === "name" && !event.target.value.match(reg)) {
      setErrors({ ...errors, name: "Invalid Name" });
      setEstado({ ...estadoActualForm, name: "" });
      return;
    }

    if (event.target.id === "difficulty" && event.target.value <= 0) {
      setEstado({ ...estadoActualForm, difficulty: "" });
      return;
    }
    if (event.target.id === "duration" && event.target.value <= 0) {
      setEstado({ ...estadoActualForm, duration: "" });
      return; // handle error
    }
    console.log(estadoActualForm);
    if (event.target.id === "season" && event.target.value === "Selected") {
      setErrors({ ...errors, season: "Invalid season " });
      setEstado({ ...estadoActualForm, season: "" });
      return; // handle error
    }

    let form = { ...estadoActualForm };

    form[event.target.id] = event.target.value;

    setEstado(form);

    setErrors({ ...errors, name: "", season: "" });
    setNotifications({ ...notifications, success: "", wrong: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setEstado({ ...estadoActualForm, country: selectedCountries });

    if (
      estadoActualForm.name !== null &&
      estadoActualForm.difficulty > 0 &&
      estadoActualForm.season !== "" &&
      estadoActualForm.duration > 0 &&
      estadoActualForm.country.length > 0
    ) {
      setNotifications({
        ...notifications,
        success: "Load the activity successfully!",
      });

      props.postActivity(estadoActualForm);

      setEstado({
        ...estadoActualForm,
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: [],
      });
      event.target.reset();
    } else {
      setErrors({
        ...errors,
        wrong: "Something goes wrong!",
      });
      event.target.reset();
    }
  }
  return (
    <div className={styles.activity}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Load your tourist activity</h2>
        <fieldset>
          <div className={styles.doubleinput}>
            <label>Name </label>

            <input
              minLength="4"
              maxLength="20"
              onChange={handleChange}
              value={estadoActualForm.name}
              type="text"
              // required="required"
              id="name"
              placeholder="Name of activity"
            ></input>
            <label>Difficulty</label>
            <input
              onChange={handleChange}
              value={estadoActualForm.difficulty}
              // required="required"
              id="difficulty"
              type="number"
              placeholder="Select difficulty"
            ></input>
            <label>Duration (in months)</label>
            <input
              onChange={handleChange}
              value={estadoActualForm.duration}
              // required="required"
              id="duration"
              type="number"
              placeholder="Select duration"
            ></input>
          </div>
          <label className={styles.errors}>{errors.name}</label>
          <div className={styles.selecteditems}>
            <label for="season">Season</label>

            <select onChange={handleChange} id="season">
              <option value="Selected" selected>
                {"Select"}
              </option>
              <option value="verano">Summer</option>
              <option value="otoño">Autumn</option>
              <option value="invierno">Winter</option>
              <option value="primavera">Spring</option>
              <option value="allseasons">All Seasons</option>
            </select>

            <label>Country </label>

            <select onChange={handleSelectedCountries}>
              <option value="" selected>
                Select
              </option>
              {props.countries &&
                props.countries.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
            </select>
          </div>
          <label className={styles.errors}>
            {errors.country} {errors.season}
          </label>
          <div className={styles.countrydelete}>
            {estadoActualForm.country &&
              estadoActualForm.country.map((item) => {
                return (
                  <div className={styles.countrydelete}>
                    <label>Selected Country:</label>
                    <div
                      className={styles.btncountrydelete}
                      onClick={handleDeleteCountry}
                    >
                      {item}
                    </div>
                  </div>
                );
              })}
          </div>
        </fieldset>
        <label className={styles.notifications}>{notifications.success}</label>
        <label className={styles.errors}>{errors.wrong}</label>
        <div className={styles.btnload}>
          <button type="submit">Done</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postActivity: (form) => dispatch(postActivity(form)),
    getCountry: () => dispatch(getCountry()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity);
