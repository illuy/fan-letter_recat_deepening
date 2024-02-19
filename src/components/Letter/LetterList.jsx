import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLetterContext } from "../../context/LetterContext";

const LetterList = ({ selectedTab }) => {
    const { letters } = useLetterContext();
    const filteredLetters = selectedTab
        ? letters.filter((letter) => letter.recipient === selectedTab)
        : letters;

    console.log("Filtered Letters:", filteredLetters);
    return (
        <ListWrap>
            <h2>팬레터 목록</h2>
            {filteredLetters.length === 0 ? (
                <p>아직 등록된 펜레터가 없습니다.</p>
            ) : (
                <ul>
                    {filteredLetters.map((letter, index) => (
                        <ListItem key={index}>
                            <Link to={`/letters/${letter.name}`}>
                                <ListItemImg />
                                <div>
                                    <ListItemNic>{letter.name}</ListItemNic>
                                    <ListItemTime>
                                        {letter.time.toLocaleString()}
                                    </ListItemTime>
                                    <ListItemCont>
                                        {letter.content}
                                    </ListItemCont>
                                </div>

                                {/* 시간 추가 */}
                            </Link>
                        </ListItem>
                    ))}
                </ul>
            )}
        </ListWrap>
    );
};

export default LetterList;

const ListWrap = styled.section`
    margin: 0 auto;
    width: 400px;
    & > h2 {
        text-align: center;
        margin-bottom: 1rem;
        color: #fff;
    }
    & > p {
        background-color: #151515cc;
        color: #ccc;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
    }
`;

const ListItem = styled.li`
    width: 100%;
    background-color: #6b6b6bcc;
    border-radius: 0.5rem;
    color: #ddd;
    padding: 0.5rem;
    margin-bottom: 1rem;
    & > a {
        display: flex;
    }
    & > a > div {
        width: calc(100% - 6rem);
    }
    & > a > div > p {
        margin-bottom: 0.5rem;
    }
`;
const ListItemImg = styled.span`
    display: block;
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    background-color: #ccc;
    margin-right: 1rem;
    overflow: hidden;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
        transform: translate(-50%, -80%);
        background-color: #212121;
    }
    &::after {
        content: "";
        position: absolute;
        bottom: 0%;
        left: 50%;
        width: 4rem;
        height: 4rem;
        border-radius: 4rem;
        transform: translate(-50%, 55%);
        background-color: #212121;
    }
`;
const ListItemNic = styled.p`
    color: #eee;
    font-size: 1.4rem;
`;
const ListItemTime = styled.p`
    font-size: 0.9rem;
`;
const ListItemCont = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
