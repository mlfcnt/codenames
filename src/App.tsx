// import "./App.css";
import { useEffect, useState } from "react";
import { getWords } from "./api/words";
import { GameGrid } from "./components/GameGrid";
import { MapGrid } from "./components/MapGrid";

function App() {
  const [words, setWords] = useState<string[]>([]);
  const teams = ["red", "blue"] as const;

  const randomTeam = teams[Math.floor(Math.random() * teams.length)];
  useEffect(() => {
    getWords().then(setWords);
  }, []);

  // return a 5*5 css grid of words, full screen
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: "2rem", color: randomTeam }}>
          {randomTeam} team plays!
        </p>
      </div>
      <MapGrid />
      <GameGrid words={words} />
    </div>
  );
}

export default App;
