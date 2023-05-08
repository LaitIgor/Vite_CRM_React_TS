import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';

import Links from './Links';

import styles from './sidebar.module.scss'

import logo from '../../assets/Logo.png'
import logout from '../../assets/logout-arrow.svg';

export const Sidebar = () => {
    return (
        <Box
            sx={{
                boxSizing: 'border-box',
                position: 'relative',
                width: '306px',
                height: '100vh',
                bgcolor: 'white',
                padding: '28px',
                paddingTop: '36px',
                backgroundColor: '#fbfbff',
            }}
        >
            // TODO: fix component names collision
            <Link to='/' className={styles.logo}>
                <img src={logo} alt="Dashboard logo" /> <span className={styles.logoVersion}>v0.1</span>
            </Link>
            
            <Links />

            <Link 
            to='/auth'
            className={styles.logout}
            onClick={(e) => console.log(e, 'eee')}
            >
                <img src={logout} alt="Log out" />
                <span>Log out</span>
            </Link>

            </Box>
        )
}
