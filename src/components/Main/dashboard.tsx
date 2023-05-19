import MainHeader from '../MainContent';
import MainPageWrapper from '../mainpageWrapper';

import styles from './dashboard.module.css';

export const Dashboard = () => {
    return (
        <>
       <MainPageWrapper>
        <MainHeader 
            headerTitle='Sales statistics'
            headerSubtitle='Welcome to CRM dashboard'
        />
        <div className={styles.dashboard}>Dashboard!2222</div>
        </MainPageWrapper>
    </>
    )
}