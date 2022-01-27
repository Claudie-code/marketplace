export const SET_SECTION = 'SET_SECTION';

export function setSection(id) { 
    return {
      type: SET_SECTION,
      payload: { id }
    };
}