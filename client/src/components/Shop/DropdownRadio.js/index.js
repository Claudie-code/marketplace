import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';

const DropdownRadio = ({ setBrandResults, brandCheckedItem, setBrandCheckedItem }) => { 
    const ref = useRef();
    const history = useHistory();
    const location = useLocation();
    const { items } = useSelector(state => state.products);
    const { slug } = useParams();
    const [ showMenu, setShowMenu ] = useState(false);

    const handleChange = (event) => {
        setBrandCheckedItem(event.target.id)
        getFilterPathnameUrl(event.target.id);
    };

    const brands = [
        {
            id: "allproducts",
            label: "All products"
        },
        {
            id: "adidas",
            label: "Adidas"
        },
        {
            id: "nike",
            label: "Nike"
        },
    ];

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
    }, [showMenu]);

    const getFilterPathnameUrl = (newCheckedItem) => {
        if (newCheckedItem === "allproducts") {
            setBrandResults(items);
        } else {
            setBrandResults(items.filter(item => item.brand.toLowerCase() === newCheckedItem.toLowerCase()));
        }
        history.replace({ pathname: "/shop/" + newCheckedItem, search: location.search });
    };

    useEffect(() => {
        if (brandCheckedItem !== "allproducts") {
            setBrandResults(items.filter(item => item.brand.toLowerCase() === slug.toLowerCase()));
        } else {
            setBrandResults(items);
        }
    }, [items, brandCheckedItem]);
        
    return (
        <div ref={ref}> 
            <button className="dropdown__button" onClick={(event) => {setShowMenu(!showMenu)}}>Brand</button>
            <div className={`dropdown__content ${showMenu ? "show__brand" : ""}`} onClick={event => event.stopPropagation()}>
                {brands.map(element => (
                    <div className="dropdown__checkbox" key={element.id}>
                        <input className="dropdown__icon" type="radio"  id={element.id} name="brand"
                            checked={brandCheckedItem === element.id} onChange={handleChange} />
                        <label htmlFor={element.id}>{element.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}  
export default DropdownRadio;