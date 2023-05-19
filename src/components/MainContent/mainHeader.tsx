import {useState, useContext} from 'react';

import Button from '@mui/material/Button';

import Context from '../../store/context';

import fileImg from '../../assets/file-img.svg';
import styles from './mainHeader.module.css'

type MainHeaderProps = {
    headerTitle: string;
    headerSubtitle: string
}
// TODO: css classes fix
export const MainHeader = ({headerTitle, headerSubtitle}: MainHeaderProps) => {
    const {modalIsOpen, setModalIsOpen} = useContext(Context);

    return (
        <div className={styles['header__wrapper']}>
            <div className={styles['header-title_block']}>
                <h1 className={styles['header__title']}>{headerTitle}</h1>
                <p className={styles['header__subtitle']}>{headerSubtitle}</p>
            </div>
        <Button 
            onClick={() => setModalIsOpen((prevState) => !prevState)}
            sx={{alignSelf: 'center', p:'16px 32px'}}
            variant='contained'
            startIcon={<img src={fileImg} alt="file" />}
            >
            Create a product
        </Button>
            
        </div>
    )
}