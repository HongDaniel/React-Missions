import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Loginpage = (props) => {
    const [user, setUser] = useState({
        name: 'abd',
        id: '',
        password: '',
        email: '',
    });

    return (
        <Wrapper>
            <h2>Voting Site</h2>
            <Login>
                <Id>
                    <Span>
                        ID:
                        <input></input>
                    </Span>
                </Id>
                <Password>
                    <Span>
                        Password:
                        <input></input>
                    </Span>
                </Password>
                <Button>Log In</Button>
                <Link to={{ pathname: '/signup' }}>
                    <Button>Sign up</Button>
                </Link>
            </Login>
        </Wrapper>
    );
};

export default Loginpage;

const Span = styled.span`
    display: block;
    float: right;
`;

const Button = styled.button`
    background-color: #1e90ff;
    color: #fff;
    border: none;
    box-sizing: border-box;
    width: 350px;
    height: 30px;
    cursor: pointer;
    outline: 0;
    margin-top: 15px;
    font-size: 16px;
    box-shadow: 0 3px #999;
    &:active {
        box-shadow: 0 1px #999;
        transform: translateY(2px);
    }
`;
const Login = styled.div`
    position: absolute;
    top: 45%;
    display: flex;
    flex-direction: column;
    height: 500px;
`;
const Id = styled.div`
    display: block;
    float: right;
    width: 350px;
    margin-bottom: 15px;
    & input {
        width: 260px;
        height: 25px;
        margin-left: 5px;
    }
`;
const Password = styled.div`
    width: 350px;
    & input {
        width: 260px;
        height: 25px;
        margin-left: 5px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2 {
        margin-top: 40px;
        font-size: 80px;
    }
`;
