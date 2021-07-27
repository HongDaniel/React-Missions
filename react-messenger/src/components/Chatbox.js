import styled from 'styled-components';
import React, { useEffect } from 'react';
<style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');</style>;

const ORANGE = 'https://img.techpowerup.org/200908/eun.png'; //true
const DOSIK = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';

const Chatbox = (props) => {
    // 자동 스크롤 기능 구현
    useEffect(() => {
        let chatbox = document.getElementById('chatbox');
        chatbox.scrollTop = chatbox.scrollHeight;
    }, [props]);

    let chatLog = [];
    Object.keys(props).map((el) => chatLog.push(props[el]));

    return (
        <Wrapper id="chatbox">
            <div style={{ paddingTop: '85px' }}></div>
            {chatLog.map((el, idx) => {
                return (
                    <MessageRow key={idx} sender={el.user}>
                        <Image src={el.user ? ORANGE : DOSIK}></Image>
                        <Content>{el.content}</Content>
                    </MessageRow>
                );
            })}
            <div style={{ paddingBottom: '55px' }}></div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100%;
    background-color: rgb(171, 193, 209);
    overflow-y: scroll;
`;

const MessageRow = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.sender ? 'row' : 'row-reverse')};
    margin-bottom: 10px;
    font: 500 15px 'Noto Sans KR', sans-serif;
`;

const Image = styled.img`
    max-width: 40px;
    max-height: 40px;
    border-radius: 10px;
    margin: 0 10px;
`;
const Content = styled.div`
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    font: 500;
`;
export default Chatbox;
