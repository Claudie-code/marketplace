import { useSelector } from "react-redux";
import Loader from "../Loader";

const ProductCard = ({ _id, sale, name, image, model, price }) => {
	const { isLoading } = useSelector(state => ({...state.products}));
    return (
        <>
            {_id && !isLoading ?
                <article className="sneaker" key={_id}>
                    {sale && <div className="sneaker__sale">Sale</div>}
                    <img src={image} alt={name} className="sneaker__img" />
                    <span className="sneaker__name">{model[0].name} <br /> {name}</span>
                    <span className="sneaker__preci">${price.$numberDecimal}</span>
                    <a href={`/products/${name}`} title={`product page ${name}`} className="button-light">Explore<i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article> :
                <article className="sneaker">
                    {sale && <div className="sneaker__sale">Sale</div>}
                    <Loader />
                    <span className="sneaker__name"> <br /> </span>
                    <span className="sneaker__preci">$</span>
                    <a className="button-light">Explore<i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>
            }
        </>
    );
 }
export default ProductCard;