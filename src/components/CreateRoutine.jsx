import React, { useState } from "react";
import { postRoutine } from "../api";

const CreateRoutine = ({
  token,
  setClickedAdd,
  setAdded,
  myRoutines,
  setMyRoutines,
}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          let newRoutine = await postRoutine(token, {
            name,
            goal,
            isPublic,
          });
          newRoutine.activities = [];
          setClickedAdd(false);
          setAdded(true);
          const updatedRoutines = [newRoutine, ...myRoutines];
          setMyRoutines(updatedRoutines);
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
      <label>Goal:</label>
      <input
        type="text"
        placeholder="Goal"
        value={goal}
        onChange={(e) => {
          e.preventDefault();
          setGoal(e.target.value);
        }}
      />
      <label>Public:</label>
      <input
        type="checkbox"
        onChange={() => {
          setIsPublic(!isPublic);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateRoutine;
