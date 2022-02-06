import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../lib/state/actions';

function ProductPage() {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const { items } = useSelector(state => state.products);
    const product = items.find(item => item.name === slug);
    console.log(slug, product);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <section className="featured section">
        </section>
    );
}

export default ProductPage;