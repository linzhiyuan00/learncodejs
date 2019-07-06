import * as ActionTypes from './actionType';

export function actionaddtodo(todo){
  return{
    type: ActionTypes.ADDTODOLIST,
    todo
  }
}

export function actiontoggletodo(id){
  return{
    type:ActionTypes.TOGGLETODOLIST,
    id
  }
}