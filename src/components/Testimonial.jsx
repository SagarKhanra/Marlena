import React from 'react'
import home2 from "../asset/home2.jpg";
import "../styles/testimonial.css";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="container">
     
          <div className="content">
            <div className="text">
              <div className="heading">
                <h1>Hi, I'm Marlena</h1>
              </div>
              <p>I'm committed to helping you navigate the exceptionally personal and magical journey into parenthood!</p>
              <p>As you search for a doula, you need someone with experience, expertise, and compassion. No matter your background, I am here to support you.</p>
              <button>Learn More About Me</button>
            </div>
            <div className="image">
              <img src={home2} alt="Marlena Matheson" />
            </div>
          </div>
        </div>
        </div>
    
  );
}



export default Testimonial