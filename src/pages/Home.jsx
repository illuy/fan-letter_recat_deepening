import React from "react";
import Header from "../components/Header";
import LetterForm from "../components/Letter/LetterForm";
import LetterList from "../components/Letter/LetterList";
import Menu from "../components/Menu";
import { useLetterContext } from "../context/LetterContext";

const Home = () => {
    const {
        setSelectedTab,
        addLetter,
        letters,
        selectedTab,
        updateLetter,
        deleteLetter,
    } = useLetterContext();

    return (
        <>
            <Header />
            <Menu setSelectedTab={setSelectedTab} />
            <LetterForm addLetter={addLetter} />
            <LetterList letters={letters} selectedTab={selectedTab} />
        </>
    );
};

export default Home;
