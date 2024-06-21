import "./App.css";
import Greetings from "./components/Greetings";
import TemperatureConverter from "./components/TemperatureConverter";
import Timer from "./components/Timer";
import Message from "./components/message";
import ToDoList from "./components/ToDoList";
import { Grid, Box } from "@mui/material";
import ToDoListWithMaterial from "./components/ToDoListWithMaterial";
function App() {
  return (
    <div className="App" >
      <Timer />
      <TemperatureConverter />
      <Greetings />
      

      <Grid container spacing={2} sx={{marginTop: 2 }}>
          <Grid item xs={8}>
          <Message
            name="John"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Message
            name="Nick"
            text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          </Grid>
          <Grid item xs={4}>
            <ToDoListWithMaterial />
          </Grid>
          
      </Grid>
    </div>
  );
}

export default App;
