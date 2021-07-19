import React from 'react';
import styled from 'styled-components';

const Todo = ({ toDoList }) => {
    // const count = () => {
    //     let count = 0;
    //     toDoList.map((el) => {
    //         if (el.completed === false) {
    //             count++;
    //         }
    //     });
    //     return count;
    // };
    const done = toDoList.return(
        <Box>
            <div>대기()</div>
            <List>
                {toDoList.map((el, idx) => {
                    if (el.completed === false) {
                        return (
                            <El key={idx}>
                                <div style={{ width: '100%' }} onClick={done}>
                                    {el.text}
                                </div>
                                <span>❌</span>
                            </El>
                        );
                    }
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
    overflow-x: auto;
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
export default Todo;
