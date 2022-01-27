import React from "react";
import "./Course.scss";

const Course = (props) => {
  const {id, courseName, locations, price, summary } = props.course;

  return (
    <div className="course">
      <h3 className="course__name"> {courseName}</h3>
      <h4 className="course__id">ID: {id}</h4>
      <div>
        <label className="course__label">Locations available:</label>
        <p className="course__details"> {locations}</p>
        <label className="course__label">Course Price:</label>
        <p className="course__details"> £{price}</p>
        <label className="course__label">Summary:</label>
        <p className="course__details"> {summary}</p>
      </div>
    </div>
  );
};

export default Course;
