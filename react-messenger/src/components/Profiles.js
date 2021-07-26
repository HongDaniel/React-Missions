import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
const Profiles = (props) => {
    const friendProfiles = props.FriendList;
    // console.log(friendProfiles);
    const haddleClick = () => {
        props.history.push('/chatting');
    };
    return (
        <List>
            {friendProfiles.map((el, idx) => {
                return (
                    <Profile onClick={haddleClick}>
                        <img src={el.url}></img>
                        <Box>
                            <Name>{el.name}</Name>
                            <Msg>{el.chatting}</Msg>
                        </Box>
                    </Profile>
                );
            })}
        </List>
    );
};
const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Name = styled.div`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 7px;
`;
const Msg = styled.div`
    font-size: 14px;
    font-weight: 400;
`;
const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-left: 10px;
    width: 95%;
    overflow-y: scroll;
    overflow-x: hidden;
`;
const Profile = styled.div`
    display: flex;
    flex-direction: row;
    &:nth-child(1) {
        border-width: 50%;
        border-bottom: 1.2px solid #eee;
    }
    & img {
        width: 60px;
        height: 55px;
        border-radius: 20px;
        margin: 10px;
    }
    &:hover {
        background-color: #eee;
        cursor: pointer;
    }
`;
export default withRouter(Profiles);
