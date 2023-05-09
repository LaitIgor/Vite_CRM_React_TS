import styles from './mainHeader.module.css'

type MainHeaderProps = {
    headerTitle: string;
    headerSubtitle: string
}
// TODO: css classes fix
export const MainHeader = ({headerTitle, headerSubtitle}: MainHeaderProps) => {
    return (
        <div className={styles['header__wrapper']}>
            <div className={styles['header-title_block']}>
                <h1 className={styles['header__title']}>{headerTitle}</h1>
                <p className={styles['header__subtitle']}>{headerSubtitle}</p>
            </div>
            
        </div>
    )
}