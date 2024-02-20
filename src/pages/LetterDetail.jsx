// LetterDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LetterDetail = ({ letters, updateLetter, deleteLetter }) => {
    const { letterId } = useParams();
    const navigate = useNavigate();

    const [editing, setEditing] = useState(false);
    const [editedContent, setEditedContent] = useState("");

    useEffect(() => {
        // letterId에 해당하는 편지를 찾아서 editedContent에 설정합니다.
        console.log("Letter ID:", letterId);
        if (letters && letters.length > 0) {
            const selectedLetter = letters.find(
                (letter) => letter.name === letterId
            );

            if (selectedLetter) {
                setEditedContent(selectedLetter.content);
            }
        }
    }, [letters, letterId]);

    if (!letters || (Array.isArray(letters) && letters.length === 0)) {
        return <div>Loading...</div>;
    }
    const selectedLetter = letters.find((letter) => letter.name === letterId);

    if (!selectedLetter) {
        return <div>편지를 찾을 수 없습니다.</div>;
    }

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        updateLetter(selectedLetter.name, editedContent);
        setEditing(false);
    };

    const handleDelete = () => {
        deleteLetter(selectedLetter.name);
        navigate("/");
    };

    return (
        <DetailSection>
            <DetailSectionCont>
                <DetailSectionContHeader>
                    <ListItemImg />
                    <h2>{selectedLetter.name}</h2>
                    <p>{selectedLetter.time.toLocaleString()}</p>
                </DetailSectionContHeader>
                <DetailSectionContTo>
                    To : {selectedLetter.recipient}
                </DetailSectionContTo>
                {editing ? (
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                    />
                ) : (
                    <DetailSectionContContent>
                        {selectedLetter.content}
                    </DetailSectionContContent>
                )}

                {/* 작성 시간 추가 */}
                <DetailSectionBtnWrap>
                    {editing ? (
                        <DetailSectionBtn onClick={handleSave}>
                            저장
                        </DetailSectionBtn>
                    ) : (
                        <DetailSectionBtn onClick={handleEdit}>
                            수정
                        </DetailSectionBtn>
                    )}
                    <DetailSectionBtn onClick={handleDelete}>
                        삭제
                    </DetailSectionBtn>
                </DetailSectionBtnWrap>
            </DetailSectionCont>
            <Link to="/">홈으로 돌아가기</Link>
        </DetailSection>
    );
};

export default LetterDetail;

const DetailSection = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
    color: #fff;
    background-color: #111111cc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > a {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background-color: #eee;
        color: #212121;
        padding: 0.5rem;
        border-radius: 1rem;
    }
`;
const DetailSectionCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    border-radius: 1rem;
    padding: 1rem;
    background-color: #eee;
    color: #151515;
`;

const DetailSectionContHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    & > h2 {
        font-size: 1.2rem;
    }

    & > p {
        margin-left: auto;
        font-size: 0.9rem;
    }
`;

const ListItemImg = styled.span`
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    background-color: #ccc;
    margin-right: 1rem;
    overflow: hidden;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 1.2rem;
        transform: translate(-50%, -80%);
        background-color: #151515;
    }
    &::after {
        content: "";
        position: absolute;
        bottom: 0%;
        left: 50%;
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        transform: translate(-50%, 65%);
        background-color: #151515;
    }
`;
const DetailSectionContTo = styled.p`
    margin-bottom: 0.5rem;
`;
const DetailSectionContContent = styled.p`
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 0.8rem;
    background-color: #151515;
    color: #ddd;
    line-height: 1.8rem;
`;
const DetailSectionBtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const DetailSectionBtn = styled.button`
    &:nth-child(1) {
        margin-right: 0.5rem;
    }
`;
