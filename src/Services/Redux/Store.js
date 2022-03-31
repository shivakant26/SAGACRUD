import { applyMiddleware, createStore } from "redux";
import rootreducer from "./Reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootsaga from "./Sagas/crudsaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootreducer , applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootsaga);


export default store;