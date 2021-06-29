import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25&nat=us";
// Export an object containing methods we'll use for accessing the Random Employee API
export default {
  getRandomEmployee: function () {
    return axios.get(BASEURL);
  },
};
