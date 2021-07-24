import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import main from '../img/kakao.jpg';
import home from '../img/home.png';
import friends from '../img/friends.png';
import chatting from '../img/chatting.png';
import { withRouter } from 'react-router';
import Msg from './MsgSender';
import Chatbox from './Chatbox';

const Chatting = (props) => {
    const ORANGE = 'https://img.techpowerup.org/200908/eun.png'; //true
    const DOSIK = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png'; //false

    const MSGLIST = [
        { user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
        { user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
        { user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
        { user: false, content: '안녕 은아' },
        { user: false, content: '뭐해 ?' },
        { user: true, content: '시원아 넌 최고의 팀장이야' },
        { user: false, content: '나도 아니까  ' },
        { user: false, content: '그만 말해줘도 돼' },
        { user: true, content: 'ㅠㅠ' },
    ];

    const [msg, setMsg] = useState(MSGLIST);
    const [newmsg, setNewmsg] = useState({
        user: true,
        content: '',
    });
    const [text, setText] = useState('');
    const toggleUser = () => {
        newmsg.user ? setNewmsg({ user: false, content: '' }) : setNewmsg({ user: true, content: '' });
    };

    const setInput = (e) => {
        const tmp = e.target.value;
        // console.log(tmp);
        setText(tmp);
        console.log('text: ' + text);
    };

    const setnew = () => {
        // console.log(newmsg);
        setMsg([...msg, { user: newmsg.user, content: text }]);
    };

    useEffect(() => {
        let content = document.getElementById('content');
        content.scrollTop = content.scrollHeight;
        console.log('변경됨');
    }, [msg]);

    return (
        <Wrapper>
            <Navigation>
                <div></div>
                <img src={home} onClick={() => props.history.push('/')}></img>
                <img src={friends} onClick={() => props.history.push('/friends')}></img>
                <img src={chatting} onClick={() => props.history.push('/chatting')}></img>
            </Navigation>
            <Content id="content">
                <Sender>
                    <img src={newmsg.user ? ORANGE : DOSIK} onClick={toggleUser}></img>
                    <Online>
                        <h3>{newmsg.user ? '규리' : '도식'} </h3>
                        <div>현재 활동중</div>
                    </Online>
                </Sender>
                <Chatbox {...msg} />
                <Input>
                    <input onChange={setInput}></input>
                    <button onClick={setnew}>전송</button>
                </Input>
            </Content>
        </Wrapper>
    );
};

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
    position: relative;
`;

const Sender = styled.div`
    height: 80px;
    width: 100%;
    position: absolute;
    z-index: 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    & > img {
        height: 70px;
        margin: 0 15px;
        border-radius: 15px;
        cursor: pointer;
    }
`;

const Online = styled.div`
    height: 70px;
    & > h3 {
        margin: 10px 0;
    }
`;
const Input = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    z-index: 3;
    & > input {
        width: 77%;
        height: 70%;
        margin-right: 7px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        outline: 0;
    }
    & > button {
        width: 12%;
        height: 70%;
        background-color: rgb(250, 227, 1);
        border: none;
        border-radius: 15px;
        cursor: pointer;
    }
`;
export default withRouter(Chatting);
