import { connect } from 'react-redux';
import ShowAll from '../components/todolist/showall';
import { actiontoggletodo } from '../redux/action';

const mapStateToProps = state =>{
  return {
    todolist:state.Todolist
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    toggletodo:(id) =>{
      dispatch(actiontoggletodo(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowAll)