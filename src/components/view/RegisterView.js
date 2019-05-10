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
import Form from '../../components/Form';
import {styles} from '../common/BasicForm/styles'

import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { userRegister } from '../../redux/action';

class Signup extends Component{
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

  goBack() {
      Actions.pop();
  }

	render() {
    console.log('bisa daftar nggak', this.props)
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
             <Text style={styles.signupText}>Already have an account?</Text>
             <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
          </View>  
  		</View>
				
			)
	}
}

// const styles = StyleSheet.create({
//   container : {
//     backgroundColor:'#455a64',
//     flex: 1,
//     alignItems:'center',
//     justifyContent :'center'
//   },
//   signupTextCont : {
//   	flexGrow: 1,
//     alignItems:'flex-end',
//     justifyContent :'center',
//     paddingVertical:16,
//     flexDirection:'row'
//   },
//   signupText: {
//   	color:'rgba(255,255,255,0.6)',
//   	fontSize:16
//   },
//   signupButton: {
//   	color:'#ffffff',
//   	fontSize:16,
//   	fontWeight:'500'
//   }
// });


 
export default Signup;