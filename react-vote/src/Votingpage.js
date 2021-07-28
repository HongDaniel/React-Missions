import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { firestore } from './firebase';

const Votingpage = (props) => {
    const [tmp, setTmp] = useState('');
    const [options, setOptions] = useState([]);
    var opts = [];

    useEffect(() => {
        firestore
            .collection('Votes')
            .get()
            .then((e) => {
                e.forEach((doc) => {
                    const obj = {};
                    obj[doc.id] = doc.data().count;
                    opts.push(obj);
                    //
                });
                console.log(opts);
            });
        console.log('1');
        setOptions(opts);
    }, []);

    const haddleSubmit = () => {
        return null;
    };

    return (
        <Wrapper>
            {console.log('2')}
            <h2>Voting Site</h2>
            <Content>
                <Title>상수 최고의 맛집은?</Title>
                <Options onSubmit={haddleSubmit}>
                    {console.log(options)}
                    {/* {options.map((el, idx) => {
                        return (
                            <label>
                                <input type="checkbox"></input>
                                {el}
                            </label>
                        );
                    })} */}
                    <Button type="submit">제출</Button>
                </Options>
            </Content>
        </Wrapper>
    );
};

const Button = styled.button`
    position: relative;
    top: 350px;
    left: 180px;
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

const Options = styled.form`
    width: 450px;
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
