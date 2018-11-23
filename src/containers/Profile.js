import { connect } from 'react-redux';
import { saveProfile } from '../actions/actions_profile';

import ProfileComponent from '../components/Profile';

const mapStateToProps = state => {
  return {
    profile : state.profile,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveProfile: (profile) => {
      dispatch(saveProfile(profile))
    }
  }
}

const Profile = connect(
  mapStateToProps,
  mapDispatchToProps
 
)(ProfileComponent);

export default Profile;
