const API_URL = "http://fitnesstrac-kr.herokuapp.com/api/";

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${API_URL}users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${API_URL}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPublicRoutines() {
  try {
    const response = await fetch(`${API_URL}routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserRoutines(token) {
  try {
    const responseUsername = await fetch(`${API_URL}users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const { username } = await responseUsername.json();
    const responseRoutines = await fetch(
      `${API_URL}users/${username}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = responseRoutines.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserRoutine(
  token,
  routineId,
  { name, goal, isPublic }
) {
  let updateObj = {};
  if (name) {
    updateObj.name = name;
  }
  if (goal) {
    updateObj.goal = goal;
  }
  if (typeof isPublic === "boolean") {
    updateObj.isPublic = isPublic;
  }
  try {
    const response = await fetch(`${API_URL}routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateObj),
    });
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
