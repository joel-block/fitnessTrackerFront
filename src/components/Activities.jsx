import React, { useState, useEffect } from "react";
import { getAllActivities } from "../api";
import { CreateActivity } from "./";

const Activities = ({ isLoggedIn, token, user }) => {
  const [activities, setActivities] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    const fetchActivities = async () => {
      const allActivities = await getAllActivities();
      setActivities(allActivities);
    };
    fetchActivities();
  }, [setActivities]);

  return (
    <div className="activities-page">
      <h2>Activities</h2>
      {isLoggedIn ? (
        <>
          {clicked ? (
            <span className="activity-form">
              <CreateActivity
                token={token}
                setClicked={setClicked}
                setCreated={setCreated}
                activities={activities}
                setActivities={setActivities}
              />
            </span>
          ) : (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setClicked(true);
                }}
              >
                Create New Activity
              </button>
              <span>
                {created ? <h4>Activity Successfully Created!</h4> : null}
              </span>
            </>
          )}
        </>
      ) : (
        <p>Log in to create a new activity!</p>
      )}
      {activities.map((activity, i) => {
        return (
          <span className="single-activity" key={`activities[${i}]`}>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
          </span>
        );
      })}
    </div>
  );
};

export default Activities;
