import React, { useState } from 'react';


function App() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    
  };

  return (
    <div className="App">
     
      <main className="App-main">
        <section className="Contact-section">
          <h2>Contact</h2>
          
          </section>
          <div className="paragraph">
          <p>Do you have questions? Would you like to schedule a free consultation?
            
          </p>
          <p>Start by completing the form below:</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='input-area'>
              <div>
              <input 
                type="text" 
                id="firstName" 
                placeholder="Firstname"
                name="FirstName"
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                required 
              />
            </div>
            <div>
              
              <input 
                type="email" 
                id="email" 
                placeholder="Email"
                name="Email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                
              />
            </div>
            <div>
              
              <textarea 
                id="comment" 
                placeholder="Comment"
                name="Comment"
                value={comment} 
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            </div>
            <button type="submit">Send Message</button>
          </form>
        
      </main>
      
    </div>
  );
}

export default App;