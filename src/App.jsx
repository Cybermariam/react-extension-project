import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ExtensionList from "./components/ExtensionList";
import data from "./data.json";

const App = () => {
  const [inputName, setInputName] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [extensions, setExtensions] = useState(() => {
    let saved = localStorage.getItem("extensions");
    return saved ? JSON.parse(saved) : data;
  });
  useEffect(() => {
    localStorage.setItem("extensions", JSON.stringify(extensions));
  }, [extensions]);
  const handleAdd = () => {
    if (!extensions) {
      return;
    }
    const newExtension = {
      id: new Date().getTime().toString(),
      name: inputName,
      description: inputDesc || "No description",
      logo: "/images/logo.svg",
      isActive: false,
    };
    setExtensions([...extensions, newExtension]);
    setInputDesc("");
    setInputName("");
  };
  const handleRemove = (name) => {
    setExtensions((prev) =>
      prev.filter((extension) => extension.name !== name),
    );
  };

  return (
    <div className="px-12 py-6 bg-(--bg) text-(--text) dark:text-(--text) dark:bg-(--bg) min-h-screen">
      <Navbar />
      <div className="my-6 flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Extension Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="border px-2 py-2 rounded w-full"
        />

        <input
          type="text"
          placeholder="Description (optional)"
          value={inputDesc}
          onChange={(e) => setInputDesc(e.target.value)}
          className="border px-2 py-2 rounded w-full"
        />

        <button
          onClick={handleAdd}
          className="bg-red-500 text-white px-4 py-2 rounded md:w-auto w-full"
        >
          Add Extension
        </button>
      </div>
      <ExtensionList extensions={extensions} onRemove={handleRemove} />
    </div>
  );
};

export default App;
