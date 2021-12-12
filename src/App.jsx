import "./App.css";
import PokeHome from "./views/PokeHome";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/system";
import { theme } from "./styles/palette";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <PokeHome />
      </ThemeProvider>
    </div>
  );
}

export default App;
