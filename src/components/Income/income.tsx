import MainPageWrapper from "../mainpageWrapper";
import MainHeader from "../MainContent";

import Box from '@mui/material/Box';

export const Income = () => {
    return (
<>
    <MainPageWrapper>
        <MainHeader 
            headerTitle='Personal cabinet'
            headerSubtitle='User`s personal data'
        />
        <Box color='black'>Personal cabinet</Box>
    </MainPageWrapper>
</>)
}