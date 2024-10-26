import React from 'react';
import { Grid, Button } from '@mui/material';
import './App.css';
import WeddingInvitation from './WeddingInvitation'; 
import Time from '../src/time'


function App() {
  // Sample button data with labels and URLs
 
  return (
    <div className="App">
      <Time/>
       <WeddingInvitation />
   
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.7908748897553!2d75.9156987!3d11.2767775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba643007f2d1067%3A0xa67331dc374b22c6!2sAthuls%20paradise!5e0!3m2!1sen!2sae!4v1729948589985!5m2!1sen!2sae"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
