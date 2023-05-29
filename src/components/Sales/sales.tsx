import {useState, useEffect} from 'react';

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

export type ProductsWithSaleDate = FormValues & {saleDate: string};

type ProductsType = Required<FormValues>[] | Required<ProductsWithSaleDate>

export const MySales = () => {
    const [products, setProducts] = useState<ProductsWithSaleDate[]>([]);

    useEffect(() => {
        const existinigProducts = localStorage.getItem('soldProducts');
        if (existinigProducts) {
            const parsedProducts = JSON.parse(existinigProducts);
            setProducts(parsedProducts)
        }
    }, [])

    return (
    <>
        <MainPageWrapper>
            <MainHeader 
                headerTitle='My sales'
                headerSubtitle='Sales table'
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
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Sold Items</TableCell>
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Weight/Volume</TableCell>
                            <TableCell sx={{backgroundColor: 'black', color: 'inherit'}}>Last Sell</TableCell>
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
                                <TableCell >{row.saleDate}</TableCell>
                                {/* <TableCell >
                                    <Button variant='outlined' onClick={() => sellProduct(row)}>Sell</Button>
                                    <Button variant='outlined'>Edit</Button>
                                    <Button variant='outlined' onClick={() => deleteProduct(row.id)}>X</Button>
                                </TableCell> */}

                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
           </Box>
        </MainPageWrapper>
    </>)
}