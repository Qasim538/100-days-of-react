import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import {v4 as uuidv4} from 'uuid'


const AddExpenseForm = () => {
  
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if cost is a valid number
    const parsedCost = parseFloat(cost);
    if (isNaN(parsedCost) || parsedCost <= 0) {
      setError("Please enter a valid cost.");
      return;
    }

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parsedCost,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    // Reset form fields after submission
    setName("");
    setCost("");
    setError("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control"
            required="required"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
      </div>

      {/* Display error message */}
      {error && (
        <div className="row mt-2">
          <div className="col-sm text-danger">
            {error}
          </div>
        </div>
      )}

      {/* Place the button in a new row */}
      <div className="row mt-3">
        <div className="col-sm text-left">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
