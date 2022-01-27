import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [course, setCourse] = useState({
    courseName: "",
    locations: "",
    price: "",
    summary: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div className="Form-container">
    <div className="Form">
      <h2 className="Form__title">Add A New Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="Form__input"
          type="text"
          placeholder="New Course name"
          required
          onInput={(e) => setCourse({ ...course, courseName: e.target.value })}
        />
        <input
          className="Form__input"
          type="text"
          placeholder="Locations"
          required
          onInput={(e) => setCourse({ ...course, locations: e.target.value })}
        />
        <input
          className="Form__input"
          type="text"
          placeholder="Price"
          required
          onInput={(e) => setCourse({ ...course, price: e.target.value })}
        />
        <input
          className="Form__input"
          type="text"
          placeholder="Summary"
          required
          onInput={(e) => setCourse({ ...course, summary: e.target.value })}
        />
        <button type="submit" className="Form-btn">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Form;
