import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { productsReducer } from "./reducer/productsReducer";
import { authReducer } from "./reducer/authreducer";

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
