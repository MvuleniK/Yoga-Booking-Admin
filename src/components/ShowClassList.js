import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ClassCard from "./ClassCard";

function ShowClassList() {
  const [yoga_classs, setClasss] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/classes")
      .then((res) => {
        setClasss(res.data);
        // console.log(res.data);
        // console.log(yoga_classs);
      })
      .catch((err) => {
        console.log("Error from ShowClassList");
      });
    console.log(yoga_classs);
    console.log(yoga_classs.length);
  }, []);

  const yoga_classList =
    yoga_classs.length === 0
      ? 'There are no yoga classes to display. Click on the "Add New Class" button to make one'
      : yoga_classs.map((yoga_class, k) => (
          <ClassCard yoga_class={yoga_class} key={k} />
        ));

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
          {/* <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/teachers">Teachers</a>
                </li>
                <li>
                  <a href="/classes">Classes</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li> */}
        </ul>
      </nav>
      <div className="ShowClassList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Classs List</h2>
            </div>

            <div className="col-md-11">
              <Link
                to="/createClass"
                className="btn btn-outline-warning float-right"
              >
                + Add New Class
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className="list">{yoga_classList}</div>
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
}

export default ShowClassList;
