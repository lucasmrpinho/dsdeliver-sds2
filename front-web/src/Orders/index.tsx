import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';

function Orders() {

    const [products, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
        .then(response => setProduct(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-content">
            <StepsHeader />
            <ProductsList products={products} />
        </div>
        )
}

export default Orders;