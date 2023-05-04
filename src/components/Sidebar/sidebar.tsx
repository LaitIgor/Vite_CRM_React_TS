import styles from './sidebar.module.css'
import logo from '../../assets/Logo.png'

export const Sidebar = () => {
    return (
        <div className={styles.sidebarMain}>
            <div className="logo">
                <img src={logo} alt="Dashboard logo" />
            </div>
        </div>
        )
}