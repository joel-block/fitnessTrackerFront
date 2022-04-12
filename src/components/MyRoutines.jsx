import React, { useState, useEffect } from "react";
import { getUserRoutines, getAllActivities } from "../api";
import { SingleRoutine } from "./";

const MyRoutines = ({ isLoggedIn, token }) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchRoutinesAndActivities = async (token) => {
      const userRoutines = await getUserRoutines(token);
      setMyRoutines(userRoutines);
      const allActivities = await getAllActivities();
      setActivities(allActivities);
    };
    fetchRoutinesAndActivities(token);
  }, []);

  return (
    <div className="my-routines-page">
      {isLoggedIn ? (
        <>
          <h2>My Routines</h2>
          {myRoutines.map((routine, i) => {
            return (
              <SingleRoutine
                key={`myroutine-${i}`}
                token={token}
                routine={routine}
                activities={activities}
              />
            );
          })}
        </>
      ) : (
        <h2>Please log in to view your routines!</h2>
      )}
    </div>
  );
};

export default MyRoutines;
