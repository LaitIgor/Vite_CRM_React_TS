import {useState, useContext} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Context from '../../store/context';

import {useForm, useController, FieldValues, FieldError, DeepMap, Controller} from 'react-hook-form';

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

  export type FormValues = {
    store: string;
    price: string;
    productName: string;
    productcategory: string;
    goodsQuantity: string;
    weightVolume: string;
    id?: string;
    creationDate?: string;
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
    const { register, handleSubmit, watch, control, formState: { errors }, reset, formState } = useForm<FormValues>({
        defaultValues: {
            store: '',
            productName: '',
            productcategory: '',
            price: '',
            goodsQuantity: '',
            weightVolume: ''
        }
    });

    const {field} = useController({name: 'price', control});

    const [storeValue, setStoreValue] = useState('222222');

    const addProdToList = (product: FormValues) => {
        const existingProductsinJSON = localStorage.getItem('existingProducts');
        const existingProducts = existingProductsinJSON ? JSON.parse(existingProductsinJSON) : [];
        existingProducts.push(product);
        console.log(existingProducts, 'existingProducts to push to loc storage');
        localStorage.setItem('existingProducts', JSON.stringify(existingProducts));
        
    }

    const submitProduct = (data: FieldValues) => {
        const creationDate = new Intl.DateTimeFormat('en-GB').format(new Date())
        const newProduct = {...data, id: crypto.randomUUID(), creationDate} as FormValues
        // console.log(data, 'product values')
        // console.log(newProduct, 'newProduct values')
        
        setTimeout(() => {
            addProdToList(newProduct)
            reset()
            
        }, 1000)
    };

    
    // min?: string | number;
    // max?: string | number;
    // maxLength?: number;
    // minLength?: number;
    // pattern?: string;
    // required?: boolean;
    // disabled?: boolean;

    const  replaceNonNumericSymbols = (value: string) => {
        const newValue = value.replace(/\D/g, '');
        field.onChange(newValue)
    }


    return (
        <Modal open={modalIsOpen} onClose={() => {setModalIsOpen((prev) => !prev); reset()}}>
            <Box sx={style}>
                <Typography className={styles['modal-title']} component='h3' variant='h3'>Creating a product</Typography>
                <form onSubmit={handleSubmit(submitProduct)} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <Controller 
                        name='store'
                        control={control}
                        rules={{required: 'This field is required'}}
                        render={({field}) => (
                            <TextField 
                                {...field}
                                label='Store'
                                fullWidth
                                error={!!errors.store}
                                helperText={errors.store ? errors.store.message : ''}
                                // {...register('store', {required: true, minLength: 3, min: 1, pattern: {value: /\D/g, message: 'should not be letters'}}, )}
                                // helperText={errors.store ? errorMessageHandler(errors.store.type, 3) : ''}
                            />
                        )}
                    />
                    <Controller 
                        name='price'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <TextField 
                                {...field}
                                label='Price'
                                fullWidth
                                error={!!errors.price}
                                helperText={errors.price ? errorMessageHandler(errors.price.type) : ''}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    event.target.value = value.replace(/^[^.0-9]|(\.(?=.*\.))|[^\d.]/g, '');
                                    field.onChange(event) 
                                }}
                            />
                        )}
                    />
                    {/* <TextField 
                        label='Price'
                        value={field.value}
                        fullWidth
                        {...register('price', {required: true})}
                        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => replaceNonNumericSymbols(event.target.value)}
                        error={!!errors.price}
                        helperText={errors.price ? errorMessageHandler(errors.price.type) : ''}
                    /> */}
                    <Controller 
                        name='productName'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <TextField 
                                {...field}
                                label='Product name'
                                fullWidth
                                // {...register('productName', {required: true})}
                                error={!!errors.productName}
                                helperText={errors.productName ? errorMessageHandler(errors.productName.type) : ''}
                            />
                        )}
                    />
                    <Controller 
                        name='productcategory'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <TextField 
                                {...field}
                                label='Product category'
                                fullWidth
                                // {...register('productcategory', {required: true})}
                                error={!!errors.productcategory}
                                helperText={errors.productcategory ? errorMessageHandler(errors.productcategory.type) : ''}
                            />
                        )}
                    />
                    <Controller
                        name='goodsQuantity'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <TextField 
                                {...field}
                                label='Quantity of goods'
                                fullWidth
                                error={!!errors.goodsQuantity}
                                helperText={errors.goodsQuantity ? errorMessageHandler(errors.goodsQuantity.type) : ''}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    event.target.value = value.replace(/\D/g, '');
                                    field.onChange(event)
                                }}
                            />
                        )}

                    />
                    <Controller
                        name='weightVolume'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <TextField 
                                {...field}
                                label='Weight/volume of one item'
                                fullWidth
                                error={!!errors.weightVolume}
                                helperText={errors.weightVolume ? errorMessageHandler(errors.weightVolume.type) : ''}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    event.target.value = value.replace(/^[^.0-9]|(\.(?=.*\.))|[^\d.]/g, '');
                                    field.onChange(event)
                                }}
                            />
                        )}
                    />
                       
                    <Button sx={{p: '16px 32px'}} variant='contained' type='submit'>Add product</Button>
                </form>
            </Box>
        </Modal>
    )
}