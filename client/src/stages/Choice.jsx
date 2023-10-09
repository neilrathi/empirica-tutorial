import React from "react";
import { AudioRoom } from "../components/AudioRoom";
import { usePlayer } from "@empirica/core/player/classic/react";

export function Choice() {
  const player = usePlayer();

  return (
    <div>

          You are the {player.get("role")}. <AudioRoom userName = {player.id} roomCode = {player.get("roomCode")} forceJoin = {false}/>

    </div>
  );
}