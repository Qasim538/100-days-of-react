import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary mr-3">
          £{props.cost.toFixed(2)}
        </span>
        <TiDelete
          onClick={handleDeleteExpense}
          size="1.5em"
          style={{ cursor: "pointer" }}
          aria-label={`Delete ${props.name}`}
        />
      </div>
    </li>
  );
};

export default ExpenseItem;
