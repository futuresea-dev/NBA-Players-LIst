import React from "react";

import "./style.css";

interface CardProps {
  player: PlayerInfo;
  handleFavorite: (id: number) => void;
}

const NBA_PLAYER_IMAGE_URL = "https://nba-players.herokuapp.com/players";

const PlayerCard: React.FC<CardProps> = ({ player, handleFavorite }) => {
  return (
    <div className="card">
      <img
        src={`${NBA_PLAYER_IMAGE_URL}/${player.last_name}/${player.first_name}`}
        alt="Person"
        className="card__image"
      />
      <p className="card__name">{player.first_name + " " + player.last_name}</p>
      <div>Team: {player.team.full_name}</div>
      <div>City: {player.team.city}</div>
      <div>Position: {player.position}</div>
      <button
        className="btn draw-border"
        onClick={() => handleFavorite(player.id)}
      >
        {player.favorite ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default PlayerCard;
