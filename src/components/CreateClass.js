import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CreateClass = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [yoga_class, setClass] = useState({
    className: "",
    classId: "",
    classTeacher: "",
    description: "",
    class_date: "",
    publisher: "",
  });

  const onChange = (e) => {
    setClass({ ...yoga_class, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8082/api/classes", yoga_class)
      .then((res) => {
        setClass({
          className: "",
          classId: "",
          classTeacher: "",
          description: "",
          class_date: "",
        });

        // Push to /
        navigate("/showClassList");
      })
      .catch((err) => {
        console.log("Error in CreateClass!");
      });
  };

  return (
    <div className="HomeScreen">
      <div className="banner">
        <h1>Welcome to our Yoga Studio</h1>
        <p>Find peace and harmony through the practice of yoga</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/showClassList">Class List</a>
          </li>
          <li>
            <a href="/showBookings">Bookings List</a>
          </li>
        </ul>
      </nav>
      <div className="CreateClass">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto">
              <h1 className="display-4 text-center">Create a New Class</h1>
              <p className="lead text-center">Create new Yoga Class</p>

              <form noValidate onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name of the Class"
                    name="className"
                    className="form-control"
                    value={yoga_class.className}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Class ID"
                    name="classId"
                    className="form-control"
                    value={yoga_class.classId}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Who will be teaching this class"
                    name="classTeacher"
                    className="form-control"
                    value={yoga_class.classTeacher}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Describe what will happen in this yoga class."
                    name="description"
                    className="form-control"
                    value={yoga_class.description}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    placeholder="When will this class occur."
                    name="class_date"
                    className="form-control"
                    value={yoga_class.class_date}
                    onChange={onChange}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="social-media">
          <a href="https://www.facebook.com/yogastudio">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/yogastudio">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.twitter.com/yogastudio">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
        <div className="contact-details">
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Main St, Anytown USA
          </p>
          <p>
            <i className="fas fa-phone"></i> (555) 555-5555
          </p>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <a href="mailto:info@yogastudio.com">info@yogastudio.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CreateClass;
