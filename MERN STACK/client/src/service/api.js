import axios from "axios";

const URL = "http://localhost:8000/api/signup";

export const authenticateUser = async (data) => {
  try {
    return await axios.post(URL, data);
  } catch (error) {
    console.log(
      "Error While Signup User Data Posting To The Database",
      error.message
    );
  }
};

export const authenticatelogin = async (data) => {
  try {
    return await axios.post("http://localhost:8000/api/login", data);
  } catch (error) {
    console.log(
      "Error While Login User Data Posting To The Database",
      error.message
    );
  }
};
