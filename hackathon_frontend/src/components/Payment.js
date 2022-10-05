import React, { useState } from "react";
import axios from "axios";

const Payment = () => {
  const [event, setEvent] = useState({
    name: "Music",
    organizer: "John Green",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBldmVudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    price: 500,
  });
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_3Xp6ibi4KCOUo9",

      name: event.name,
      description: "Test Transaction",
      image: event.img,
    //   order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:3000/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:3000/orders";
      const { data } = await axios.post(orderUrl, { amount: event.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="book_container">
        <img src={event.img} alt="book_img" className="book_img" />
        <p className="book_name">{event.name}</p>
        <p className="book_author">By {event.author}</p>
        <p className="book_price">
          Price : <span>&#x20B9; {event.price}</span>
        </p>
        <button onClick={handlePayment} className="buy_btn">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
