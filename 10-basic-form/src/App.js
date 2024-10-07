import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false); // Control if form was submitted
  const [valid, setValid] = useState(false); // Control if form data is valid

  // Update first name
  const handleFirstName = (e) => {
    setValues({
      ...values,
      firstName: e.target.value,
    });
  };

  // Update last name
  const handleLastName = (e) => {
    setValues({
      ...values,
      lastName: e.target.value,
    });
  };

  // Update email
  const handleEmail = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true); // Only set valid to true if all fields are filled
    }
    setSubmitted(true); // Mark form as submitted
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering.
          </div>
        ) : null}

        {/* First Name Field */}
        <input
          onChange={handleFirstName}
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}

        {/* Last Name Field */}
        <input
          onChange={handleLastName}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}

        {/* Email Field */}
        <input
          onChange={handleEmail}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}

        {/* Submit Button */}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
