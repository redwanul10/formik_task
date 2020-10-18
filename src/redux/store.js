import { createStore } from 'redux'
import DonorReducer from './reducer/donorReducer'

const store = createStore(DonorReducer)

export default store