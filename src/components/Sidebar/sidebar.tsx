

import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';

import Links from './Links';

import styles from './sidebar.module.scss'

import logo from '../../assets/Logo.png'
import logout from '../../assets/logout-arrow.svg';

import { ExtendedUser } from '../../types/types';

export const Sidebar = () => {

    const logOut = () => {
        const currentUser: ExtendedUser  = JSON.parse(localStorage.getItem('userData')!);
        currentUser.loggedIn = false;
        localStorage.setItem('userData', JSON.stringify(currentUser));
    }

    return (
        <Box
            sx={{
                boxSizing: 'border-box',
                position: 'relative',
                width: '306px',
                height: '100vh',
                padding: '28px',
                paddingTop: '36px',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'white',
                backgroundColor: '#fbfbff',
            }}
        >
            <Link to='/' className={styles.logo}>
                <img src={logo} alt="Dashboard logo" /> <span className={styles.logoVersion}>v0.1</span>
            </Link>
            
            <Links />

            <Link 
            to='/auth'
            className={styles.logout}
            onClick={logOut}
            >
                <img src={logout} alt="Log out" />
                <span>Log out</span>
            </Link>

            </Box>
        )
}
