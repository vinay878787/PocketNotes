import { createContext ,useState} from "react";

export const IndexContext = createContext();

export const IndexContextProvider = ({ children }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <IndexContext.Provider value={{ clickedIndex, setClickedIndex }}>
      {children}
    </IndexContext.Provider>
  );
};
