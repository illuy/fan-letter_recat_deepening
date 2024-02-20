import React from "react";
import { LetterProvider } from "./context/LetterContext";
import AppRouter from "./routes/AppRouter";
import GlobalStyle from "./shared/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
    <Router>
        <LetterProvider>
            <GlobalStyle />
            <AppRouter />
        </LetterProvider>
    </Router>
);

export default App;
