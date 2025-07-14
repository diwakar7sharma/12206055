const axios = require('axios');

const payload = {
  email: "diwakar4311@example.com",
  name: "diwakar sharma",
  rollNo: "12206055",
  accessCode: "CZypQK",
  clientID: "382d25ee-c6f9-4e69-ae6c-f14ccb7a419e",
  clientSecret: "rghsHVWjxQeYGwYA"
};

axios.post("http://20.244.56.144/evaluation-service/auth", payload)
  .then(res => {
    console.log("Access Token:\n", res.data.access_token);
  })
  .catch(err => {
    console.error("Error:\n", err.response?.data || err.message);
  });
