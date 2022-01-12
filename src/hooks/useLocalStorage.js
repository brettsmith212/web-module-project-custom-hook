import { useState } from "react";

const useLocalStorage = (key, initValue) => {
  const setLocalStorage = () => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initValue));
      return initValue;
    }
  };

  const [value, setValue] = useState(setLocalStorage());

  const setStoredValue = (newVal) => {
    localStorage.setItem(key, JSON.stringify(newVal));
    setValue(newVal);
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
