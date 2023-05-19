import {useState, useContext} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Context from '../../store/context';

import {useForm, FieldValues, FieldError, DeepMap} from 'react-hook-form';

import styles from './createProductModal.module.scss';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  type FormValues = {
    store: string;
    price: string;
    productName: string;
    productcategory: string;
    goodsQuantity: string;
    weightVolume: string;
  }

  type FormErrors = DeepMap<FormValues, FieldError>



  const errorMessageString: Record<string, string> = {
    required: 'Field is required',
    minLength: 'Not less then'
  }

  const errorMessageHandler = (errorType: string, length?: number): string => {
    if (length && errorType != 'required') return errorMessageString[errorType] + ' ' + length + ' symbols'
    return errorMessageString[errorType];
  }

export const CreateProductModal = () => {
    const {modalIsOpen, setModalIsOpen} = useContext(Context);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();

    const {}

    const [storeValue, setStoreValue] = useState('222222');

    const submitProduct = (data: FieldValues) => console.log(data, 'product values');

    console.log(errors, 'errors obj');
    
    
    
    // min?: string | number;
    // max?: string | number;
    // maxLength?: number;
    // minLength?: number;
    // pattern?: string;
    // required?: boolean;
    // disabled?: boolean;

    const  replaceNonNumericSymbols = (value: string) => {
        const newValue = value.replace(/^[0-9\b]+$/, '');
        console.log(newValue, 'newValuenewValuenewValue');
        
        return setStoreValue(newValue)
    }

    
    return (
        <Modal open={modalIsOpen} onClose={() => setModalIsOpen((prev) => !prev)}>
            <Box sx={style}>
                <Typography className={styles['modal-title']} component='h3' variant='h3'>Creating a product</Typography>
                <form onSubmit={handleSubmit(submitProduct)} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <TextField 
                        label='Store'
                        fullWidth
                        {...register('store', {required: true, minLength: 3, min: 1})}
                        error={!!errors.store}
                        helperText={errors.store ? errorMessageHandler(errors.store.type, 3) : ''}
                    />
                    <TextField 
                        type='number'
                        label='Price'
                        value={storeValue}
                        fullWidth
                        // {...register('price', {required: true})}
                        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => replaceNonNumericSymbols(event.target.value)}
                        error={!!errors.price}
                        helperText={errors.price ? errorMessageHandler(errors.price.type) : ''}
                    />
                    <TextField 
                        label='Product name'
                        fullWidth
                        {...register('productName', {required: true})}
                        error={!!errors.productName}
                        helperText={errors.price ? errorMessageHandler(errors.price.type) : ''}
                    />
                    <TextField 
                        label='Product category'
                        fullWidth
                        {...register('productcategory', {required: true})}
                        error={!!errors.productcategory}
                        helperText={errors.price ? errorMessageHandler(errors.price.type) : ''}
                    />
                    <TextField 
                        label='Quantity of goods'
                        fullWidth
                        {...register('goodsQuantity', {required: true})}
                        error={!!errors.goodsQuantity}
                        helperText={errors.price ? errorMessageHandler(errors.price.type) : ''}
                    />
                    <TextField 
                        label='Weight/volume of one item'
                        fullWidth
                        {...register('weightVolume', {required: true})}
                        error={!!errors.weightVolume}
                        helperText={errors.price ? errorMessageHandler(errors.price.type) : ''}
                    />
                    <Button sx={{p: '16px 32px'}} variant='contained' type='submit'>Add product</Button>
                </form>
            </Box>
        </Modal>
    )
}