import React from 'react';

import styled from 'styled-components';
import { Grid } from '../elem/index';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { history } from '../modules/configStore';
import { useSelector } from 'react-redux';
import { userCreators } from '../modules/redux/user';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    
    return (
        <React.Fragment>
            <Grid>
                <Grid borderbot="1px solid #c4c4c4"index="1" bgColor="#ffffff" top="0" padding="15px 20px" width="100%" position="fixed" height="54px">
                    <FixedBox>
                        <Grid is_flex>
                            <Grid _onClick={() => {
                                history.push('/')
                            }}width="104px" height="54px" cursor="pointer">
                                <img alt="로고"width="104" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
                            </Grid>
                            <Grid width="auto" is_flex>
                                <Grid cursor="pointer">
                                    <ExitToAppIcon onClick={() => {
                                        dispatch(userCreators.logOutDB());
                                    }}/>
                                </Grid>
                                <Grid cursor="pointer" margin="0 0 0 20px">
                                    <HomeIcon onClick={() => {
                                        history.push('/')
                                    }}/>
                                </Grid>
                                <Grid cursor="pointer" margin="0 0 0 20px">
                                    <AddBoxIcon />
                                </Grid>
                                <Grid>
                                    <Grid _onClick={() => {
                                        history.push(`/userinfo/`)
                                    }}cover="cover" position="center" cursor="pointer" margin="0 0 0 20px"radius="22px" height="22px" width="22px"bg={user && user.profileImage}></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </FixedBox>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const FixedBox = styled.div`
    max-width: 975px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

export default Header;