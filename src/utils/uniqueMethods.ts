import {FormValues} from '../components/CreateProductModal/createProductModal';
import {ProductsWithSaleDate} from '../components/Pages/Sales/sales';

export type ProductsType = Required<FormValues> | Required<ProductsWithSaleDate>

export function getLocalStorage (dataName: string) {
    const productsJSON = localStorage.getItem(dataName);
    const parsedProducts = productsJSON ? JSON.parse(productsJSON) : [];
    return parsedProducts;
}

export function setLocalStorage<T>(dataName: string, row: T) {
    localStorage.setItem(dataName, JSON.stringify(row))
}