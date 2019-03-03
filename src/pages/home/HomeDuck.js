
const DUCK_NAME = 'Home';

// ACTION TYPES
export const SEARCH = `${DUCK_NAME}/SEARCH`;

const initialState = {
  numberOfSearches: 0
};

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        numberOfSearches: state.numberOfSearches + 1
      };
    default:
      return state;
  }
}

// ACTION CREATORS
export const searchActionCreator = (query) => { return { type: SEARCH }; };

// THUNKS
export function search(query) {
  return dispatch => dispatch(searchActionCreator(query));
}
