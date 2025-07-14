const axios = require('axios');

const payload = {
  email: "diwakar4311@example.com",
  name: "Diwakar Sharma",
  mobileNo: "6307197639",
  githubUsername: "diwakar7sharma",
  rollNo: "12206055",
  accessCode: "CZypQK"
};

axios.post('http://20.244.56.144/evaluation-service/register', payload)
  .then(res => console.log(res.data))
  .catch(err => console.error(err.response.data));
