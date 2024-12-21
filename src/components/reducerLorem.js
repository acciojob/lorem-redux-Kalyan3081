import {
    FETCH_LOREM_LOADING,
    FETCH_LOREM_SUCCESS,
    FETCH_LOREM_FAILURE,
} from "./actions"

const intialState = {
    loading: false,
    lorem: [],
    error: null,
};

const reducerLorem = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_LOREM_LOADING:
            return { ...state, loading: true, error: null }
        case FETCH_LOREM_SUCCESS:
            return { ...state, loading: false, lorem: action.payload, error: null }
        case FETCH_LOREM_FAILURE:
            return { ...state, loading: false, lorem: [], error: action.payload }
        default:
            return state
    }

}

export default reducerLorem
