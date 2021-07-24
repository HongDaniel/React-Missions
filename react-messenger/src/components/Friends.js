import React from 'react';
import styled from 'styled-components';
import home from '../img/home.png';
import friends from '../img/friends.png';
import chatting from '../img/chatting.png';
import { withRouter } from 'react-router';

const Friends = (props) => {
    return (
        <Wrapper>
            <Navigation>
                <div></div>
                <img src={home} onClick={() => props.history.push('/')}></img>
                <img src={friends} onClick={() => props.history.push('/friends')}></img>
                <img src={chatting} onClick={() => props.history.push('/chatting')}></img>
            </Navigation>
            <Content>
                <Top></Top>
                <Search></Search>
                <Myprofile></Myprofile>
                <myFriends></myFriends>
            </Content>
        </Wrapper>
    );
};

const Top = styled.div`
    display: flex;
    flex-direction: row;
`;
const Search = styled.div``;
const Myprofile = styled.div``;
const myFriends = styled.div``;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    width: 550px;
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
    background-color: #fff;
    display: flex;
    flex-direction: column;
`;
export default withRouter(Friends);
