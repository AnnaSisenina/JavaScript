import "./App.css";
import Greetings from "./components/Greetings";
import TemperatureConverter from "./components/TemperatureConverter";
import Timer from "./components/Timer";
import Message from "./components/message";
import { Grid, Box } from "@mui/material";
import ToDoListWithMaterial from "./components/ToDoListWithMaterial";
import BorderBox from "./components/BorderBox";
import List from "./components/List";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/About";



function App() {
  const listItems = [
    "Первый элемент",
    "Второй элемент",
    "Третий элемент",
    "Четвертый элемент",
    "Пятый элемент",
  ];
  const renderItem = (item, index) => {
    const style = { color: index % 2 === 0 ? "grey" : "black" };
    return <div style={style}>{item}</div>;
  };
  return (

<div className="App">
      <Timer />
      <TemperatureConverter />
      <Greetings />
      
      <BrowserRouter>
      <div>
      <h3>Главная страница</h3>
      <nav>
        <Link to="/about">О нас</Link>
      </nav>
    </div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
      
      <BorderBox>
        <List listItems={listItems} renderItem={renderItem} />
      </BorderBox>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
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
