import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';

import Links from './Links';

import styles from './sidebar.module.css'

import logo from '../../assets/Logo.png'

export const Sidebar = () => {
    return (
        <Box
            sx={{
                boxSizing: 'border-box',
                width: '306px',
                height: '100vh',
                bgcolor: 'white',
                padding: '28px',
                paddingTop: '36px'
            }}
        >
            <Link to='/' className={styles.logo}>
                <img src={logo} alt="Dashboard logo" /> <span className={styles.logoVersion}>v0.1</span>
            </Link>
                <Links />             
            </Box>
        )
}
