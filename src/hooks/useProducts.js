import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('../../public/products.json')
            .then(res => res.json())
            .then(data => console(data));
    }, []);
    return [products, setProducts];
}

export default useProducts;