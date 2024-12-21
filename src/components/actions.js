export const FETCH_LOREM_LOADING = "FETCH_LOREM_LOADING";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

export const fetchLorem = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_LOREM_LOADING });

        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            // console.log(data)
            dispatch({ type: FETCH_LOREM_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_LOREM_FAILURE, payload: error.message });
            // dispatch({ type: FETCH_LOREM_FAILURE, payload: error })
        }
    }
}
