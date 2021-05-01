import { React, useEffect } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { searchActivity } from "../../redux/actions";
import Activity from "../../components/Activity";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import SearchActivity from "../../components/SearchActivity";
import Activities from "../../components/Activities";
import CreateActivity from "../../components/CreateActivity";

export default function LoadActivity() {
  return (
    <div className={styles.actPage}>
      <SearchActivity />

      <CreateActivity />
    </div>
  );
}
