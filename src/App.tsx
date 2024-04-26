import "./App.css";
import Layout from "./components/Layout";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./utils/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    );
}

export default App;
