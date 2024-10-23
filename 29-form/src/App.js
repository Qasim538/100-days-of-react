import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");
  const [success, setSuccess] = useState(false); // Success message state
  const [errors, setErrors] = useState({}); // Error state for validations

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Validate first name
    if (!firstName) {
      validationErrors.firstName = "Please enter your first name";
    }

    // Validate email
    if (!email.includes("@")) {
      validationErrors.email = "Please enter a valid email address";
    }

    // Validate resume upload
    if (!resume) {
      validationErrors.resume = "Please upload a resume";
    }

    // If there are any validation errors, set the errors state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear any existing errors
    setErrors({});

    // Log form data
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );

    // Display the success message
    setSuccess(true);

    // Show alert when form is submitted
    alert("You have successfully submitted the form!");

    // Reset form after submission
    handleReset();
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
    setSuccess(false); // Hide success message on reset
    document.getElementById("file").value = null; // Clear the file input
    setErrors({}); // Clear errors on reset
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React Form</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          {/* Success Message */}
          {success && (
            <div className="alert alert-success" role="alert">
              Form submitted successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstname">First Name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter First Name"
                  required
                />
                {/* Display error message for first name */}
                {errors.firstName && (
                  <p className="text-danger">{errors.firstName}</p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastname">Last Name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter Last Name"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
              {/* Display error message for email */}
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="contact">Contact*</label>
              <input
                type="tel"
                className="form-control"
                name="contact"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter Mobile Number"
                required
              />
            </div>

            <div className="mb-3">
              <label>Gender*</label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value="male"
                    id="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="male" className="form-check-label">
                    Male
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value="female"
                    id="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="female" className="form-check-label">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value="other"
                    id="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="other" className="form-check-label">
                    Other
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label>Your Best Subject</label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="english"
                    id="english"
                    checked={subjects.english}
                    onChange={() => handleSubjectChange("english")}
                  />
                  <label htmlFor="english" className="form-check-label">
                    English
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="maths"
                    id="maths"
                    checked={subjects.maths}
                    onChange={() => handleSubjectChange("maths")}
                  />
                  <label htmlFor="maths" className="form-check-label">
                    Maths
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="physics"
                    id="physics"
                    checked={subjects.physics}
                    onChange={() => handleSubjectChange("physics")}
                  />
                  <label htmlFor="physics" className="form-check-label">
                    Physics
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="file">Upload Resume*</label>
              <input
                type="file"
                className="form-control"
                name="file"
                id="file"
                onChange={(e) => setResume(e.target.files[0])}
                required
              />
              {/* Display error message for resume */}
              {errors.resume && <p className="text-danger">{errors.resume}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="url">Portfolio URL*</label>
              <input
                type="url"
                className="form-control"
                name="url"
                id="url"
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="select">Your Expertise</label>
              <select
                className="form-select"
                name="select"
                id="select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="" disabled>
                  Select your answer
                </option>
                <optgroup label="Beginners">
                  <option value="1">HTML</option>
                  <option value="2">CSS</option>
                  <option value="3">JavaScript</option>
                </optgroup>
                <optgroup label="Advanced">
                  <option value="4">React</option>
                  <option value="5">Node</option>
                  <option value="6">Express</option>
                  <option value="7">MongoDB</option>
                </optgroup>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="about">About</label>
              <textarea
                className="form-control"
                name="about"
                id="about"
                cols="30"
                rows="5"
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Tell us about yourself"
                required
              ></textarea>
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="reset"
                className="btn btn-secondary"
                onClick={handleReset}
              >
                Reset
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
