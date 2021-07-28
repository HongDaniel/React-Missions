import React, { useState } from 'react';
import styled from 'styled-components';

const Candis = ({ candis, setCheckedItem }) => {
    const checkHanddler = (e, name, idx) => {
        console.log(name);
        const checkbox = document.getElementsByName('checkbox');
        const selected = document.getElementById(idx);
        checkbox.forEach((el) => (el.checked = false));
        selected.checked = true;
        setCheckedItem(name);
    };

    return candis.map((el, idx) => {
        const name = Object.keys(el)[0];
        const count = Object.values(el)[0];
        return (
            <Label key={idx}>
                <input type="checkbox" name="checkbox" id={idx} onChange={(e) => checkHanddler(e, name, idx)}></input>
                <Option>
                    <div>{name}</div>
                    <div>{count}</div>
                </Option>
            </Label>
        );
    });
};
const Label = styled.label`
    display: flex;
    font-size: 22px;
    margin: 25px 0;
    width: 450px;
    & input {
        cursor: pointer;
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }
    & span {
        position: relative;
        left: 20px;
    }
`;
const Option = styled.div`
    display: flex;
    flex-direction: row;
    width: 400px;
    justify-content: space-between;
`;

export default Candis;
