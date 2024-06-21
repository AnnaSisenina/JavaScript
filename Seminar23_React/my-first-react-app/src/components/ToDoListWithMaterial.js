import React, { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import BasicCard from "./BasicCard";


export default function ToDoListWithMaterial() {
  const [list, setList] = useState([]);

  const [task, setTask] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    if (!task.trim()) return;
    else {
      setList([...list, task]);
      setTask("");
    }
  };

  const updateTask = (event) => {
    setTask(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={8}>
          <FormControl fullWidth sx={{ m: 5 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Task</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
              label="Task"
              type="text"
              value={task}
              onChange={updateTask}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={addTask} fullWidth sx={{ m: 5, fontSize: '0.675rem'}}>
            Добавить
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {list.map((element, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <BasicCard 
          number = {index + 1}
          task = {element}/>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}
