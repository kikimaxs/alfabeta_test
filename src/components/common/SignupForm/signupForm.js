import React, { Component } from 'react';
import { View, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
import { BasicFormComponent } from '../BasicForm/basicForm';
import { styles } from '../BasicForm/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { signupUser } from '../../../redux/action/index';
import RegisterView from '../../view/RegisterView'


class SignupFormComponent extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.registered) Actions.reset('home');
  }

  render() {
    const { signup } = this.props;
    const { scrollView  } = styles;
    return (
      <KeyboardAwareScrollView >
        <View>
            <RegisterView buttonTitle={'register'} onButtonPress={signup} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ routes, sessionReducer: { error, registered } }) => ({
  routes: routes,
  error: error,
  registered: registered
});

const mapDispatchToProps = {
  signup: signupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormComponent);
