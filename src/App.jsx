import React from "react";
import Navbar from "./components/Navbar";
import ExtensionList from "./components/ExtensionList";

const App = () => {
  return (
    <div className="px-12 py-6 bg-(--bg) text-(--text) dark:text-(--text) dark:bg-(--bg) min-h-screen">
      <Navbar />
      <ExtensionList />
    </div>
  );
};

export default App;
