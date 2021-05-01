import { React, useEffect } from "react";
import styles from "./styles.module.css";
import Activity from "../Activity";
import { connect } from "react-redux";
import SearchActivity from "../SearchActivity";

function Activities({ activity }) {
  return (
    <div className={styles.activity}>
      <div>
        {activity &&
          activity.map((item) => (
            <Activity
              name={item.name}
              season={item.season}
              duration={item.duration}
              difficulty={item.difficulty}
            />
          ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { activity: state.prop1, state2: state.prop2 };
};

export default connect(mapStateToProps, null)(Activities);
