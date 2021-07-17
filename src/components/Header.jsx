import React from 'react';

import styled from 'styled-components';
import { Grid } from '../elem/index';

const Header = () => {
    return (
        <React.Fragment>
            <Grid>
                <Grid bgColor="#ffffff" top="0" padding="15px 20px" border="1px solid #c4c4c4"width="100%" position="fixed" height="54px">
                    <FixedBox>
                        <Grid is_flex>
                            <Grid width="104px" height="54px" cursor>
                                <img width="104" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
                            </Grid>
                            <Grid width="auto" is_flex>
                                <Grid cursor margin="0 0 0 20px">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
                                </Grid>
                                <Grid cursor margin="0 0 0 20px">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                                </Grid>
                                <Grid>
                                    <Grid cover pc cursor margin="0 0 0 20px"radius="22px" height="22px" width="22px"bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
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