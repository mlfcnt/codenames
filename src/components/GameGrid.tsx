export const GameGrid = ({ words }: { words: string[] }) => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)",
          width: "80vh", // Adjust the size to fit within the viewport
          height: "80vh", // Make it a square
          gap: "10px", // Optional: for spacing between boxes
        }}
      >
        {words.map((word, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.3rem",
              boxSizing: "border-box",
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};
