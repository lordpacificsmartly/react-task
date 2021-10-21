import React, { useState } from "react";

function OrderedList() {
  const [itemsList, setItemsList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [direction, setDirection] = useState(true);
  const handleChange = (item) => {
    setInputText(item.target.value);
  };

  const handleClear = () => {
    setInputText("");
    setItemsList([]);
  };

  const handleSortToggle = () => {
    direction === false ? setDirection(true) : setDirection(false);
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        onKeyDown={(item) => {
          if (item.key === "Enter" && inputText.trim() !== "") {
            setItemsList([...itemsList, inputText]);

            setInputText("");
          }
        }}
      />

      <button onClick={handleSortToggle} className="sort-direction">
        {direction === false ? "⬇️" : "⬆️"}
      </button>

      <button onClick={handleClear} className="clear-list">
        ️🆑
      </button>

      <ul>
        {direction === false &&
          itemsList
            .sort()
            .reverse()
            .map((item, index) => <li key={index}>{item}</li>)}
        {direction === true &&
          itemsList.sort().map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </>
  );
}

export default OrderedList;
