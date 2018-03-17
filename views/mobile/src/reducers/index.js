import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import loading from './loading'
import viewModel from './viewModel'

const triviaApp = combineReducers({
  loading,
  viewModel
})

const store = createStore(triviaApp, applyMiddleware(thunk))
export default store