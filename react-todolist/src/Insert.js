import React, { useState, useRef } from 'react';
import styled from 'styled-components';

let id = 3;
const Insert = (props) => {
    const list = props.toDoList;
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
        console.log(text);
    };
    const insert = (text) => {
        const new_list = list.concat({ id: id, text: text, completed: false });
        console.log('클릭됨' + new_list);
    };

    return (
        <Input>
            <input placeholder="새로운 일 추가" type="text" onChange={onChange}></input>
            <button onClick={insert}>+</button>
        </Input>
    );
};

const Input = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 8px;
    box-sizing: border-box;
    background-color: #eee;
    & > input {
        width: 85%;
        text-align: center;
        border: 1px solid #eee;
        border-radius: 15px;
        outline: 0;
    }
    & > button {
        width: 10%;
        background-color: #2ec1ac;
        border: none;
        color: #fff;
        border-radius: 15px;
        font-size: 20px;
        cursor: pointer;
    }
`;
export default Insert;
