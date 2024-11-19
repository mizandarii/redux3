import { createStore, applyMiddleware, compose, combineReducers } from 'redux'; // добавлен импорт combineReducers
import heroes from '../reducers/heroes'; // импорт редюсера heroes
import filters from '../reducers/filters'; // импорт редюсера filters

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action);
};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const store = createStore(
    combineReducers({ heroes, filters }), 
    compose(
        applyMiddleware(stringMiddleware), 
        devTools
    )
);

export default store;
