import {createStore,combinereducer,applyMiddleware} from 'redux';  
import thunk from 'redux-thunk';
import {composewithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({

})

let initialState = {}

const middlware = [thunk];

const stor = createStorre(reducer,initialState,composewithDevTools(applyMiddleware(...middleware)))

export default StorageEstimate;