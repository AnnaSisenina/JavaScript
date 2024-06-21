import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState(0);

    const convertToCelcius = (event) => {
        const value = parseFloat(event.target.value);
        setFahrenheit(value);
        setCelsius((value - 32) * 5 / 9);
    }

    const [fahrenheit, setFahrenheit] = useState(32);

    const convertToFahrenheit = (event) => {
        const value = parseFloat(event.target.value);
        setCelsius(value);
        setFahrenheit((value * 9 / 5) + 32);
    }

  return (
    <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
      style={{display:"flex", justifyContent: "flex-end"}}
    >
      <TextField id="standard-basic" label="°C" variant="standard" value={celsius} type="number" onChange={convertToFahrenheit} />
      <TextField id="standard-basic" label="℉" variant="standard" value={fahrenheit} type="number" onChange={convertToCelcius}/>
    </Box>
  );
}