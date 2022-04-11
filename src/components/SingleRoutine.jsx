import React, { useState } from "react";
import { EditRoutine } from "./";

const SingleRoutine = ({ routine, token }) => {
  const [clickedEditRoutine, setClickedEditRoutine] = useState(false);
  const [edited, setEdited] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedGoal, setEditedGoal] = useState("");
  const [editedPublic, setEditedPublic] = useState(false);

  return (
    <div className="single-routine">
      {edited ? (
        <>
          <h2>Routine: {editedName.length > 0 ? editedName : routine.name}</h2>
          <h3>Public: {editedPublic ? "Yes" : "No"}</h3>
          <p>{editedGoal.length > 0 ? editedGoal : routine.goal}</p>
        </>
      ) : (
        <>
          <h2>Routine: {routine.name}</h2>
          <h3>Public: {routine.isPublic ? "Yes" : "No"}</h3>
          <p>{routine.goal}</p>
        </>
      )}
      <span className="button-container">
        {!clickedEditRoutine ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setClickedEditRoutine(true);
            }}
          >
            Edit Routine
          </button>
        ) : null}
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Delete Routine
        </button>
      </span>
      <span>
        {clickedEditRoutine ? (
          <span>
            <EditRoutine
              routineId={routine.id}
              setClickedEditRoutine={setClickedEditRoutine}
              setEdited={setEdited}
              token={token}
              setEditedName={setEditedName}
              setEditedGoal={setEditedGoal}
              setEditedPublic={setEditedPublic}
            />
          </span>
        ) : null}
      </span>
      <span>{edited ? <h4>Post Successfully Edited!</h4> : null}</span>

      <h4>Activities:</h4>
      <ol>
        {routine.activities.map((activity, j) => {
          return (
            <li key={`myroutine-activity-${j}`}>
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
};

export default SingleRoutine;
