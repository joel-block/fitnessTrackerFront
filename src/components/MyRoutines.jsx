import React, { useState, useEffect } from "react";
import { getUserRoutines, getAllActivities } from "../api";
import { SingleRoutine } from "./";

const MyRoutines = ({ isLoggedIn, token, user }) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchRoutinesAndActivities = async (token) => {
      const userRoutines = await getUserRoutines(token, user.username);
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
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Add New Routine
          </button>
          <br />
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
