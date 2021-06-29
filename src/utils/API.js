import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25&nat=us";
// Export an object containing methods we'll use for accessing the Random Employee API
export default {
  getRandomEmployee: function () {
    return axios.get(BASEURL);
  },
};

// export default {
//   getRandomEmployee: function () {
//     return axios
//       .get("https://randomuser.me/api/?results=25&nat=us")
//       .then((res) => {
//         const state = res.data;
//         return state.map((employees) => {
//           return {
//             name: employees.name,
//             image: employees.avatar_url,
//             profileUrl: employees.html_url,
//           };
//         });
//       });
//   },
// };
