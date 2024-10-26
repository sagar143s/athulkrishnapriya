import React from 'react';
import { Grid, Button, Typography, Paper } from '@mui/material';
import './WeddingInvitation.css'; // Import the CSS file for custom styles
import Image from './image1.png'; // Your wedding image

const WeddingInvitation = () => {
  const weddingDetails = {
    bride: "Athul",
    groom: "Krishnapriya",
    date: "December 22, 2024",
    time: "11:00 AM TO 11:30 AM",
    venue: "Thrikkekkal Sree Subramanya Temple Valayanoor",
    rsvpUrl: 'https://maps.app.goo.gl/2fEMPqjbu7wibwe57',
    imageUrl: Image,
  };

  const buttonData = [
    { label: 'Home', url: 'https://maps.app.goo.gl/2fEMPqjbu7wibwe57', color: '#4CAF50' },
    { label: 'Venue', url: 'https://maps.app.goo.gl/XYsUC5eUtkGvha5W6', color: '#3F51B5' },
    { label: 'Contact', url: 'tel:+918281958206', color: '#FF5722' },
  ];

  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="wedding-invitation-container" style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
      <Paper elevation={5} className="wedding-invitation-paper" style={{ padding: '30px', borderRadius: '15px' }}>
        <div className="wedding-invitation-image-container">
          <img src={weddingDetails.imageUrl} alt="Wedding" className="wedding-invitation-image" />
        </div>
        <Typography variant="h5" className="wedding-invitation-title" style={{ marginTop: '20px', fontWeight: 'bold' }}>
          You're Invited!
        </Typography>
        <Typography variant="h4" className="wedding-invitation-names" style={{ margin: '15px 0', color: '#3f51b5' }}>
          {weddingDetails.bride} & {weddingDetails.groom}
        </Typography>
        <Typography variant="body1" className="wedding-invitation-details" style={{ marginBottom: '10px' }}>
          {weddingDetails.date} at {weddingDetails.time}
        </Typography>
        <Typography variant="body1" className="wedding-invitation-venue" style={{ marginBottom: '20px' }}>
          Venue: {weddingDetails.venue}
        </Typography>
        <Typography variant="body2" align="center" style={{ marginBottom: '10px',color:"grey" }}>
          For location details and contact, please select the buttons below:
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {buttonData.map((button, index) => (
            <Grid item xs={6} sm={4} md={4} key={index}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(button.url)}
                style={{
                  backgroundColor: button.color,
                  color: '#fff',
                  borderRadius: '25px',
                  padding: '10px',
                  fontSize: '13px',
                  transition: 'background-color 0.3s ease',
                }}
                className="wedding-invitation-button"
                onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
                onMouseOut={(e) => e.target.style.backgroundColor = button.color}
              >
                {button.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default WeddingInvitation;
