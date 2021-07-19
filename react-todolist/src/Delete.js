import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Delete = (props) => {
    return (
        <Box>
            <div>완료()</div>
            <List></List>
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

export default Delete;
