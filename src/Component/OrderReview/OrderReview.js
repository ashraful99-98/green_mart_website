import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>{products.name}</h1>
        </div>
    );
};

export default OrderReview;