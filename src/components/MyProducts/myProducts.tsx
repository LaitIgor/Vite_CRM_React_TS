import {useState, useEffect, useContext} from 'react';
import Context from '../../store/context';

import MainPageWrapper from "../mainpageWrapper";
import MainHeader from "../MainContent";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import {FormValues} from '../CreateProductModal/createProductModal'

export const MyProducts = () => {
    const [products, setProducts] = useState<Required<FormValues>[]>([]);
    const {modalIsOpen, setIsProductEditMode, isProductEditMode, setSuccessMessage} = useContext(Context)

    useEffect(() => {
        const existinigProducts = localStorage.getItem('existingProducts');
        if (existinigProducts) {
            const parsedProducts = JSON.parse(existinigProducts);
            setProducts(parsedProducts)
        }
    }, [modalIsOpen, isProductEditMode])

    const sellProduct = (row: Required<FormValues>) => {
        const soldProductsJSON = localStorage.getItem('soldProducts');
        const parsedSoldProducts = soldProductsJSON ? JSON.parse(soldProductsJSON) : [];
        const saleDate = new Intl.DateTimeFormat('en-GB').format(new Date())
        parsedSoldProducts.push({...row, saleDate})
        localStorage.setItem('soldProducts', JSON.stringify(parsedSoldProducts));

        deleteProduct(row.id)
        setSuccessMessage('sold')
    }

    const deleteProduct = (productId: string) => {
        const existingProducts = JSON.parse(localStorage.getItem('existingProducts')!) as Required<FormValues>[];
        const filteredProducts = existingProducts.filter((product) => product.id !== productId)
        localStorage.setItem('existingProducts', JSON.stringify(filteredProducts));
        setProducts(filteredProducts)
        setSuccessMessage('deleted')
    }


    return (
    <>
        <MainPageWrapper>
            <MainHeader 
                headerTitle='My product'
                headerSubtitle='Product table'
            />
           <Box color='black'>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} stickyHeader>
                    <TableHead sx={{backgroundColor: 'black', color: 'white'}}>
                        <TableRow>
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Product name</TableCell>
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Store</TableCell>
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Category</TableCell>
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Creation date</TableCell>
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Price</TableCell>
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Remains</TableCell>
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Weight/Volume</TableCell>
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                            key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope='row'>{row.productName}</TableCell>
                                <TableCell >{row.store}</TableCell>
                                <TableCell >{row.productcategory}</TableCell>
                                <TableCell >{row.creationDate}</TableCell>
                                <TableCell >{row.price}</TableCell>
                                <TableCell >{row.goodsQuantity}</TableCell>
                                <TableCell >{row.weightVolume}</TableCell>
                                <TableCell >
                                    <Button variant='outlined' onClick={() => sellProduct(row)}>Sell</Button>
                                    <Button variant='outlined' onClick={() => setIsProductEditMode(row)}>Edit</Button>
                                    <Button variant='outlined' onClick={() => deleteProduct(row.id)}>X</Button>
                                </TableCell>

                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
           </Box>
        </MainPageWrapper>
    </>)
}