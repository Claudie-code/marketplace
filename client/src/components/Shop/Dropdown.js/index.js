import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { fetchProducts } from '../../lib/state/actions';
import queryString from 'query-string';
import './shop.scss';

const Dropdown = () => { 
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.products);
    const { slug } = useParams();
    const brandResults = slug ? items.filter(item => item.brand.toLowerCase() === slug.toLowerCase()) : items;
    const initialState = new URLSearchParams(location.search).getAll('model').length > 0 ? new URLSearchParams(location.search).getAll('model') : ["yeezy350", "jordanHigh", "dunkLow"];
    const [ checkedItems, setCheckedItems ] = useState(initialState);
    const [ modelResults, setModelResults ] = useState([]);
    const [ showModelMenu, setShowModelMenu ] = useState(false);
    const [ showBrandMenu, setShowBrandMenu ] = useState(false);

    const handleChange = (event, setShowMenu, showMenu, setChecked, checked) => {
        event.stopPropagation();
        setShowMenu(!showMenu)
        let newCheckedItems;
        if (event.target.checked) {
            if (checked.includes(event.target.name)) return;
            newCheckedItems = [...checked, event.target.name];
            setChecked(newCheckedItems);
        } else {
            newCheckedItems = checked.filter(item => item !== event.target.name);
            setChecked(newCheckedItems);
        }
        getFilterData(newCheckedItems);
    };

    const brandCheckboxes = [
        {
            id: "adidas",
            label: "Adidas"
        },
        {
            id: "nike",
            label: "Nike"
        },
    ];

    const modelCheckboxes = [
        {
            name: "yeezy350",
            label: "Yeezy Boost 350"
        },
        {
            name: "jordanHigh",
            label: "Air Jordan 1 High"
        },
        {
            name: "dunkLow",
            label: "Dunk Low"
        }
    ];

    useEffect(() => {
        setModelResults(brandResults.filter(element => initialState.some(checkedItem => checkedItem === element.modelid)))
    }, [brandResults]);

    const getFilterData = (newCheckedItems) => {
        const params = new URLSearchParams();
        setModelResults(brandResults.filter(element => newCheckedItems.some(newCheckedItem => newCheckedItem === element.modelid)));
        newCheckedItems.forEach(value => params.append('model', value));
        history.push({ pathname: location.pathname, search: params.toString() });
    };

    return (
        <>
            <button className="dropdown__button" onClick={(event) => {setShowModelMenu(!showModelMenu)}}>Model</button>
            <div className={`dropdown__content ${showModelMenu ? "show__model" : ""}`} onClick={event => event.stopPropagation()}>
                {modelCheckboxes.map(element => (
                    <div className="dropdown__checkbox" key={element.id}>
                        <input className="dropdown__icon" type="checkbox"  id={element.id} name={element.id}
                            checked={checkedItems.includes(element.id)} onChange={event => handleChange(event, setCheckedItems, checkedItems)} />
                        <label htmlFor={element.id}>{element.label}</label>
                    </div>
                ))}
            </div>
        </>
    );
}  
export default Dropdown;