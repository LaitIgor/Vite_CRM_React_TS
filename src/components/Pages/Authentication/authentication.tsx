import FormControl from '@mui/base/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom';

import { useForm, FieldValues } from 'react-hook-form';

import styles from './authentication.module.scss';

import { ExtendedUser } from '../../../types/types';

export const Authentication = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    
    const onSubmit = (data: FieldValues) => {
        const currentUser: ExtendedUser = JSON.parse(localStorage.getItem('userData') ?? '')

        if (currentUser && currentUser.email === data.email && currentUser.password === data.password) {
            currentUser.loggedIn = true;
            localStorage.setItem('userData', JSON.stringify(currentUser));
            navigate('/');
        }

    };

    return (
        <div className={styles.container}>
            <span className={styles.signIn}>Sign in</span>

            <FormControl className={styles['form-group']}>
                <TextField 
                    sx={{marginBottom: '24px'}}
                    label='email'
                    {...register('email', {required: true})} 
                />
                {errors.email && <span>Email is required!</span>}

                <TextField 
                    sx={{marginBottom: '24px'}}
                    label='Password' 
                    {...register('password', {required: true})} 
                />
                {errors.password && <span>Password is required!</span>}

                <Button 
                    sx={{padding: '16px'}}
                    onClick={handleSubmit(onSubmit)} 
                    className={styles.submit} 
                    variant='contained' 
                >
                    Log in</Button>
            </FormControl>

            <Link to='/create-account' className={styles.forgotPass}>Forgot password?</Link>
        </div>
    )
}