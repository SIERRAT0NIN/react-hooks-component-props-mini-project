import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Header {...blogData} />
      <About {...blogData} />
      <ArticleList {...blogData} />
    </div>
  );
}

export default App;
