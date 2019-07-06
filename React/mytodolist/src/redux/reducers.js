import { combineReducers } from 'redux';
import * as Actiontypes from './actionType';

function Todolist (state=[],action){
  switch(action.type){
    case Actiontypes.ADDTODOLIST:
      let id = state.length;
      return [
        {
          todo:action.todo,
          id,
          completed:false
        },
        ...state
      ]
    case Actiontypes.TOGGLETODOLIST:
      return state.map(e =>{
        if(e.id === action.id){
          e.completed = !e.completed
        }
        return e
      })
    default:
      return state;
  } 
}
export default combineReducers({
  Todolist
})