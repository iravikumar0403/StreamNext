import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import BottomNav from "./Components/BottomNav";
import Content from "./Components/Content";
import Header from "./Components/Header";
import theme from "./Components/theme";
import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Content />
          <BottomNav />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
