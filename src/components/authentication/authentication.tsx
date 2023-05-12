import FormControl from '@mui/base/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input, { InputProps } from '@mui/base/Input';
import {Link} from 'react-router-dom';

import { useForm } from 'react-hook-form';

import styles from './authentication.module.scss';

export const Authentication = () => {
    const {register, handleSubmit, watch, formState, formState: {errors}} = useForm();
    const onSubmit = (data: any) => console.log(data, 'dataaa');

    console.log(watch('example'), 'wex');
    console.log(formState, 'formState');
    


    return (
        <div className={styles.container}>
            <span className={styles.signIn}>Sign in</span>

            <FormControl className={styles['form-group']}>
                <TextField 
                    sx={{marginBottom: '24px'}}
                    label='outlined'
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