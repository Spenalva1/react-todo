import { createGlobalStyle } from "styled-components";
import { useDarkMode } from "./lib/darkModeContext";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    box-sizing: inherit;
    margin: 0;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.8rem;
    line-height: 2;
    font-family: 'Josefin Sans', sans-serif;
    background: ${({ darkMode }) => darkMode ? 'hsl(235, 21%, 11%)' : 'hsl(0, 0%, 98%)'};
    min-height: 100vh;
  }
  button {
    font-family: 'Josefin Sans', sans-serif;
    cursor: pointer;
  }
`;

export const Global = () => {
  const { darkMode } = useDarkMode();
  return <GlobalStyles darkMode={darkMode} />;
};

