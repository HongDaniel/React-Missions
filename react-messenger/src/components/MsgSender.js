import React from 'react';
import styled from 'styled-components';

const haddleInput = (e) => {
    const text = e.target.value;
    console.log(text);
};

const Msg = (props) => {
    return (
        <Wrapper>
            <input onChange={haddleInput}></input>
            <button>전송</button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    z-index: 3;
    & > input {
        width: 77%;
        height: 70%;
        margin-right: 7px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        outline: 0;
    }
    & > button {
        width: 12%;
        height: 70%;
        background-color: rgb(250, 227, 1);
        border: none;
        border-radius: 15px;
        cursor: pointer;
    }
`;
export default Msg;
