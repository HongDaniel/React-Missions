import React from 'react';
import styled from 'styled-components';
import home from '../img/home.png';
import friends from '../img/friends.png';
import chatting from '../img/chatting.png';

const Wrapper = (props) => {
    return (
        <Box>
            <Navigation>
                <div></div>
                <img src={home} onClick={() => props.history.push('/')}></img>
                <img src={friends} onClick={() => props.history.push('/friends')}></img>
                <img src={chatting} onClick={() => props.history.push('/chatting')}></img>
            </Navigation>
        </Box>
    );
};

const Box = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    width: 50vw;
    height: 90vh;
`;

const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    background-color: #f8efba;

    & > div {
        margin-top: 35px;
    }

    & > img {
        width: 70%;
        overflow: hidden;
        margin: 20px;
        cursor: pointer;
    }

    & > img:hover {
        transform: scale(1.15);
    }
`;

const Content = styled.div`
    width: 87%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(250, 227, 1);
    & > img {
        width: 150px;
        overflow: hidden;
    }
`;
export default Wrapper;
