import { connect } from 'react-redux';
import { fetchProfile } from '../actions/actions_profile';

import AppComponent from '../components/App'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => {
      dispatch(fetchProfile())
    }
  }
}

const App = connect(
  false,
  mapDispatchToProps
 
)(AppComponent);

export default App;
