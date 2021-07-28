import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { firestore } from './firebase';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

const Signup = (props) => {
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

    const checkEmail = (email) => {
        //비밀번호 정규표현식
        var reg_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!reg_email.test(email)) {
            return false;
        } else {
            return true;
        }
    };

    const handdleSubmit = (e) => {
        e.preventDefault();

        if (!checkPwd(user.pwd)) {
            //비밀번호 확인작업
            window.alert('비밀번호를 5자이상, 숫자와 영어문자를 모두 포함시켜 생성하시오');
            document.getElementById('pwd').value = '';
        } else if (!checkEmail(user.email)) {
            // 이메일 형식 체크
            window.alert('이메일을 올바른 형식으로 입력하시오');
            document.getElementById('email').value = '';
        } else if (document.getElementById('pwd').value !== document.getElementById('confirmpwd').value) {
            // 이메일 형식 체크
            window.alert('비밀번호가 서로 일치하지 않습니다 다시 입력하시오');
            document.getElementById('pwd').value = '';
            document.getElementById('confirmpwd').value = '';
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
            props.history.push('/');
        }
        console.log(user);
    };

    return (
        <form onSubmit={handdleSubmit}>
            <Wrapper>
                <h2>
                    <Link to={{ pathname: '/' }} style={{ textDecoration: 'none', color: 'black' }}>
                        Voting Site
                    </Link>
                </h2>
                <Info>
                    회원정보를 입력하시오.
                    <br />
                    <br />
                    <Box>
                        <span>
                            이름:
                            <input placeholder="이름을 입력하세요" onChange={handdleChange} name="name" required></input>
                        </span>
                    </Box>
                    <Box>
                        이메일:
                        <input
                            placeholder="이메일을 입력하세요"
                            type="email"
                            onChange={handdleChange}
                            name="email"
                            id="email"
                            required
                        ></input>
                    </Box>
                    <Box>
                        비밀번호:
                        <input
                            placeholder="비밀번호를 입력하세요"
                            onChange={handdleChange}
                            name="pwd"
                            id="pwd"
                            type="password"
                            required
                        ></input>
                    </Box>
                    <Box>
                        비밀번호 확인:
                        <input
                            placeholder="비밀번호를 다시 입력하세요"
                            onChange={handdleChange}
                            name="confirmpwd"
                            id="confirmpwd"
                            type="password"
                            required
                        ></input>
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
    margin-top: 50px;
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
    width: 500px;
`;

const Box = styled.div`
    width: 425px;
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
