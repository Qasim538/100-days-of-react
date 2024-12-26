import React, { useState } from "react";
import Reviews from "./Components/Reviews";

function App() {

  return (
    <section className="container">
      <h2>Our Reviews</h2>
      <div className="underline"></div>
      <Reviews />
    </section>
  );
}

export default App;
