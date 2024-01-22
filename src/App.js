import React, { useState } from "react";
import Header from "./components/Header";
import MarvelImage from "./components/MarvelImage";
import CharacterSearch from "./components/CharacterSearch";
import TeamFormation from "./components/TeamFormation";
import Footer from "./components/Footer";

function App() {
  // track selected players for the team
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  // add a player to the team
  const handleAddToTeam = (player) => {
    setSelectedPlayers([...selectedPlayers, player]);
  };
  //remove a player from the team
  const handleRemoveFromTeam = (playerId) => {
    setSelectedPlayers(selectedPlayers.filter((player) => player.id !== playerId));
  };

  return (
    <div>
      <div id="top"></div>
      <Header />
      <MarvelImage />
      <CharacterSearch onAddToTeam={handleAddToTeam} selectedPlayers={selectedPlayers} />
      <TeamFormation team={selectedPlayers} onRemoveFromTeam={handleRemoveFromTeam} />
      <Footer />
    </div>
  );
}

export default App;
