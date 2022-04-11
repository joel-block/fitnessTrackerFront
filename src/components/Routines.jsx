import React, { useState, useEffect } from "react";
import { getPublicRoutines } from "../api";

const Routines = () => {
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
            <h2>Routine: {routine.name}</h2>
            <h3>{routine.creatorName}</h3>
            <p>{routine.goal}</p>
            <h4>Activities:</h4>
            <ol>
              {routine.activities.map((activity, j) => {
                return (
                  <li key={`routine-${i}-activity-${j}`}>
                    <h5>{activity.name}</h5>
                    <p>{activity.description}</p>
                    <small>
                      Duration: {activity.duration} | Count: {activity.count}
                    </small>
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default Routines;
