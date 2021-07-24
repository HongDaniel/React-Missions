import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Friends from './components/Friends';
import Chatting from './components/Chatting';
<style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');</style>;

function App() {
    return (
        <Wrapper>
            <Route exact path="/" component={Mainpage} />
            <Route path="/friends" component={Friends} />
            <Route path="/chatting" component={Chatting} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    font-family: 'Noto Sans KR', sans-serif;
    width: 100vw;
    height: 100vh;
`;
export default App;
