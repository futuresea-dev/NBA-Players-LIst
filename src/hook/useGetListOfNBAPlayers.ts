import { useEffect, useState } from "react";

import api from "../services/player.service";

const useGetListOfNBAPlayers = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<PlayerInfo[]>();
  const [error, setError] = useState();

  useEffect(() => {
    api
      .getListOfNBAPlayers()
      .then((res) => {
        setList(
          res.data.data.map((playerInfo: PlayerInfo) => {
            return { ...playerInfo, favorite: false };
          })
        );
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { loading, list, error, setList };
};

export default useGetListOfNBAPlayers;
