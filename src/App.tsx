import React, { useState } from "react";

import PlayerCard from "./components/PlayerCard";
import useGetListOfNBAPlayers from "./hook/useGetListOfNBAPlayers";

import "./App.css";

const App: React.FC = () => {
  const { loading, error, list, setList } = useGetListOfNBAPlayers();
  const [searchKey, setSearchKey] = useState("");
  const [color, setColor] = useState("#FFFFFF");

  if (loading) {
    return <p className="status-text">Loading...</p>;
  }

  if (error) {
    return (
      <p className="status-text">
        Can not query list of NBA players, please try again.
      </p>
    );
  }

  const handleFavorite = (id: number) => {
    const _list =
      list &&
      list.map((item) => {
        if (item.id === id) return { ...item, favorite: !item.favorite };
        else return item;
      });

    setList(_list);
  };

  return (
    <React.Fragment>
      <div className="search-box">
        <input
          type="text"
          placeholder=" "
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="reset"></button>
      </div>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <div className="list-container">
        <div className="side-container">
          {list
            ? list
                .filter(
                  (player) =>
                    !player.favorite &&
                    (player.first_name.includes(searchKey) ||
                      player.last_name.includes(searchKey))
                )
                .map((player) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    handleFavorite={handleFavorite}
                  />
                ))
            : null}
        </div>

        <div className="side-container" style={{ backgroundColor: `${color}` }}>
          {list
            ? list
                .filter(
                  (player) =>
                    player.favorite &&
                    (player.first_name.includes(searchKey) ||
                      player.last_name.includes(searchKey))
                )
                .map((player) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    handleFavorite={handleFavorite}
                  />
                ))
            : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
