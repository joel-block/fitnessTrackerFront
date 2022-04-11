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
