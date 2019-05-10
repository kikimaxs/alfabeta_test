import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Logo from '../../components/Logo';
import {styles} from '../common/BasicForm/styles'

import {Actions} from 'react-native-router-flux';

class Login extends Component{
  state = {
    email:'',
    password:''
  };
  handleEmailChange = email => this.setState({ email });
  handlePasswordChange = password => this.setState({ password });

  handleButtonPress = () => {
    const { email, password } = this.state;
    this.props.onButtonPress(email, password);
  };

	signup() {
		Actions.signup()
	}

	render() {
    console.log('bisa login nggak', this.props)
    const { email, password } = this.state; 
    const { buttonTitle } = styles;
		return(
				<View style={styles.container}>
        <Logo/>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              autoCapitalize="none"
              onChangeText={this.handleEmailChange}
              selectionColor="#fff"
              returnKeyType="next"
              value={email}
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
               underlineColorAndroid='rgba(0,0,0,0)' 
               placeholder="Password"
               secureTextEntry={true}
               placeholderTextColor = "#ffffff"
               returnKeyType="done"
               value={password}
               onChangeText={this.handlePasswordChange}
               ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button}>
             <Text onPress={this.handleButtonPress} style={buttonTitle}>{this.props.buttonTitle}</Text>
           </TouchableOpacity>     
        <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
  		</View>
				
			
			)
	}
}


export default Login;