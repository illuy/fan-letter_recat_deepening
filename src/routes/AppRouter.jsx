import React from "react";
import { Route, Routes } from "react-router-dom";
import { LetterProvider, useLetterContext } from "../context/LetterContext";
import Home from "../pages/Home";
import LetterDetail from "../pages/LetterDetail";

const AppRouter = () => {
    const { letters, updateLetter, deleteLetter } = useLetterContext();
    return (
        <LetterProvider>
            <Routes>
                <Route path="/" element={<Home />} />

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
        </LetterProvider>
    );
};

export default AppRouter;
