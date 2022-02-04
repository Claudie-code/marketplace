import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchModels } from '../../../lib/state/actions';

const Dropdown = ({ brandResults, setModelResults, brandCheckedItem }) => {
    const dispatch = useDispatch();
    const { models } = useSelector(state => state.models);
    const ref = useRef();
    const history = useHistory();
    const location = useLocation();
    const initialState = new URLSearchParams(location.search).getAll('model').length > 0 ? new URLSearchParams(location.search).getAll('model') : models.map(model => model.id);
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
        const params = new URLSearchParams();
        setModelResults(brandResults.filter(element => newCheckedItems.some(newCheckedItem => newCheckedItem === element.modelid)));
        newCheckedItems.forEach(value => params.append('model', value));
        history.push({ pathname: location.pathname, search: params.toString() });
    };

    useEffect(() => {
        setModelResults(brandResults.filter(element => checkedItems.some(checkedItem => checkedItem === element.modelid)));
    }, [location.pathname, brandResults, checkedItems]);

    useEffect(() => {
        setCheckedItems(new URLSearchParams(location.search).getAll('model').length > 0 ? new URLSearchParams(location.search).getAll('model') : models.map(model => model.id));
    }, [location.search, brandResults]);

    useEffect(() => {
        dispatch(fetchModels());
    }, []);

    return (
        <div ref={ref}>
            <button className="dropdown__button" onClick={() => setShowMenu(!showMenu)}>Model</button>
            <div className={`dropdown__content ${showMenu ? "show__model" : ""}`} 
                onClick={event => event.stopPropagation()}>
                {models?.map(element => {
                    if (brandCheckedItem === "allproducts") {
                        return (
                            <div className="dropdown__checkbox" key={element.id}>
                                <input className="dropdown__icon" type="checkbox"  id={element.id} name={element.id}
                                    checked={checkedItems.includes(element.id)} onChange={handleChange} />
                                <label htmlFor={element.id}>{element.name}</label>
                            </div>
                        );
                    } else if (element.brandid === brandCheckedItem) {
                        return (
                            <div className="dropdown__checkbox" key={element.id}>
                                <input className="dropdown__icon" type="checkbox"  id={element.id} name={element.id}
                                    checked={checkedItems.includes(element.id)} onChange={handleChange} />
                                <label htmlFor={element.id}>{element.name}</label>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}  
export default Dropdown;