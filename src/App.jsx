import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./shared/GlobalStyle";
import Header from "./components/Header";
import Menu from "./components/Menu";
import LetterForm from "./components/Letter/LetterForm";
import LetterList from "./components/Letter/LetterList";
import LetterDetail from "./components/Letter/LetterDetail"; // 새로운 컴포넌트 추가
import { LetterProvider, useLetterContext } from "./context/LetterContext";

function AppWithProvider() {
    return (
        <LetterProvider>
            <App />
        </LetterProvider>
    );
}

function App() {
    const {
        setSelectedTab,
        addLetter,
        letters,
        selectedTab,
        updateLetter,
        deleteLetter,
    } = useLetterContext(); // 컨텍스트에서 값들 가져오기

    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Menu setSelectedTab={setSelectedTab} />
                            <LetterForm addLetter={addLetter} />
                            <LetterList
                                letters={letters}
                                selectedTab={selectedTab}
                            />
                        </>
                    }
                />
                <Route
                    path="/letters/:letterId"
                    element={
                        <LetterDetail
                            letters={letters}
                            updateLetter={updateLetter}
                            deleteLetter={deleteLetter}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default AppWithProvider;
