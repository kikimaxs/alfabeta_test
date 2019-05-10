import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'stretch',
  //   justifyContent: 'center'
  // },
  textInput: {
    backgroundColor: '#ffffff',
    padding: 10,
    height: 40,
    margin: 10,
    borderRadius: 5
  },
  // button: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 40,
  //   margin: 10,
  //   borderRadius: 5,
  //   padding: 3,
  //   backgroundColor: '#88cc88'
  // },
  buttonTitle: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  // loginBox: {
  //   margin: 10
  // },
  // imageBox: {
  //   alignItems: 'center',
  //   marginTop: 20
  // },
  // image: {
  //   width: 120,
  //   height: 120
  // },
  // scrollView: {
  //   backgroundColor: '#2299ec'
  // },
  // avatar: {
  //   borderRadius: 75,
  //   width: 150,
  //   height: 150,
  //   marginLeft: 110,
  //   marginRight: 110,
  //   alignSelf:'center'
  // },

  container : {
    backgroundColor:'#455a64',
    paddingTop: '70%',
    paddingBottom: '20%',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  contain : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});
