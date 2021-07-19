import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import Insert from './Insert';
import Delete from './Delete';

<style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');</style>;
let id = 1;
function App() {
    const [toDoList, setToDoList] = useState([]);
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(toDoList);
        let count = 0;
        toDoList.map((el) => {
            if (el.completed === false) {
                count++;
            }
        });
        setToDoList(toDoList);
        setCount(count);
    }, [toDoList]);

    const addList = () => {
        const newItem = { id: id, text: text, completed: false };
        // console.log(newItem);
        id++;
        setToDoList((toDoList) => toDoList.concat(newItem));
    };

    const onChange = (e) => {
        // console.log(e.target.value);
        setText(e.target.value);
        // console.log('text: ' + text);
    };
    const deleteItem = () => {
        toDoList.pop();
        console.log('진입');
        console.log(toDoList);
    };

    return (
        <div className="App">
            <Body>
                <Container>
                    <Box>
                        <div>대기({count})</div>
                        <List>
                            {toDoList.map((el, idx) => {
                                if (el.completed === false) {
                                    return (
                                        <El key={idx}>
                                            <div style={{ width: '100%' }}>{el.text}</div>
                                            <span onClick={deleteItem}>❌</span>
                                        </El>
                                    );
                                }
                            })}
                        </List>
                    </Box>
                    <Box>
                        <div>완료({toDoList.length - count})</div>
                        <List>
                            {toDoList.map((el, idx) => {
                                if (el.completed === true) {
                                    return <div key={idx}>{el.text}</div>;
                                }
                            })}
                        </List>
                    </Box>
                    <Input>
                        <input placeholder="새로운 일 추가" type="text" onChange={onChange}></input>
                        <button onClick={addList}>+</button>
                    </Input>
                </Container>
            </Body>
        </div>
    );
}

// Styled-Components

const Body = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: #2ec1ac;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 550px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 1px 1px 5px 5px rgb(0, 0, 0, 0.3);
`;
const Box = styled.div`
    font: 800 20px 'Noto Sans KR', sans-serif;
    padding: 10px;
`;

const List = styled.div`
    width: 100%;
    height: 205px;
    font: 500 18px 'Noto Sans KR', sans-serif;
    padding: 7px;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: auto;
`;

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
const El = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    & > div {
        overflow-x: hidden;
    }
    &:hover {
        background-color: #eee;
    }
`;
export default App;
