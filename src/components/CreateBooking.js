import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CreateClass = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [yoga_bookings, setClass] = useState({
    name: "",
    email: "",
    classTeacher: "",
    phoneNumber: "",
    class_date: "",
    class_booked: ""
  });

  const onChange = (e) => {
    setClass({ ...yoga_bookings, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8082/api/book", yoga_bookings)
      .then((res) => {
        console.log(res.data);
        setClass({
          name: "",
          email: "",
          classTeacher: "",
          phoneNumber: "",
          class_date: "",
          class_booked: "",
        });
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
              <h1 className="display-4 text-center">Create Booking</h1>
              <p className="lead text-center">Create a new class booking</p>

              <form noValidate onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name of the Attendee"
                    name="name"
                    className="form-control"
                    value={yoga_bookings.name}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    className="form-control"
                    value={yoga_bookings.email}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Who will be teaching this class"
                    name="classTeacher"
                    className="form-control"
                    value={yoga_bookings.classTeacher}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone number."
                    name="phoneNumber"
                    className="form-control"
                    value={yoga_bookings.phoneNumber}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Class booked."
                    name="class_booked"
                    className="form-control"
                    value={yoga_bookings.class_booked}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    placeholder="When will the class be held"
                    name="class_date"
                    className="form-control"
                    value={yoga_bookings.class_date}
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
