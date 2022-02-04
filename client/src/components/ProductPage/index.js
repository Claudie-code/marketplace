import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { slug } = useParams();
    const { items } = useSelector(state => state.products);
    const product = items.find(item => item.name === slug);
    console.log(slug, items);
    return (
        <section className="featured section">
        </section>
    );
}

export default ProductPage;