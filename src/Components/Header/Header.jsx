import React from "react";

// CSS IN JS
const gaya = {
  textAlign: "center",
  backgroundColor: "#eee"
};

const Header = () => {
  return (
    <nav style={gaya}>
      <h1>Cloning Tech in Asia</h1>
    </nav>
  );
};

export default Header;
