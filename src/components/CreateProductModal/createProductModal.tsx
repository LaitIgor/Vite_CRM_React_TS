import {useState, useContext, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Context from '../../store/context';

import {useForm, useController, FieldValues, FieldError, DeepMap, Controller} from 'react-hook-form';
import { getLocalStorage, setLocalStorage } from '../../utils/uniqueMethods';
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

//   type FormErrors = DeepMap<FormValues, FieldError>



  const errorMessageString: Record<string, string> = {
    required: 'Field is required',
    minLength: 'Not less then'
  }

  const errorMessageHandler = (errorType: string, length?: number): string => {
    if (length && errorType != 'required') return errorMessageString[errorType] + ' ' + length + ' symbols'
    return errorMessageString[errorType];
  }

  let defaultFormValues = {
    store: '',
    productName: '',
    productcategory: '',
    price: '',
    goodsQuantity: '',
    weightVolume: ''
}


export const CreateProductModal = () => {
    const {modalIsOpen, setModalIsOpen, isProductEditMode, setIsProductEditMode, setSuccessMessage} = useContext(Context);
    const edit = !!isProductEditMode;

    let defaultValues = defaultFormValues; 

    if (edit) {
        defaultValues = isProductEditMode!; 
    }

    const { register, handleSubmit, watch, control, formState: { errors }, reset, formState } = useForm<FormValues>({defaultValues});

    // const {field} = useController({name: 'price', control});

    const addProdToList = (product: FormValues) => {
        const existingProducts: FormValues[]  = getLocalStorage('existingProducts') ;
        existingProducts.push(product);
        console.log(existingProducts, 'what i set to LS');
        
        setLocalStorage('existingProducts', existingProducts);
    }

    const submitProduct = (data: FieldValues) => {
        const creationDate = new Intl.DateTimeFormat('en-GB').format(new Date())
        const newProduct = {...data, id: crypto.randomUUID(), creationDate} as FormValues
        
        addProdToList(newProduct)

        closeModal('created');
    };

    const submitEditProduct = (data: FieldValues) => {
        const existingProducts = getLocalStorage('existingProducts') as FormValues[];
        const editedProductArray = existingProducts.map((product) => {
            if (product.id === data.id) return data
            return product
        })
        
        setLocalStorage('existingProducts', editedProductArray);
        closeModal('edited');
    }

    const closeModal = (message: 'deleted' | 'edited' | 'sold' | 'created' | '') => {
        setModalIsOpen(false)
        setIsProductEditMode(() => null)
        reset();
        setSuccessMessage(message);
    }

    return (
        <Modal open={modalIsOpen || !!isProductEditMode} onClose={() => closeModal('')}>
            <Box sx={style}>
                <Typography className={styles['modal-title']} component='h3' variant='h3'>{edit ? 'Editing a product' : 'Creating a product'}</Typography>
                <form 
                    onSubmit={handleSubmit(edit ? submitEditProduct : submitProduct)} 
                    style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}
                >
                    <Controller 
                        name='store'
                        control={control}
                        rules={{required: 'This field is required'}}
                        render={({field}) => {
                            console.log(field, 'fieldfieldfield');
                            
                           return <TextField 
                                {...field}
                                label='Store'
                                fullWidth
                                error={!!errors.store}
                                helperText={errors.store ? errors.store.message : ''}
                                // defaultValue={field.value}
                                // onChange={(event) => {
                                //     const value = event.target.value;
                                //     event.target.value = value.replace(/^[^.0-9]|(\.(?=.*\.))|[^\d.]/g, '');
                                //     field.onChange(event);
                                //   }}
                            />
                        }}
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
                       
                    <Button 
                        sx={{p: '16px 32px'}} 
                        variant='contained' 
                        type='submit'>
                        {edit ? 'Save changes' : 'Add product'}
                    </Button>
                </form>
            </Box>
        </Modal>
    )
}
