import React, { useState, useContext, createContext } from "react";

const LetterContext = createContext();

export const LetterProvider = ({ children }) => {
    const [letters, setLetters] = useState([]);
    const [selectedTab, setSelectedTab] = useState("Karina");

    const addLetter = (newLetter) => {
        setLetters([...letters, newLetter]);
        setSelectedTab(newLetter.recipient); // 편지를 추가할 때, selectedTab 업데이트
    };

    const updateLetter = (name, content) => {
        // 특정 편지를 업데이트하는 로직을 추가하세요.
        // name에 해당하는 편지를 찾아서 내용을 content로 업데이트합니다.
        setLetters((prevLetters) =>
            prevLetters.map((letter) =>
                letter.name === name ? { ...letter, content } : letter
            )
        );
    };

    const deleteLetter = (name) => {
        // 특정 편지를 삭제하는 로직을 추가하세요.
        // name에 해당하는 편지를 필터링하여 삭제합니다.
        setLetters((prevLetters) =>
            prevLetters.filter((letter) => letter.name !== name)
        );
    };

    return (
        <LetterContext.Provider
            value={{
                letters,
                selectedTab,
                addLetter,
                updateLetter,
                deleteLetter,
                setSelectedTab,
            }}
        >
            {children}
        </LetterContext.Provider>
    );
};

export const useLetterContext = () => {
    const context = useContext(LetterContext);
    if (!context) {
        throw new Error(
            "useLetterContext must be used within a LetterProvider"
        );
    }
    return context;
};
