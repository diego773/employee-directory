import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero/index";
import ResultList from "./components/ResultList/index";
import Search from "./components/Search/index";

function App() {
  return (
    <div>
      <Hero />
      <ResultList />
      <Search />
    </div>
  );
}

export default App;
