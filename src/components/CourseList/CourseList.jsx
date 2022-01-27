import React from "react";
import Course from "../Course/Course";
import "./CourseList.scss";

const CourseList = (props) => { 
  return (
    <>
      <h2 className="courseList__heading">
        All the courses available in DCU...
      </h2>
      <div className="courseList__container">
        {props.courses &&
          props.courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
      </div>
    </>
  );
};

export default CourseList;
