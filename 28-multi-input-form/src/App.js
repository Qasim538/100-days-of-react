import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [valid, setValid] = useState(false)

  const [submitted, setSubmitted] = useState(false);

  const handleFirstName = (e) => {
    setValue({ ...value, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setValue({ ...value, lastName: e.target.value });
  };
  const handleEmail = (e) => {
    setValue({ ...value, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value.firstName && value.lastName && value.email){
      setValid(true)
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          value={value.firstName}
          onChange={handleFirstName}
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !valid ?  (
          <span>Please Enter First Name</span>
        ) : null}

        <input
          value={value.lastName}
          onChange={handleLastName}
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !valid ? (
          <span>Please Enter Last Name</span>
        ) : null}

        <input
          value={value.email}
          onChange={handleEmail}
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !valid ? (
          <span>Please Enter Email</span>
        ) : null}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
