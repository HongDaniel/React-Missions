import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Todo = (props) => {
    const list = props.toDoList;
    let count = 0;
    console.log(list);
    return (
        <Box>
            <div>대기({count})</div>
            <List>
                {list.map((el) => {
                    console.log(el.text);
                    if (el.completed === false) {
                        count++;
                    }
                    return <div key={el.id}>{el.text}</div>;
                })}
            </List>
        </Box>
    );
};

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
`;

export default Todo;
