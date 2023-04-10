import React from "react";

const BookingCard = (props) => {
  const yoga_bookings = props.yoga_class;

  return (
    <tr>
      <td>{yoga_bookings.name}</td>
      <td>{yoga_bookings.email}</td>
      <td>{yoga_bookings.phoneNumber}</td>
      <td>{yoga_bookings.classTeacher}</td>
      <td>{yoga_bookings.class_booked}</td>
    </tr>
  );
};

export default BookingCard;
