import React, { useState } from 'react';
import axios from 'axios';

function Hero() {
  const [formData, setFormData] = useState({
    textbox1: '',
    textbox2: '',
    textbox3: ''
  });

  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };//handles change in either textbox

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents page reload

    try {
      const res = await axios.post('http://localhost:5000/api/submit', formData);
      //http://localhost:5000/api/submit' on this location post request will be handled
      // this code will be written in app.js file 
      //form data will be on json format so JSON.stringify(data) to get in normal format


      //use axios everywher guys

      //axios used instead of fetch to post apo request for better syntax simplicity
      setResponse(res.data.message);
    } catch (err) {
      console.error(err);
      setResponse('Error submitting form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div>
        <input
          type="text"
          name="textbox1"
          value={formData.textbox1}
          onChange={handleChange}
          placeholder="Textbox 1"
        />
      </div>

      <div>
        <input
          type="text"
          name="textbox2"
          value={formData.textbox2}
          onChange={handleChange}
          placeholder="Textbox 2"
        />
      </div>

      <div>
        <input
          type="text"
          name="textbox3"
          value={formData.textbox3}
          onChange={handleChange}
          placeholder="Textbox 3"
        />
      </div>

      <button type="submit">Submit All</button>

      {response && <p className="text-green-600">{response}</p>}
    </form>
  );
}

export default Hero;
