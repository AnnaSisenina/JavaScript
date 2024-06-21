import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  const convertToCelcius = (event) => {
    const value = event.target.value;
    if (value === "-" || value === "") {
      setFahrenheit(value);
      setCelsius("");
    }
    else if (!isNaN(value)) {
      setFahrenheit(value);
      setCelsius(((value - 32) * 5) / 9);
    } else {
      setFahrenheit("");
      setCelsius("");
    }
  };

  const [fahrenheit, setFahrenheit] = useState("");

  const convertToFahrenheit = (event) => {
    const value = event.target.value;
    if (value === "-" || value === "") {
      setCelsius(value);
      setFahrenheit("");
    }
    else if (!isNaN(value)) {
      setCelsius(value);
      setFahrenheit((value * 9) / 5 + 32);
    } else {
      setFahrenheit("");
      setCelsius("");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "15ch" },
      }}
      noValidate
      autoComplete="off"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <TextField
        id="standard-basic"
        label="°C"
        variant="standard"
        value={celsius}
        onChange={convertToFahrenheit}
      />
      <TextField
        id="standard-basic"
        label="℉"
        variant="standard"
        value={fahrenheit}
        onInput={convertToCelcius}
      />
    </Box>
  );
}
