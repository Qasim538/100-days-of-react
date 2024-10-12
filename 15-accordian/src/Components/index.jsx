import { useState } from "react";
import data from "./data";
import "./index.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // Corrected typo
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentID = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentID === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentID, 1);
    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)} // Corrected typo
        className="button"
      >
        {enableMultiSelection ? "Disable" : "Enable"} multi selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}> {/* Added key */}
              <div
                style={{ cursor: "pointer" }}
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>
                  {enableMultiSelection
                    ? multiple.indexOf(dataItem.id) !== -1
                      ? "-"
                      : "+"
                    : selected === dataItem.id
                    ? "-"
                    : "+"}
                </span>
              </div>
              {(selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1) && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No Data found!</div>
        )}
      </div>
    </div>
  );
}
