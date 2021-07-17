import React from 'react';

import styled from 'styled-components';
import { Grid } from '../elem/index';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Header = () => {
    return (
        <React.Fragment>
            <Grid>
                <Grid borderbot="1px solid #c4c4c4"index="1" bgColor="#ffffff" top="0" padding="15px 20px" width="100%" position="fixed" height="54px">
                    <FixedBox>
                        <Grid is_flex>
                            <Grid width="104px" height="54px" cursor="pointer">
                                <img alt="유저 프로필사진"width="104" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
                            </Grid>
                            <Grid width="auto" is_flex>
                                <Grid cursor="pointer" margin="0 0 0 20px">
                                    <HomeIcon />
                                </Grid>
                                <Grid cursor="pointer" margin="0 0 0 20px">
                                    <AddBoxIcon />
                                </Grid>
                                <Grid cursor="pointer" margin="0 0 0 20px">
                                    <BookmarkIcon />
                                </Grid>
                                <Grid>
                                    <Grid cover pc cursor="pointer" margin="0 0 0 20px"radius="22px" height="22px" width="22px"bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
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