import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { restaurantLiistReducer } from './Reducers/restaurantReducer';

const reducers = combineReducers({
    restaurantReducer:restaurantLiistReducer

})

const middleware =[thunk]
//store

const store = createStore(reducers,applyMiddleware(...middleware))

export default store