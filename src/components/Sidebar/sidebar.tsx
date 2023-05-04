import {NavLink} from 'react-router-dom';

import styles from './sidebar.module.css'
import logo from '../../assets/Logo.png'

// type NavLinkStatus = {
//     isPending: boolean;
// }

const navigationList = ['dashboard', 'project', 'customers', 'income', 'promote', 'help'];

export const Sidebar = () => {
    return (
        <div className={styles.sidebarMain}>
            <div className="logo">
                <img src={logo} alt="Dashboard logo" />
            </div>
            <ul className="navigation">
                {navigationList.map((string) => {
                    const capitalized = string.charAt(0).toUpperCase() + string.slice(1);
                    return <li className={styles["list-itemsss"]}>
                    <NavLink
                    to={`/${string === 'dashboard' ? '' : string}`}
                    className='pending'
                    >
                        {capitalized}
                    </NavLink>
                </li>
                })}
            </ul>
        </div>
        )
}
