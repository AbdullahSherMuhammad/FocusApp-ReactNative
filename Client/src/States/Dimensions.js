import {
  createContext,
  useState,
  useContext,
  useEffect,
  Children,
} from "react";
import { Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

const DimensionsContext = createContext();

const DimensionsProvider = ({ Children }) => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });
  const windowsHeight = dimensions.window.height;
  const windowWidth = dimensions.window.width;

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
  });
  return (
    <DimensionsContext.Provider value={[dimensions, setDimensions]}>
      {Children}
    </DimensionsContext.Provider>
  );
};

const useDimens = () => useContext(DimensionsContext);

export { useDimens, DimensionsProvider };
