import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Name..."
          name="fullName"
          onChange={handleEditFormChange}
          value={editFormData.fullName}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Address..."
          name="address"
          onChange={handleEditFormChange}
          value={editFormData.address}

        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Phone Number..."
          name="phoneNumber"
          onChange={handleEditFormChange}
          value={editFormData.phoneNumber}

        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an Email..."
          name="email"
          onChange={handleEditFormChange}
          value={editFormData.Email}

        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
