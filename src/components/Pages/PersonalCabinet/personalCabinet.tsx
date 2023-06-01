import {useForm, FieldValues} from 'react-hook-form';
import {TextField, Button} from '@mui/material';

import MainPageWrapper from "../../MainpageWrapper";
import MainHeader from "../../MainContentHeader";

import {Box, Container} from '@mui/material';

type UserPersonalInfo = {
    firstName: string;
    lastName: string;
    companyName: string;
    productCategory: string;
    address: string;
    oldPass: string;
    newPass: string;
}

export const PersonalCabinet = () => {
    const userPersonalInfo: UserPersonalInfo = JSON.parse(localStorage.getItem('userData') || '');
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
          firstName: userPersonalInfo.firstName || '',
          lastName: userPersonalInfo.lastName || '',
          companyName: userPersonalInfo.companyName || '',
          productCategory: userPersonalInfo.productCategory || '',
          address: userPersonalInfo.address || '',
          password: '',
          repeatPassword: '',

        },
        mode: 'onBlur',
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data, 'personal info data');
        localStorage.setItem('userData', JSON.stringify({...userPersonalInfo, ...data}))
    };
    
    return (
    <>
        <MainPageWrapper>
            <MainHeader 
                headerTitle='Personal cabinet'
                headerSubtitle='User`s personal data'
            />
            <Container maxWidth='xl'>
                <Box color='black' >
                    <form style={{maxWidth: '500px', display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
                        <Box display='flex' gap={2}>
                            <TextField
                                sx={{width: '300px'}}
                                label='First name'
                                margin='normal'
                                {...register('firstName', {required: true})}
                                error={!!errors.firstName}
                                helperText={errors.firstName ? 'This field is required' : null}
                            />
                            <TextField 
                                sx={{width: '300px'}}
                                label='Last name'
                                margin='normal'
                                {...register('lastName', {required: true})}
                                error={!!errors.lastName}
                                helperText={errors.lastName ? 'This field is required' : null}
                            />
                        </Box>
                        <Box display='flex' gap={2}>
                            <TextField
                                sx={{width: '300px'}}
                                label='Company name'
                                margin='normal'
                                {...register('companyName', {required: true})}
                                error={!!errors.companyName}
                                helperText={errors.companyName ? 'This field is required' : null}
                            />
                            <TextField 
                                sx={{width: '300px'}}
                                label='Product category'
                                margin='normal'
                                {...register('productCategory', {required: true})}
                                error={!!errors.productCategory}
                                helperText={errors.productCategory ? 'This field is required' : null}
                            />
                        </Box>
                        <Box display='flex' gap={2}>
                            <TextField
                                // sx={{width: '300px'}}
                                fullWidth
                                label='Address'
                                margin='normal'
                                {...register('address', {required: true})}
                                error={!!errors.address}
                                helperText={errors.address ? 'This field is required' : null}
                            />
                        </Box>
                        <Box display='flex' gap={2}>
                            <TextField
                                sx={{width: '300px'}}
                                label='Enter old password'
                                margin='normal'
                                {...register('password', {required: true})}
                                error={!!errors.password}
                                helperText={errors.password ? 'This field is required' : null}
                            />
                            <TextField
                                sx={{width: '300px'}}
                                label='Enter a new password'
                                margin='normal'
                                {...register('repeatPassword', {required: true})}
                                error={!!errors.repeatPassword}
                                helperText={errors.repeatPassword ? 'This field is required' : null}
                            />
                        </Box>
                        <Box display='flex' gap={2}>
                            <Button sx={{alignSelf: 'flex-start', marginTop: '16px', padding: '16px 32px'}} variant='contained' type='submit'>Save changes </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
            
        </MainPageWrapper>
    </>
)
}