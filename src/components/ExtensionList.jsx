import React, { useState } from "react";
import Card from "./Card";
import data from "../data.json";

const ExtensionList = () => {
  const [filterType, setFilterType] = useState("all");
  const [extensions, setExtensions] = useState(data);

  const filteredData = extensions.filter((item) => {
    if (filterType === "active") return item.isActive;
    if (filterType === "inactive") return !item.isActive;
    return true;
  });
  const handleRemove = (name) => {
    setExtensions((prev) =>
      prev.filter((extension) => extension.name !== name),
    );
  };

  return (
    <>
      <div className="flex justify-between font-display flex-col items-center gap-6 md:flex-row mt-10 mb-4">
        <div className="text-2xl font-display">Extensions List</div>
        <div className="flex space-x-6 ">
          <button
            className={`btn ${filterType === "all" ? "bg-red-500 text-white" : ""}`}
            onClick={() => setFilterType("all")}
          >
            All
          </button>

          <button
            className={`btn ${filterType === "active" ? "bg-red-500 text-white" : "bg-(--nav)"}`}
            onClick={() => setFilterType("active")}
          >
            Active
          </button>

          <button
            className={`btn ${filterType === "inactive" ? "bg-red-500 text-white" : "bg-(--nav)"}`}
            onClick={() => setFilterType("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((extension) => (
          <Card
            key={extension.name}
            logo={extension.logo}
            description={extension.description}
            name={extension.name}
            isActive={extension.isActive}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </>
  );
};

export default ExtensionList;
