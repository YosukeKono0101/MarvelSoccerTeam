import React, { useState } from "react";
import styled from "styled-components";
import { fetchCharacters } from "../utils/api";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const SearchMessage = styled.div`
  margin-bottom: 20px;
  text-align: center;
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const SearchInput = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px 0 0 8px;
  font-size: 15px;
`;

const SearchButton = styled.button`
  width: 60px;
  padding: 10px;
  background-color: #ed1d24;
  color: white;
  border: 1px solid #ed1d24;
  border-radius: 0 8px 8px 0;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 250px;
  height: 310px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  img {
    width: 80%;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }

  h3 {
    margin: 10px 0;
  }
`;

const ModalDescription = styled.p`
  font-weight: 100;
`;

const NoteText = styled.p`
  color: red;
`;

// main component
const CharacterSearch = ({ onAddToTeam, selectedPlayers }) => {
  //hooks for managing component state
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [teamPosition, setTeamPosition] = useState("");
  const [positionError, setPositionError] = useState("");

  // remove HTML tags from description
  const sanitizeDescription = (description) => {
    return description.replace(/<[^>]*>?/gm, "");
  };

  // handle search on button click
  const handleSearch = async () => {
    if (!searchTerm) return;
    const results = await fetchCharacters(searchTerm);
    setCharacters(results);
  };

  // handle character card click and display modal
  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  // close modal and clear selected character
  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  // handle adding character to team
  const handleAddToTeam = () => {
    // validation checks before adding character to team
    if (!teamPosition) {
      alert("Please select a position for the character.");
      return;
    }

    // when selected position taken
    const isPositionTaken = selectedPlayers.some(
      (player) => player.position === teamPosition
    );

    if (isPositionTaken) {
      alert("This position is already taken.");
      return;
    }

    // when selected character has already been selected for another position
    const isAlreadySelected = selectedPlayers.some(
      (player) => player.id === selectedCharacter.id
    );

    if (isAlreadySelected) {
      alert("This character has already been selected for another position.");
      return;
    }

    // has to be 5-aside team
    if (selectedPlayers.length >= 5) {
      alert("The team is already full.");
      return;
    }

    // positions required
    const hasRequiredPositions = (team) => {
      const requiredPositions = [
        "goalkeeper",
        "defender",
        "midfielder",
        "striker",
      ];
      const teamPositions = team.map((player) => player.position);
      return requiredPositions.every((position) =>
        teamPositions.includes(position)
      );
    };

    const newTeam = [
      ...selectedPlayers,
      { ...selectedCharacter, position: teamPosition },
    ];
    if (newTeam.length === 5 && !hasRequiredPositions(newTeam)) {
      setPositionError(
        "The team must include at least one goalkeeper, midfielder, striker, and defender."
      );
      return;
    }

    onAddToTeam({
      ...selectedCharacter,
      position: teamPosition,
      image: `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`,
      description: sanitizeDescription(selectedCharacter.description),
    });
    // reset state aftr adding character to team
    setSelectedCharacter(null);
    setTeamPosition("");
  };

  // render comic list
  const renderComicList = (comics) => {
    if (!comics || comics.lenth === 0) return <p>No comics available</p>;
    return (
      <ul>
        {comics.items.map((comic, index) => (
          <li key={index}>{comic.name}</li>
        ))}
      </ul>
    );
  };

  // render series list
  const renderSeriesList = (series) => {
    if (!series || series.length === 0) return <p>No series available</p>;
    return (
      <ul>
        {series.items.map((serie, index) => (
          <li key={index}>{serie.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <SearchContainer id="search">
      <SearchMessage>Create your ultimate Marvel Soccer Team!</SearchMessage>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for Marvel characters"
        />
        <SearchButton onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchButton>
      </div>
      <CardsContainer>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            onClick={() => handleCardClick(character)}
          >
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <h3>{character.name}</h3>
          </CharacterCard>
        ))}
      </CardsContainer>

      <Modal show={!!selectedCharacter} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCharacter?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalDescription>
            {selectedCharacter &&
              sanitizeDescription(selectedCharacter.description)}
          </ModalDescription>
          <h4>Comics</h4>
          {selectedCharacter && renderComicList(selectedCharacter.comics)}
          <h4>Series</h4>
          {selectedCharacter && renderSeriesList(selectedCharacter.series)}
          <NoteText>
            Note: The team must include at least one goalkeeper, midfielder,
            striker, and defender.
          </NoteText>
          {positionError && <p className="text-danger">{positionError}</p>}
          <select onChange={(e) => setTeamPosition(e.target.value)}>
            <option value="">Select Position</option>
            <option value="goalkeeper">Goalkeeper</option>
            <option value="defender">Defender</option>
            <option value="midfielder">Midfielder</option>
            <option value="striker">Striker</option>
            <option value="outfieldST">Outfield Striker</option>
            <option value="outfieldMF">Outfield Midfielder</option>
            <option value="outfieldDF">Outfield Defender</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToTeam}>
            Add to Team
          </Button>
        </Modal.Footer>
      </Modal>
    </SearchContainer>
  );
};

export default CharacterSearch;
