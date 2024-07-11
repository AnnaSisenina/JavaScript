import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <Provider store={store}>
      <ThemeToggle />
    </Provider>
  );
}

export default App;
