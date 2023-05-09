import MainPageWrapper from "../mainpageWrapper"
import MainHeader from "../MainContent"

import Box from '@mui/material/Box';

export const Customers = () => {
return (
    <>
        <MainPageWrapper>
            <MainHeader 
                headerTitle='My sales'
                headerSubtitle='Sales table'
            />
           <Box color='black'>Customers</Box>
        </MainPageWrapper>
    </>
    )
}