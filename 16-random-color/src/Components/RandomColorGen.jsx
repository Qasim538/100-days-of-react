import React, { useEffect, useState } from "react";

const RandomColorGen = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`); // Corrected syntax for RGB format
  };

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRGBColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color!</button>
        <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color!</button>
      </div>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRGBColor
        }
      >
        Generate Random Color!
      </button>
      <div>
        <h1>{color}</h1>
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
      </div>
    </div>
  );
};

export default RandomColorGen;
