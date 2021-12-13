import reducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
