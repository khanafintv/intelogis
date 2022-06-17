import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer1 } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { modalWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  reducer1,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(modalWatcher);
