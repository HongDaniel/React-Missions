import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { firestore } from './firebase';
import firebase from 'firebase';

const Signup = () => {
    const [user, setUser] = useState({ name: '', id: '', pwd: '', email: '' });
    const signedUsers = firestore.collection('Users');

    const handdleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const checkPwd = (pwd) => {
        //비밀번호 정규표현식
        var reg_pwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
        if (!reg_pwd.test(pwd)) {
            return false;
        } else {
            return true;
        }
    };

    const handdleSubmit = (e) => {
        e.preventDefault();
        if (!checkPwd(user.pwd)) {
            window.alert('비밀번호를 5자이상, 숫자와 영어문자를 모두 포함시켜 생성하시오');
            document.getElementById('pwd').value = '';
        } else {
            signedUsers //user 정보를 firebase에 저장
                .add(user)
                .then((docRef) => {
                    console.log('Document written with ID: ', docRef.id);
                })
                .catch((error) => {
                    console.error('Error adding document: ', error);
                });

            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.pwd)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    //
                    console.log('가입됨');
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });
            window.alert('가입 완료!');
        }
        console.log(user);
    };

    return (
        <form onSubmit={handdleSubmit}>
            <Wrapper>
                <h2>Voting Site</h2>
                <Info>
                    회원정보를 입력하시오.
                    <br />
                    <br />
                    <Box>
                        <span>
                            Name:
                            <input placeholder="이름을 입력하세요" onChange={handdleChange} name="name" required></input>
                        </span>
                    </Box>
                    <Box>
                        <span>
                            ID:
                            <input placeholder="아이디를 입력하세요" onChange={handdleChange} name="id" required></input>
                        </span>
                    </Box>
                    <Box>
                        Password:
                        <input placeholder="비밀번호를 입력하세요" onChange={handdleChange} name="pwd" id="pwd" required></input>
                    </Box>
                    <Box>
                        Email:
                        <input placeholder="이메일을 입력하세요" type="email" onChange={handdleChange} name="email" required></input>
                    </Box>
                </Info>
                <Button type="submit">Sign up</Button>
            </Wrapper>
        </form>
    );
};
const Button = styled.button`
    width: 150px;
    height: 30px;
    margin-top: 20px;
    background-color: #1e90ff;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 3px #999;
    &:active {
        box-shadow: 0 1px #999;
        transform: translateY(2px);
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;
`;

const Box = styled.div`
    width: 400px;
    margin: 20px 0;
    & input {
        display: block;
        float: right;
        height: 20px;
        width: 300px;
        margin-left: 10px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & h2 {
        margin-top: 40px;
        font-size: 80px;
    }
`;
export default Signup;
