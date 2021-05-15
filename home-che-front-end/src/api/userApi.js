import axios from "axios";

export const signUp = (payload) => {
  // returning promise
  return new Promise(async (resolve, reject) => {
    try {
      // calling sign up api
      let res = await axios.post("/api/auth/signUp", payload);
      // resolving success response
      console.log(res);
      localStorage.setItem("home-token", res.data.token);
       
      resolve(res);
      // if (res.data.success) {
      // } else {
      //   // rejecting error response
      //   reject(res);
      // }
    } catch (error) {
      // rejecting error response
      // reject(error.message);
      console.log(error);
    }
  });
};
