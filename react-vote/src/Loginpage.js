import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

const Loginpage = (props) => {
    const [logIn, setlogIn] = useState({ email: '', pwd: '' });

    const handdleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name + ': ' + value);
        setlogIn({ ...logIn, [name]: value });
        console.log(logIn);
    };

    const handdleSubmit = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(logIn.email, logIn.pwd)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log('로그인 성공');
                props.history.push('/voting-page');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    };

    return (
        <form onSubmit={handdleSubmit}>
            <Wrapper>
                <h2>
                    <Link to={{ pathname: '/' }} style={{ textDecoration: 'none', color: 'black' }}>
                        Voting Site
                    </Link>
                </h2>
                <Login>
                    <Id>
                        <Span>
                            Email:
                            <input name="email" type="email" onChange={handdleChange}></input>
                        </Span>
                    </Id>
                    <Password>
                        <Span>
                            Password:
                            <input name="pwd" type="password" onChange={handdleChange}></input>
                        </Span>
                    </Password>
                    <Button>Log In</Button>
                    <Link to={{ pathname: '/signup' }}>
                        <Button type="submit">Sign up</Button>
                    </Link>
                </Login>
            </Wrapper>
        </form>
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
    & > h2 {
        margin-top: 40px;
        font-size: 80px;
    }
`;
