import { SET_SECTION } from '../actions/sectionAction';

const initialState = {
    section: "shop", 
};

const section = (state = initialState, {type, payload}) => { 
    switch (type) { 
        case SET_SECTION:
        return {
            section: payload.id, 
        }
    default:
      return state;
    } 
}
export default section;