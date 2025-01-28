import React from "react";
import { motion } from "framer-motion"; 
import feedback1 from "../../assets/feedback-1.png";
import feedback2 from "../../assets/feedback-2.png";
import feedback3 from "../../assets/feedback-3.png";
import feedback4 from "../../assets/feedback-4.jpg";
import feedback5 from "../../assets/feedback-5.jpg";
import "./OurCustomerSay.css";

const feedbacks = [
  {
    image: feedback1,
    text: "“Great service and delicious food! Highly recommend.”",
  },
  {
    image: feedback2,
    text: "“Fast delivery and fresh meals. Will order again!”",
  },
  {
    image: feedback3,
    text: "“Amazing food! The delivery was quick, and everything was perfect.”",
  },
  {
    image: feedback4,
    text: "“Absolutely loved the food, it was exactly what I was craving!”",
  },
  {
    image: feedback5,
    text: "“Delicious meals, speedy delivery, and great customer service!”",
  },
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
    },
  },
};

const OurCustomerSay = () => {
  return (
    <div className="Our-customer">
      <h2 className="text-center hover:text-purple-900">What Our Customers Say</h2>
      <div className="customer">
        {feedbacks.map((feedback, index) => (
          <motion.div
            key={index}
            className="customer-card"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <img src={feedback.image} alt="feedback" className="feedback-image" />
            <p className="feedback-text">{feedback.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurCustomerSay;
