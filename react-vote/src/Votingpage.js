import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { auth } from './firebase';
const Votingpage = (props) => {
    return (
        <div>
            <Signout onClick={() => auth.signOut()}>로그아웃</Signout>
        </div>
    );
};

const Signout = styled.button`
    width: 50px;
    height: 50px;
`;
export default Votingpage;
