import axios from 'axios';
export const signUp = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios.post("/api/auth/signUp", payload);
      resolve(res.data);

      if (res.success) {
        // localStorage.setItem("home-token", res.data.token);
      } else {
        reject(res.error);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const getUser = () =>{
  return new Promise((resolve,reject)=>{

  })
}