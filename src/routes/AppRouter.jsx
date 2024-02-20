import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LetterDetail from "../pages/LetterDetail";

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letters/:letterId" element={<LetterDetail />} />
    </Routes>
);

export default AppRouter;
