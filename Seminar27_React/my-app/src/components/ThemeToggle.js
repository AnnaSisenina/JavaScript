import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions/actions";
import styled from "styled-components";

const ThemeToggleContainer = styled.div`
  background-color: ${(props) => (props.theme === "dark" ? "#333" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#333")};
  padding: 1rem;
`;

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeToggleContainer theme={theme}>
      <div>
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleToggleTheme}
          />
          Dark Theme
        </label>
      </div>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;
