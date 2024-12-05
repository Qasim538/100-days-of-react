import "./App.css";
import Navbar from "./Components/Navbar";
import Booklist from "./Components/Booklist";
import ThemeContextProvider from "./Contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
