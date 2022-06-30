import React, { useState } from "react";

import PlayerCard from "./components/PlayerCard";
import useGetListOfNBAPlayers from "./hook/useGetListOfNBAPlayers";

import "./App.css";

const App: React.FC = () => {
  const { loading, error, list, setList } = useGetListOfNBAPlayers();
  const [searchKey, setSearchKey] = useState("");
  const [color, setColor] = useState("#FFFFFF");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Can not query list of NBA players, please try again.</p>;
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

  console.log(list);

  return (
    <React.Fragment>
      <input
        placeholder="Search player by name"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />

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
