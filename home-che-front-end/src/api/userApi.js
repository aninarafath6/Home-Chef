import axios from "axios";
export const signUp = (payload) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post("/api/auth/signUp", payload)
      .then((res) => {
        // console.log(res);
        localStorage.setItem("auth-token", res.data.token);
        resolve(res.data)
      })
      .catch((error) => {
        // console.log(error.response.data);
        reject(error.response.data.error)
      });
  });
};
