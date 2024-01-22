import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faRedditAlien } from "@fortawesome/free-brands-svg-icons";
// importing pitch style
import {
  Wrapper,
  Campo,
  Divisoria,
  Interior,
  Semi1,
  Semi2,
  GK,
  DF,
  MF,
  ST,
  OUTDF,
  OUTMF,
  OUTST,
} from "./SoccerPitch.style";

const TeamFormationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 50px;
  position: relative;

  @media (max-width: 768px) {
    max-height: 85vh;
  }

  @media (max-width: 480px) {
    max-height: 100vh;
  }
`;

const PitchTitleContainer = styled.div`
  width: 100%;
  background-color: #ed1d24;
  padding: 10px 0;
  margin-bottom: 20px;
  text-align: center;
`;

const PlayerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  margin-top: 20px;
`;

const PlayerItem = styled.div`
  background: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  align-items: center;
  display: flex;
  flex-direction: column;

  .remove-button {
    display: flex;
    align-items: center;
    background: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #d32f2f;
    }
  }
`;

const ShareMessage = styled.div`
  text-align: center;
  color: black;
  font-size: 18px;
  top: 0;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const ShareButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  top: 50px;
  padding: 10px 0;
`;

const ShareButton = styled.a`
  display: inline-block;
  color: black;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  text-decoration: none;
`;

const PitchMessage = styled.div`
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const positionComponents = {
  goalkeeper: GK,
  defender: DF,
  midfielder: MF,
  striker: ST,
  outfieldST: OUTST,
  outfieldMF: OUTMF,
  outfieldDF: OUTDF,
};

const TeamFormation = ({ team, onRemoveFromTeam }) => {
  // handle player removal from the team
  const handleRemoveClick = (playerId) => {
    onRemoveFromTeam(playerId);
  };

  // create a sharable message about the team
  const createShareMessage = () => {
    let message = "Check out my Marvel Soccer Team Formation: ";
    team.forEach((player) => {
      message += `${player.name} as ${player.position}, `;
    });
    return message.slice(0, -2); // remove the last comma and space
  };

  // construct and encode the share message
  const shareMessage = createShareMessage(team);
  const encodedShareMessage = encodeURIComponent(shareMessage);

  // URL for sharing on Twitter and Reddit
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedShareMessage}`;
  const redditShareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
    window.location.href
  )}&title=${encodedShareMessage}`;

  return (
    <TeamFormationContainer id="team">
      <PitchTitleContainer>
        <PitchMessage>Your Marvel Soccer Team Formation</PitchMessage>
      </PitchTitleContainer>

      <ShareMessage>Share Your Team!</ShareMessage>

      {/* Share buttons */}
      <ShareButtonsContainer>
        <ShareButton
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} />
          Share on Twitter
        </ShareButton>
        <ShareButton
          href={redditShareUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faRedditAlien} />
          Share on Reddit
        </ShareButton>
      </ShareButtonsContainer>
      <Wrapper>
        <Campo>
          <Semi1 />
          <Semi2 />
          <Divisoria />
          <Interior />
          {team.map((player) => {
            const PositionComponent = positionComponents[player.position];
            return (
              <PositionComponent
                key={player.id}
                $image={
                  player.thumbnail.path + "." + player.thumbnail.extension
                }
              />
            );
          })}
        </Campo>
      </Wrapper>
      {/* List of selected players */}
      {team.length > 0 && (
        <PlayerList>
          {team.map((player) => (
            <PlayerItem key={player.id}>
              {/* Player details */}
              {player.name} - {player.position}
              <button
                className="remove-button"
                onClick={() => handleRemoveClick(player.id)}
              >
                Remove From Team
              </button>
            </PlayerItem>
          ))}
        </PlayerList>
      )}
    </TeamFormationContainer>
  );
};

export default TeamFormation;
