import { createContext, useState, useContext, useEffect } from "react";
import { Appearance, Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [globstyles, setGlobStyles] = useState("");
  const [mode, setMode] = useState(Appearance.getColorScheme());
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const appearanceSubscription = Appearance.addChangeListener(
      ({ colorScheme }) => {
        setMode(colorScheme);
      }
    );
    return () => appearanceSubscription.remove();
  }, []);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
  });
  return (
    <GlobalContext.Provider value={[mode, dimensions, setMode, setDimensions]}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => useContext(GlobalContext);

export { useGlobal, GlobalProvider };
