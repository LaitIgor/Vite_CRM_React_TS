import {NavLink} from 'react-router-dom';

import chevronRight from '../../../assets/chevronRight.png';

import square3dL from '../../../assets/3dsquareL.png';
import square3d from '../../../assets/3dsquare.png';
import discountShapeL from '../../..//assets/discountShapeL.png';
import discountShape from '../../../assets/discountShape.png';
import keySquareL from '../../../assets/keySquareL.png';
import keySquare from '../../../assets/keySquare.png';
import messageQuestionL from '../../../assets/messageQuestionL.png';
import messageQuestion from '../../../assets/messageQuestion.png';
import userSquareL from '../../../assets/userSquareL.png';
import userSquare from '../../../assets/userSquare.png';
import walletMoneyL from '../../../assets/walletMoneyL.png';
import walletMoney from '../../../assets/walletMoney.png';

import styles from '../sidebar.module.scss'

const navigationList = [
    {route: 'main-page', title: 'Main page', iconL: square3dL, iconD: square3d}, 
    {route: 'product', title: 'My products', iconL: userSquareL, iconD: userSquare}, 
    {route: 'sales', title: 'My sales', iconL: walletMoneyL, iconD: walletMoney},
    {route: 'personal-cabinet', title: 'Personal cabinet', iconL: keySquareL, iconD: keySquare},
    ];

export const Links = () => {
    return <ul className={styles.listContainer}>
    {navigationList.map((link) => {
        return (
            <li key={link.title}>
                <NavLink
                to={`/${link.route === 'main-page' ? '' : link.route}`}
                className={({ isActive}) => isActive ? styles.linkActive :  ""}
                > 
                {({isActive}) => 
                    <div className={styles.linkWrapper}>
                        <img className={styles.linkIcon} src={isActive ? link.iconL : link.iconD} alt={link.route} />
                        {link.title}
                        {!isActive && <img className={styles.chevron} src={chevronRight} alt="chevron right" />}
                    </div> 
                }
                </NavLink>
            </li>
            )}
            )}
        </ul>
    
}