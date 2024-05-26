export const MapGrid = () => {
  const colors = Array.from({ length: 25 }).map((x, idx) => {
    return idx % 2 === 0 ? "red" : "blue";
  });

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
          width: "13vh",
          height: "13vh",
          gap: "2px",
        }}
      >
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.3rem",
              boxSizing: "border-box",
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    </div>
  );
};
