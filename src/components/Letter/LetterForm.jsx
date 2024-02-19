import React, { useState } from "react";
import styled from "styled-components";

const LetterForm = ({ addLetter }) => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [recipient, setRecipient] = useState("Select recipient"); // 초기값을 'Select recipient'로 설정
    const [errorMessage, setErrorMessage] = useState(
        "닉네임과 내용, 누구에게 보낼지 입력해주세요."
    );

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value);
        } else if (id === "content") {
            setContent(value);
        } else if (id === "recipient") {
            setRecipient(value);
        }
        console.log("입력값 업데이트:", { name, content, recipient }); // 확인을 위한 로그 추가
    };
    const HandleSubmit = (e) => {
        e.preventDefault();

        // 입력값이 비어있는 경우 얼랏 창을 통해 경고 메시지 표시
        if (
            !name.trim() ||
            !content.trim() ||
            recipient === "Select recipient"
        ) {
            setErrorMessage("닉네임과 내용, 누구에게 보낼지 입력해주세요.");
            alert(errorMessage);
            return;
        }

        const currentTime = new Date();

        // 새로운 편지 객체 생성
        const newLetter = {
            name: name,
            content: content,
            recipient: recipient,
            time: currentTime, // 현재 시간 추가
        };

        // 부모 컴포넌트로 새로운 편지 전달
        addLetter(newLetter);

        // 입력값 초기화
        setName("");
        setContent("");
        setRecipient("Select recipient"); // 여기서 기본값을 설정

        console.log("글 작성 폼 제출:", newLetter); // 확인을 위한 로그 추가
    };

    return (
        <FormWrap onSubmit={HandleSubmit}>
            <FormCont>
                <FormContLabel htmlFor="name">닉네임:</FormContLabel>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange}
                />
            </FormCont>
            <FormCont>
                <FormContLabel htmlFor="content">내용:</FormContLabel>
                <textarea
                    id="content"
                    value={content}
                    onChange={handleChange}
                />
            </FormCont>
            <FormCont>
                <FormContLabel htmlFor="recipient">To:</FormContLabel>
                <select
                    id="recipient"
                    value={recipient}
                    onChange={handleChange}
                >
                    <option value="Select recipient">Letter to whom?</option>
                    <option value="Karina">Karina</option>
                    <option value="Winter">winter</option>
                    <option value="Giselle">Giselle</option>
                    <option value="Ningning">Ningning</option>
                </select>
            </FormCont>
            <FormBtn type="submit">글 작성</FormBtn>
        </FormWrap>
    );
};

export default LetterForm;

const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #151515cc;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 400px;
    margin: 0 auto;
    color: #fff;
    margin-bottom: 1rem;
`;
const FormCont = styled.div`
    display: flex;
    margin-bottom: 1rem;
    width: 100%;
`;
const FormContLabel = styled.label`
    width: 4rem;
    text-align: justify;
    & + input {
        width: calc(100% - 4rem);
    }
    & + textarea {
        width: calc(100% - 4rem);
        height: 4rem;
    }
    & + select {
        width: calc(100% - 4rem);
    }
`;

const FormBtn = styled.button`
    align-self: self-end;
`;
