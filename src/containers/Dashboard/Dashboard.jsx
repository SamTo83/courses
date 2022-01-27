import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import CourseList from "../../components/CourseList/CourseList";
import Form from "../../components/Form/Form";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  
    const getCourses = () => {
      fetch("http://localhost:8080/courses/")
        .then((res) => res.json())
        .then((json) => setCourses(json))
        .catch((err) => console.log(err));
    };
    useEffect(() => {
    getCourses();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList courses={courses} />} />
        <Route path="/course" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
