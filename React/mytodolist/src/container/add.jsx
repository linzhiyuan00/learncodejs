import { connect } from 'react-redux';
import Add from "../components/todolist/add";
import { actionaddtodo } from '../redux/action';


const mapDispatchToProps = (dispatch) => {
  return {
    addtodo: (todo) => {
      dispatch(actionaddtodo(todo))
    }
  }
}

export default connect(null, mapDispatchToProps)(Add)