import React, { useState } from "react";

const Card = ({ logo, description, name, isActive, onRemove }) => {
  const [isOn, setIsOn] = useState(isActive);

  const togglebutton = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="border rounded-xl  px-6 py-3 ">
      <div className="flex gap-4  mb-6  items-start ">
        <img src={logo} alt={name} className="w-10" />
        <div className="flex flex-col ">
          <h4 className="text-xl font-semibold">{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-20">
        <button
          className="btn border"
          onClick={() => {
            onRemove(name);
          }}
        >
          Remove
        </button>

        {/* slider */}
        <div
          className={`w-16 h-8 rounded-full flex items-center  transition-colors duration-300 ${isOn ? "bg-red-500" : "bg-(--nav)"} `}
          onClick={togglebutton}
        >
          <div
            className={`w-5 h-5 rounded-full transition-transform duration-300 border bg-white ${isOn ? "translate-x-8" : "translate-x-1"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
