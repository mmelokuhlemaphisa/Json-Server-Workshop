// const axios = require("axios");

// fetch("http://localhost:3000/items")
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
fetch("http://localhost:3000/items")
  .then(function (response) {
    // handle success
    response.json();
  }).then(response => console.log(response))
  .catch(function (error) {
    // handle error
    console.log(error);
  });