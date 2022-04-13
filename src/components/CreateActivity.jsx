import React, { useState } from "react";
import { createNewActivity } from "../api";

const CreateActivity = ({
  token,
  setClicked,
  setCreated,
  activities,
  setActivities,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const response = await createNewActivity(token, {
            name,
            description,
          });
          const newArr = [response, ...activities];
          setActivities(newArr);
          setCreated(true);
          setClicked(false);
        } catch (error) {
          throw error;
        }
      }}
    >
      <label>Name: </label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>Description: </label>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateActivity;
