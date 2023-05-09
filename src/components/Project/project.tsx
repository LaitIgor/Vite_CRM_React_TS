import MainPageWrapper from "../mainpageWrapper";
import MainHeader from "../MainContent";

import Box from '@mui/material/Box';

export const Project = () => {
    return (
    <>
        <MainPageWrapper>
            <MainHeader 
                headerTitle='My product'
                headerSubtitle='Product table'
            />
           <Box color='black'>Product</Box>
        </MainPageWrapper>
    </>)
}