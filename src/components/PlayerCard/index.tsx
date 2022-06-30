import React from "react";

interface CardProps {
  player: PlayerInfo;
  handleFavorite: (id: number) => void;
}

const PlayerCard: React.FC<CardProps> = ({ player, handleFavorite }) => {
  return (
    <div>
      {player.first_name + " " + player.last_name}
      <span onClick={() => handleFavorite(player.id)}>
        {player.favorite ? "favorited" : "unFavorited"}
      </span>
    </div>
  );
};

export default PlayerCard;
