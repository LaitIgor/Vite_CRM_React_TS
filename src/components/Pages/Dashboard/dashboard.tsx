import MainHeader from '../../MainContentHeader';
import MainPageWrapper from '../../MainpageWrapper';

import Barchart from '../../Charts/BarCHart';


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