import axios from "axios";

const api = {
  // @Get get list of current NBA players
  // @params
  getListOfNBAPlayers: () =>
    axios.get("https://www.balldontlie.io/api/v1/players"),
};

export default api;
