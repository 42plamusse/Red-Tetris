import React from "react";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledLabel,
  StyledMenuItem,
  StyledRowContainer,
  StyledDescription
} from "./styles";

import Select from "../common/select";
import {
  SOLO,
  BATTLEROYAL,
  MAX_PLAYER_SOLO,
  MAX_PLAYER_BATTLEROYAL
} from "../../../constants/constants";

const GameInfoSub = ({ room, isHost, onChangeGameMode }) => {
  const { playersCount } = room;
  const maxPlayer =
    room.mode === SOLO ? MAX_PLAYER_SOLO : MAX_PLAYER_BATTLEROYAL;
  const handleModeChange = e => {
    onChangeGameMode(e.target.value);
  };

  const displayModeDescription = () => {
    if (room.mode === SOLO) {
      return (
        <StyledDescription>
          Single player mode, try to reach the highest score !
        </StyledDescription>
      );
    } else if (room.mode === BATTLEROYAL) {
      return (
        <StyledDescription>
          Multiplayer mode, be the last one alive to win ! Removing multiple
          lines at a time send malus blocks to your opponents.
        </StyledDescription>
      );
    }
  };

  return (
    <StyledContainer id="game-info">
      <StyledRowContainer>
        <Select
          disabled={!isHost || room.isStarted}
          value={room.mode}
          onChange={handleModeChange}
          label="Mode"
        >
          <StyledMenuItem disabled={playersCount > 1} value={SOLO}>
            Solo
          </StyledMenuItem>
          <StyledMenuItem value={BATTLEROYAL}>Battleroyal</StyledMenuItem>
        </Select>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-end"
          }}
        >
          <StyledLabel>Description</StyledLabel>
          <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
            {displayModeDescription()}
          </div>
        </div>
      </StyledRowContainer>
      <div style={{ fontSize: "2vh" }}>
        [{playersCount}/{maxPlayer} Players]
      </div>
    </StyledContainer>
  );
};

GameInfoSub.propTypes = {
  room: PropTypes.object.isRequired
};

export default GameInfoSub;
