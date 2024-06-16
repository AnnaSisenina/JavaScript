import './App.css';
import CurrentTime from './components/CurrentTime';
import Greetings from './components/Greetings';
import Message from './components/message';


function App() {
  return (
    <div className="App">
      <CurrentTime />
      <Greetings />
      <Message 
        name="John"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Message 
        name="Nick"
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
    </div>
  );
}

export default App;
