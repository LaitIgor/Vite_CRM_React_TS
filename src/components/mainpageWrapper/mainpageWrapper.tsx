import Sidebar from "../Sidebar"

import Box from '@mui/material/Box';
import { PropsWithChildren } from "react";

export const MainPageWrapper = ({children}: PropsWithChildren) => {
    return (
        <>
            <Sidebar />
            <Box p='28px' width='100%'>{children}</Box>
        </>
    )
}