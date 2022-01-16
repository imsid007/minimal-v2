import { Grid, Button, Typography, TextField } from '@mui/material';
import React from 'react';

export default function JoinBeta() {
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: '30px auto',
        backgroundColor: '#6B76FF',
        borderRadius: '30px',
        position: 'relative',
      }}
    >
      <img
        src="./images/home/stars.svg"
        style={{ position: 'absolute', top: '20px', left: '150px' }}
      />
      <img
        src="./images/home/join-list-circle.svg"
        style={{ position: 'absolute', top: '0px', left: '0px' }}
      />
      <div
        style={{
          textAlign: 'center',

          justifyContent: 'center',
          padding: '50px',
          borderRadius: '20px',
        }}
      >
        <Typography variant="h3" sx={{ color: '#fff', mb: 6 }}>
          Join our closed beta
        </Typography>
        <div
          style={{
            display: 'flex',
            border: '2px solid #fff',
            maxWidth: '700px',
            margin: 'auto',
          }}
        >
          <input
            style={{
              width: '100%',
              backgroundColor: '#fff0',
              borderColor: '#fff0',
              fontSize: '20px',
              color: '#fff',
              padding: '0 20px',
            }}
          />
          <Button variant="contained" size="large" className="join-button">
            join waitlist
          </Button>
        </div>
      </div>
    </div>
  );
}
