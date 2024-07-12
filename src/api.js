// import axios from "axios";

// console.log("Hi");

// const request = axios.create({
//   baseURL: "https://youtube.googleapis.com/youtube/v3/",
//   params: {
//     key: "AIzaSyCgAxOudQR-p7Kc2US3hxO8wdZhl8I86IA",
//   },
// });

// export default request;

import axios from "axios";

console.log(process.env.REACT_APP_YT_API_KEY);

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",

  params: {
    key: "AIzaSyCgAxOudQR-p7Kc2US3hxO8wdZhl8I86IA",
  },
});

export default request;
