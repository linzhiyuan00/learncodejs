import { combineReducers } from 'redux';


function buttontouch(state=false,action){
  switch(action.type){
    case 'start':
      return action.touch
    case 'after':
      return action.touch
    default:
      return state
  }
}

export default combineReducers({
  buttontouch
})