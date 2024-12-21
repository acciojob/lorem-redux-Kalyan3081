import { applyMiddleware, createStore } from "redux";
import reducerLorem from "./reducerLorem";
import { thunk } from "redux-thunk";

const store = createStore(reducerLorem, applyMiddleware(thunk));

export default store
