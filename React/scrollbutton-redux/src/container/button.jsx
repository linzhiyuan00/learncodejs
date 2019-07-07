import { connect } from 'react-redux';
import Button from '../components/button/button';
import {actionclickstart,actionclickafter} from '../redux/action';

const mapStateToProps = (state) =>{
  return{
    touch: state.buttontouch
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    clickstart:(touch) =>{
      dispatch(actionclickstart(touch))
    },
    clickafter:(touch) =>{
      dispatch(actionclickafter(touch))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Button)