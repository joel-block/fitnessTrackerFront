import React, { useState } from "react";
import { EditActivity } from "./";

const SingleActivity = ({ activity }) => {
  const [clickedEdit, setClickedEdit] = useState(false);

  return (
    <li>
      <span>
        <h5>{activity.name}</h5>
        <p>{activity.description}</p>
        <small>
          Duration: {activity.duration} | Count: {activity.count}
        </small>
      </span>
      <br />
      <span>
        <button
          onClick={(e) => {
            e.preventDefault();
            setClickedEdit(true);
          }}
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Remove
        </button>
      </span>
      <span>
        {clickedEdit ? (
          <span>
            <EditActivity />
          </span>
        ) : null}
      </span>
    </li>
  );
};

export default SingleActivity;
