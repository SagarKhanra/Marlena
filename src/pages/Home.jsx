import React from 'react'
import Testimonial from '../components/Testimonial';



const Home = () => {
  return (
    <div><section className="hero-section">
    <div className="hero-text">
      <h1>Get Support Before, During, and After Your Pregnancy Journey</h1>
      <p>Birth Doula in Seattle, Washington.</p>
      <a href="#free-consultation" className="consultation-button">Book a Free Consultation</a>
    </div>
  </section>
  <div>
  <section className="hero">        
          <div className="hero-content">
            <h2>When you are pregnant, you feel vulnerable,</h2>
            <h2>nervous, and sometimes even uneasy-about the journey ahead of you.</h2>
            <p>Luckily there is support at your fingertips. A birth doula is an extension to your growing family. It's not a decision to take lightly. During a vulnerable time, you want to choose someone you can trust and who makes you feel at ease.</p>
          </div>
        </section>
  
  </div>

  <Testimonial/>
  
  </div>
  )
}

export default Home