import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ClassCard = (props) => {
  const yoga_class = props.yoga_class;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'
        
        alt='Classs'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-yoga_class/${yoga_class._id}`}>{yoga_class.className}</Link>
        </h2>
        <h3>{yoga_class.classTeacher}</h3>
        <p>{yoga_class.description}</p>
      </div>
    </div>
  );
};

export default ClassCard;
