import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Todo from './Todo';
<style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');</style>;

let id = 0;
let rcount = 0;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toDoList: [] }; //{ id: 0, text: 'test', completed: false }
    }

    typed;
    handleInput = (e) => {
        e.preventDefault();
        let input_text = '';
        input_text = e.target.value;
        this.typed = input_text;
    };

    handleSubmit = () => {
        console.log('submit');
        rcount++;
        this.setState({ toDoList: this.state.toDoList.concat({ id: id, text: this.typed, completed: false }) }); // state변경 => 리렌더링?
        console.log(this.state.toDoList);
        id++;
    };

    done = (idx) => {
        this.setState({
            toDoList: this.state.toDoList.map((el) => {
                if (el.id === idx) {
                    return { id: el.id, text: el.text, completed: true };
                } else {
                    return el;
                }
            }),
        });
        rcount--;
        console.log(this.state.toDoList);
    };

    deleteItem = (idx) => {
        console.log(idx);
        console.log('deleted');
        console.log(this.state.toDoList);
        const newList = [];
        this.state.toDoList.map((el) => {
            if (el.id !== idx) {
                newList.push(el);
            }
        });
        console.log(newList);
        this.setState({ toDoList: newList });
        rcount--;
    };

    render() {
        const toDoList = this.state.toDoList;
        return (
            <div className="App">
                <Body>
                    <Container>
                        <Box>
                            <div>대기({rcount})</div>
                            <List>
                                {toDoList.map((el, idx) => {
                                    if (el.completed === false) {
                                        return (
                                            <El key={idx}>
                                                <div
                                                    style={{ width: '100%' }}
                                                    onClick={() => {
                                                        this.done(el.id);
                                                    }}
                                                >
                                                    {el.text}
                                                </div>
                                                <span
                                                    onClick={() => {
                                                        this.deleteItem(el.id);
                                                    }}
                                                >
                                                    ❌
                                                </span>
                                            </El>
                                        );
                                    }
                                })}
                            </List>
                        </Box>
                        <Box>
                            <div>완료({this.state.toDoList.length - rcount})</div>
                            <List>
                                {toDoList.map((el, idx) => {
                                    if (el.completed === true) {
                                        return (
                                            <div key={idx} style={{ textDecoration: 'line-through' }}>
                                                {el.text}
                                            </div>
                                        );
                                    }
                                })}
                            </List>
                        </Box>
                        <Input>
                            <input ref={this.onRef} placeholder="새로운 일 추가" type="text" onChange={this.handleInput}></input>
                            <button
                                type="submit
                            "
                                onClick={this.handleSubmit}
                            >
                                +
                            </button>
                        </Input>
                    </Container>
                </Body>
            </div>
        );
    }
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
        outline: 0;
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
    & > span:hover {
        transform: scale(1.2);
    }
`;
export default App;
