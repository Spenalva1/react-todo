import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const DARK_MODE_LOCAL_KEY = 'darkmode-local';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    localStorage.setItem(DARK_MODE_LOCAL_KEY, !darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const localDarkMode = localStorage.getItem(DARK_MODE_LOCAL_KEY);
    setDarkMode(localDarkMode);
  }, []);

  return (
    <LocalStateProvider value={{ darkMode, toggleDarkMode }}>
      {children}
    </LocalStateProvider>
  );
};

const useDarkMode = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { DarkModeProvider, useDarkMode };
