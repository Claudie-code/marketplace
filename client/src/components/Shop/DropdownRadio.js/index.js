import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { fetchBrands } from '../../../lib/state/actions';

const DropdownRadio = ({ setBrandResults, brandCheckedItem, setBrandCheckedItem }) => { 
    const dispatch = useDispatch();
    const ref = useRef();
    const history = useHistory();
    const location = useLocation();
    const { items } = useSelector(state => state.products);
    const { brands } = useSelector(state => state.brands);
    const { slug } = useParams();
    const [ showMenu, setShowMenu ] = useState(false);

    const handleChange = (event) => {
        setBrandCheckedItem(event.target.id)
        getFilterPathnameUrl(event.target.id);
    };

    const getFilterPathnameUrl = (newCheckedItem) => {
        if (newCheckedItem === "allproducts") {
            setBrandResults(items);
        } else {
            setBrandResults(items.filter(item => item.brandid.toLowerCase() === newCheckedItem.toLowerCase()));
        }
        history.replace({ pathname: "/shop/" + newCheckedItem, search: location.search });
    };

    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (showMenu && ref.current && !ref.current.contains(e.target)) {
            setShowMenu(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showMenu]);

    useEffect(() => {
        if (brandCheckedItem !== "allproducts") {
            setBrandResults(items.filter(item => item.brandid.toLowerCase() === slug.toLowerCase()));
        } else {
            setBrandResults(items);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, brandCheckedItem]);

    useEffect(() => {
        dispatch(fetchBrands());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
        
    return (
        <div ref={ref}> 
            <button className="dropdown__button" onClick={(event) => {setShowMenu(!showMenu)}}>Brand</button>
            <div className={`dropdown__content ${showMenu ? "show__brand" : ""}`} onClick={event => event.stopPropagation()}>
                {brands?.map(element => (
                    <div className="dropdown__checkbox" key={element.id}>
                        <input className="dropdown__icon" type="radio"  id={element.id} name="brand"
                            checked={brandCheckedItem === element.id} onChange={handleChange} />
                        <label htmlFor={element.id}>{element.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}  
export default DropdownRadio;