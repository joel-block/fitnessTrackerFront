import React, { useState, useEffect } from "react";
import { getPublicRoutines } from "../api";

const Routines = (props) => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const getRoutines = async () => {
      const routinesArray = await getPublicRoutines();
      setRoutines(routinesArray);
    };
    getRoutines();
  }, []);

  return (
    <div className="routines-page">
      {routines.map((routine, i) => {
        return (
          <div key={`publicRoutine-${i}`} className="single-routine">
            <h3>{routine.name}</h3>
            <h4>{routine.creatorName}</h4>
            <p>{routine.goal}</p>
            {routine.activities.map((activity, j) => {
              return (
                <span key={`routine-${i}-activity-${j}`}>
                  <h4>{activity.name}</h4>
                  <p>{activity.description}</p>
                  <small>
                    Duration: {activity.duration} | Count: {activity.count}
                  </small>
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Routines;
