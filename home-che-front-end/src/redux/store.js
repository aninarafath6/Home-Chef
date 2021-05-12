import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));
export default store;
