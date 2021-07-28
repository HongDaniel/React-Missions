import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { firestore } from './firebase';
import Candis from './Candis';

const Votingpage = (props) => {
    var opts = [];
    const [candis, setCandis] = useState([]);
    const [checkedItem, setCheckedItem] = useState('');
    const votes = firestore.collection('Votes');
    useEffect(() => {
        votes.get().then((e) => {
            e.forEach((doc) => {
                const obj = {};
                obj[doc.id] = doc.data().count;
                opts.push(obj);
            });
            setCandis(opts);
        });
    }, []);

    const haddleSubmit = (e) => {
        e.preventDefault();
        console.log(checkedItem);
        let before = 0;
        candis.map((el) => {
            if (Object.keys(el)[0] === checkedItem) {
                before = Object.values(el)[0];
            }
        });
        console.log('before: ' + before);
        const after = before + 1;
        votes
            .doc(checkedItem)
            .update({ count: after })
            .then(() => window.location.reload());
    };

    return (
        <Wrapper>
            <h2>
                <Link to={{ pathname: '/' }} style={{ textDecoration: 'none', color: 'black' }}>
                    Voting Site
                </Link>
            </h2>
            <form onSubmit={haddleSubmit}>
                <Content>
                    <Title>상수 최고의 맛집은?</Title>
                    <Options onSubmit={haddleSubmit}>
                        <Candis {...{ candis, setCheckedItem }}></Candis>
                    </Options>
                    <Button type="submit">제출</Button>
                </Content>
            </form>
        </Wrapper>
    );
};

const Button = styled.button`
    background-color: #1e90ff;
    color: #fff;
    border: none;
    box-sizing: border-box;
    width: 150px;
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

const Title = styled.div`
    font-size: 30px;
    margin: 20px 0;
`;

const Options = styled.div`
    width: 450px;
    height: 400px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 550px;
    height: 550px;
    border: 1px solid #eee;
    border-radius: 15px;
    background-color: #eee;
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
export default Votingpage;
