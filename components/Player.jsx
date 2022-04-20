import React from "react";
import scissors from "../public/assets/gunting.png";
import paper from "../public/assets/kertas.png";
import rock from "../public/assets/batu.png";

const Player = ({ weapon }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

export default Player;
