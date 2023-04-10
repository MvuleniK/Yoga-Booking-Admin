import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function UpdateClassInfo(props) {
  const [yoga_class, setClass] = useState({
    className: "",
    classId: "",
    classTeacher: "",
    description: "",
    class_date: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/classes/${id}`)
      .then((res) => {
        setClass({
          className: res.data.className,
          classId: res.data.classId,
          classTeacher: res.data.classTeacher,
          description: res.data.description,
          class_date: res.data.class_date,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateClassInfo");
      });
  }, [id]);

  const onChange = (e) => {
    setClass({ ...yoga_class, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      className: yoga_class.className,
      classId: yoga_class.classId,
      classTeacher: yoga_class.classTeacher,
      description: yoga_class.description,
      class_date: yoga_class.class_date,
    };

    axios
      .put(`http://localhost:8082/api/classes/${id}`, data)
      .then((res) => {
        navigate(`/show-yoga_class/${id}`);
      })
      .catch((err) => {
        console.log("Error in UpdateClassInfo!");
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
        </ul>
      </nav>
      <div className="UpdateClassInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/showClassList" className="btn btn-outline-warning float-left">
                Show Class List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Class</h1>
              <p className="lead text-center">Update Class's Info</p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="className">Class Name</label>
                <input
                  type="text"
                  placeholder="Class Name of the Class"
                  name="className"
                  className="form-control"
                  value={yoga_class.className}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="classId">Class ID</label>
                <input
                  type="text"
                  placeholder="Class ID"
                  name="classId"
                  className="form-control"
                  value={yoga_class.classId}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="classTeacher">Class Teacher</label>
                <input
                  type="text"
                  placeholder="Class Teacher"
                  name="classTeacher"
                  className="form-control"
                  value={yoga_class.classTeacher}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  placeholder="Description of the Class"
                  name="description"
                  className="form-control"
                  value={yoga_class.description}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="class_date">Class Date</label>
                <input
                  type="text"
                  placeholder="Class Date"
                  name="class_date"
                  className="form-control"
                  value={yoga_class.class_date}
                  onChange={onChange}
                />
              </div>
              <br />

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Class
              </button>
            </form>
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

export default UpdateClassInfo;
