import { ActionTypes } from '../action-types/actionTypes';
import { Actions } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: null;
  data: string[];
}

const initailStates = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: RepositoriesState = initailStates, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITERIES:
      return { loading: true, error:null, data:[] };
    case ActionTypes.SEARCH_REPOSITERIES_SUCCESS:
      return { loading: false, error:null, data:action.payload };
    case ActionTypes.SEARCH_REPOSITERIES_ERROR:
      return { loading: false,error:null,data:[]};
    default:
      return state;
  }
};

export default reducer