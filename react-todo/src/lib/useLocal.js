import { useState } from "react"

const useLocal = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    console.log(item, key);
    return item ? JSON.parse(item) : initialValue
  });

  const setValue = (value) => {
    console.log(value);
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}

export default useLocal;