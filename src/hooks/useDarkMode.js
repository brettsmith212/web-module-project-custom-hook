import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initVal) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initVal);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
