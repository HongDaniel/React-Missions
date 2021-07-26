import React, { useState } from 'react';
import styled from 'styled-components';
import home from '../img/home.png';
import friends from '../img/friends.png';
import chatting from '../img/chatting.png';
import addFriend from '../img/add-friend.png';
import search from '../img/search.png';
import Profiles from './Profiles';
import { withRouter } from 'react-router';
import FriendList from './FriendList';

const Friends = (props) => {
    const friendList = FriendList;
    const [Keyword, setKeyWord] = useState('');
    const haddleInput = (e) => {
        const keyword = e.target.value;
        setKeyWord(keyword);
    };
    const newFriendList = FriendList.filter((el, idx) => {
        if (idx !== 0) {
            if (el.name.indexOf(Keyword) !== -1) {
                return el;
            }
        } else return el;
    });

    return (
        <Wrapper>
            <Navigation>
                <div></div>
                <img src={home} onClick={() => props.history.push('/')}></img>
                <img src={friends} onClick={() => props.history.push('/friends')}></img>
                <img src={chatting} onClick={() => props.history.push('/chatting')}></img>
            </Navigation>

            <Content>
                <Top id="top">
                    <h2>친구</h2>
                    <img src={addFriend}></img>
                </Top>
                <Search>
                    <img src={search}></img>
                    <Input placeholder="이름 검색" onChange={haddleInput}></Input>
                    <Button>통합검색</Button>
                </Search>

                <Profiles FriendList={newFriendList} />
            </Content>
        </Wrapper>
    );
};

const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between !important;
    margin: 10px 30px;
    font-size: 16px;
    & > img {
        max-height: 30px;
        cursor: pointer;
        position: relative;
        right: -210%;
    }
    & > h2 {
        position: relative;
        right: 210%;
    }
`;
const Search = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #eee;
    height: 30px;
    border: none;
    border-radius: 15px;
    outline: 0;
    width: 85%;
    &:focus {
        background-color: #fff;
        border: 1.5px solid #eee;
    }
    & img {
        position: relative;
        left: 3%;
        max-height: 15px;
        margin: 0;
    }
`;

const Input = styled.input`
    width: 70%;
    border: none;
    height: 90%;
    margin-left: 19px;
    margin-right: 5px;
    outline: 0;
    background-color: #eee;
    &:focus {
        background-color: #fff;
        border-right: 1px solid #eee;
    }
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
`;

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
    align-items: center;
`;
export default withRouter(Friends);
