import {useForm, FieldValues} from 'react-hook-form';
import {Container, Box, TextField, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

import { ExtendedUser } from '../../types/types';

export const CreateAccount = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();


    const onSubmit = (data: FieldValues) => {
        const userCreateAndLoggedIn: ExtendedUser = {...data, loggedIn: true}
        localStorage.setItem('userData', JSON.stringify(userCreateAndLoggedIn))
        navigate("/");
    }
    
    return (
        <>
        <Container maxWidth='sm'>
            <Box display='flex' alignItems='center' height='100vh'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box display='flex' gap={2}>
                        <TextField 
                            label='First name'
                            fullWidth
                            margin='normal'
                            {...register('firstName', {required: true})}
                            error={!!errors.firstName}
                            helperText={errors.firstName ? 'This field is required' : null}
                        />
                        <TextField 
                            label='Last name'
                            fullWidth
                            margin='normal'
                            {...register('lastName', {required: true})}
                            error={!!errors.lastName}
                            helperText={errors.lastName ? 'This field is required' : null}
                        />
                    </Box>
                    <TextField 
                        label='Company name'
                        fullWidth
                        margin='normal'
                        {...register('companyName', {required: true})}
                        error={!!errors.companyName}
                        helperText={errors.companyName ? 'This field is required' : null}
                    />
                    <TextField 
                        type='email'
                        label='Email'
                        fullWidth
                        margin='normal'
                        {...register('email', {required: true})}
                        error={!!errors.email}
                        helperText={errors.email ? 'This field is required' : null}
                    />
                    <TextField 
                        label='Password'
                        fullWidth
                        margin='normal'
                        {...register('password', {required: true})}
                        error={!!errors.password}
                        helperText={errors.password ? 'This field is required' : null}
                    />
                    <TextField 
                        label='Repeat password'
                        fullWidth
                        margin='normal'
                        {...register('repeatPpassword', {required: true})}
                        error={!!errors.repeatPpassword}
                        helperText={errors.repeatPpassword ? 'This field is required' : null}
                    />
                    <Button sx={{padding: '16px'}} fullWidth variant='contained' color='primary' type='submit'>Create account</Button>
                </form>
            </Box>
        </Container>
        </>
    )
}