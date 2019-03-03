
import api from '../../api';

const DUCK_NAME = 'Home';

// ACTION TYPES
export const SEARCH = `${DUCK_NAME}/SEARCH`;
export const SEARCH_IN_PROGRESS = `${DUCK_NAME}/SEARCH_IN_PROGRESS`;

const initialState = {
  numberOfSearches: 0,
  data: [],
  searchInProgress: false
};

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        numberOfSearches: state.numberOfSearches + 1,
        data: action.payload
      };
    case SEARCH_IN_PROGRESS:
      return {
        ...state,
        searchInProgress: action.payload
      }
    default:
      return state;
  }
}

// ACTION CREATORS
export const searchActionCreator = (data) => { return { type: SEARCH, payload: data }; };
export const searchInProgressActionCreator = (state) => { return { type: SEARCH_IN_PROGRESS, payload: state }; };

// THUNKS
export function search(query) {
  return async (dispatch) => {
    try {
      dispatch(searchInProgressActionCreator(true));
      const data = await api.fetchQueryResults(query);
      dispatch(searchActionCreator(data));
    }
    catch (ex) {
      console.log(ex);
    }
    finally {
      dispatch(searchInProgressActionCreator(false));
    }
  };
}
