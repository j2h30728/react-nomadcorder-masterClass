import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default App;
