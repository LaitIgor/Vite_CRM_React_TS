import MainHeader from '../MainContent';
import MainPageWrapper from '../mainpageWrapper';

import Barchart from '../Charts/BarCHart';


import styles from './dashboard.module.css';



export const Dashboard = () => {

    return (
        <>
       <MainPageWrapper>
        <MainHeader 
            headerTitle='Sales statistics'
            headerSubtitle='Welcome to CRM dashboard'
        />
        <div className={styles.dashboard}>
        <Barchart />
        
        </div>
        </MainPageWrapper>
    </>
    )
}