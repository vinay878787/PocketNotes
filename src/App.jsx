import Home from "./components/Home";
import "./index.css"
import { IndexContextProvider } from "./store/IndexContext";
function App() {
  return (
  <>
  <IndexContextProvider>
  <Home/>
  </IndexContextProvider>
  </>
  )
}

export default App;
