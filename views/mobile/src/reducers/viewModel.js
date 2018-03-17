import { UPDATE_VIEW_MODEL } from '../actions'

const viewModel = (state = {}, action) => {

  switch(action.type){

    case UPDATE_VIEW_MODEL:
      return action.viewModel

    default:
      return state

  }

}

export default viewModel