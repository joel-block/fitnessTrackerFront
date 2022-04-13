import React, { useState } from "react";
import { updateActivity, updateRoutineActivity } from "../api";

const EditActivity = ({
  token,
  activityId,
  routineActivityId,
  setEditedActivity,
  setEditedName,
  setEditedDescription,
  setEditedDuration,
  setEditedCount,
  setClickedEdit,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(null);
  const [count, setCount] = useState(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          await updateActivity(token, activityId, {
            name,
            description,
          });
          await updateRoutineActivity(token, routineActivityId, {
            count,
            duration,
          });
          setEditedName(name);
          setEditedDescription(description);
          setEditedDuration(duration);
          setEditedCount(count);
          setEditedActivity(true);
          setClickedEdit(false);
        } catch (error) {
          throw error;
        }
      }}
    >
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
      />
      <label>Description:</label>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          e.preventDefault();
          setDescription(e.target.value);
        }}
      />
      <label>Duration:</label>
      <input
        type="number"
        value={duration}
        onChange={(e) => {
          e.preventDefault();
          setDuration(e.target.value);
        }}
      />
      <label>Count:</label>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          e.preventDefault();
          setCount(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditActivity;
