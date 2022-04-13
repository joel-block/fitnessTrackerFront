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

export async function getUser(token) {
  try {
    const response = await fetch(`${API_URL}users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserRoutines(token, username) {
  try {
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
  if (Object.keys(updateObj).length === 0) {
    return;
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

export async function deleteRoutine(token, routineId) {
  try {
    const response = await fetch(`${API_URL}routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllActivities() {
  try {
    const response = await fetch(`${API_URL}activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addActivityToRoutine(
  token,
  routineId,
  { activityId, count, duration }
) {
  try {
    const response = await fetch(`${API_URL}routines/${routineId}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ activityId, count, duration }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateActivity(token, activityId, { name, description }) {
  let updateObj = {};
  if (name) {
    updateObj.name = name;
  }
  if (description) {
    updateObj.description = description;
  }
  if (Object.keys(updateObj).length === 0) {
    return;
  }
  try {
    const response = await fetch(`${API_URL}activities/${activityId}`, {
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

export async function updateRoutineActivity(
  token,
  routineActivityId,
  { count, duration }
) {
  let updateObj = {};
  if (count !== null) {
    updateObj.count = count;
  }
  if (duration !== null) {
    updateObj.duration = duration;
  }
  if (Object.keys(updateObj).length === 0) {
    return;
  }
  try {
    const response = await fetch(
      `${API_URL}routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateObj),
      }
    );
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function removeActivityFromRoutine(token, routineActivityId) {
  try {
    const response = await fetch(
      `${API_URL}routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function postRoutine(token, { name, goal, isPublic }) {
  let routineObj = { name, goal };
  if (typeof isPublic === "boolean") {
    routineObj.isPublic = isPublic;
  }
  try {
    const response = await fetch(`${API_URL}routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(routineObj),
    });
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
