import { combineReducers } from 'redux'
import prodouctReducer from './prodoucts/prodouctReducer'
import cartReducer from './cart/cartReducer'
const rootReducer = combineReducers({
    prodoucts: prodouctReducer,
    cart: cartReducer,
})
export default rootReducer;