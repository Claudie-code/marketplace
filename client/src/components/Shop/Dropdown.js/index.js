import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchModels } from '../../../lib/state/actions';

const Dropdown = ({ brandResults, setModelResults, brandCheckedItem }) => {
    const dispatch = useDispatch();
    const modelCheckboxes = [
        {
            _id: "yeezy350",
            name: "Yeezy Boost 350",
            brandid: "adidas"
        },
        {
            id: "jordanHigh",
            label: "Air Jordan 1 High",
            brandid: "nike"
        },
        {
            id: "dunkLow",
            label: "Dunk Low",
            brandid: "nike"
        }
    ]; 
    const { models } = useSelector(state => state.models);
    console.log("it", models)
    const ref = useRef();
    const history = useHistory();
    const location = useLocation();
    const initialState = new URLSearchParams(location.search).getAll('model').length > 0 ? new URLSearchParams(location.search).getAll('model') : models.map(model => model._id);
    const [ checkedItems, setCheckedItems ] = useState(initialState);
    const [ showMenu, setShowMenu ] = useState(false);
    
    

    const handleChange = (event) => {
        let newCheckedItems;
        if (event.target.checked) {
            if (checkedItems.includes(event.target.id)) return;
            newCheckedItems = [...checkedItems, event.target.id];
            setCheckedItems(newCheckedItems);
        } else {
            newCheckedItems = checkedItems.filter(item => item !== event.target.id);
            setCheckedItems(newCheckedItems);
        }
        getFilterSearchUrl(newCheckedItems);
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
    }, [showMenu]);

    const getFilterSearchUrl = (newCheckedItems) => {
        console.log("modelid", newCheckedItems, brandResults)
        const params = new URLSearchParams();
        setModelResults(brandResults.filter(element => newCheckedItems.some(newCheckedItem => newCheckedItem === element.modelid)));
        newCheckedItems.forEach(value => params.append('model', value));
        history.push({ pathname: location.pathname, search: params.toString() });
    };

    useEffect(() => {
        setModelResults(brandResults.filter(element => checkedItems.some(checkedItem => checkedItem === element.modelid)));
    }, [location.pathname, brandResults]);

    useEffect(() => {
        dispatch(fetchModels());
    }, []);

    return (
        <div ref={ref}>
            <button className="dropdown__button" onClick={() => setShowMenu(!showMenu)}>Model</button>
            <div className={`dropdown__content ${showMenu ? "show__model" : ""}`} 
                onClick={event => event.stopPropagation()}>
                {models.map(element => {
                    if (brandCheckedItem === "allproducts") {
                        return (
                            <div className="dropdown__checkbox" key={element._id}>
                                <input className="dropdown__icon" type="checkbox"  id={element._id} name={element._id}
                                    checked={checkedItems.includes(element._id)} onChange={handleChange} />
                                <label htmlFor={element._id}>{element.name}</label>
                            </div>
                        );
                    } else if (element.brand === brandCheckedItem) {
                        return (
                            <div className="dropdown__checkbox" key={element._id}>
                                <input className="dropdown__icon" type="checkbox"  id={element._id} name={element._id}
                                    checked={checkedItems.includes(element._id)} onChange={handleChange} />
                                <label htmlFor={element._id}>{element.name}</label>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}  
export default Dropdown;