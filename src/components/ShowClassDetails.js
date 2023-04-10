import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

function ShowClassDetails(props) {
  const [yoga_class, setClass] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/classes/${id}`)
      .then((res) => {
        setClass(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowClassDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/classes/${id}`)
      .then((res) => {
        navigate("/showClassList");
      })
      .catch((err) => {
        console.log("Error form ShowClassDetails_deleteClick");
      });
  };

  const ClassItem = (
    <div>
      <table className="table table-hover table-light">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Class Name</td>
            <td>{yoga_class.className}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Class Teacher</td>
            <td>{yoga_class.classTeacher}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Class ID</td>
            <td>{yoga_class.classId}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Class Date</td>
            <td>{yoga_class.class_date}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{yoga_class.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

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
        </ul>
      </nav>
      <div className="ShowClassDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/showClassList" className="btn btn-outline-warning float-left">
                Show Class List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Class's Record</h1>
              <p className="lead text-center">View Class's Info</p>
              <hr /> <br />
            </div>
            <div className="col-md-10 m-auto">{ClassItem}</div>
            <div className="col-md-6 m-auto">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg btn-block"
                onClick={() => {
                  onDeleteClick(yoga_class._id);
                }}
              >
                Delete Class
              </button>
            </div>
            <div className="col-md-6 m-auto">
              <Link
                to={`/edit-yoga_class/${yoga_class._id}`}
                className="btn btn-outline-info btn-lg btn-block"
              >
                Edit Class
              </Link>
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
}

export default ShowClassDetails;
