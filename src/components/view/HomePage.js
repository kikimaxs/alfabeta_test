import React, {Component} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import { Button, Content, View, Container, Header, Left, Body, Right, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { restoreSession, logoutUser } from '../../redux/action/index';
import datas from '../../../JSON/dummy.json'
import MapList from '../common/MapList'
import Polyline from '@mapbox/polyline';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
    isLoading: true,
    dataSource:[],
    error: null,
    idUser:'',
    token:'',
  //   coordinate: ([{
  //     latitude: -77.1234,
  //     longitude: 38.8951,
  //   },
  //   {
  //     latitude: -77.1234,
  //     longitude: 38.8952,
  //   },
  //   {
  //     latitude: -77.1234,
  //     longitude: 38.8953,
  //   },
  //   {
  //     latitude: -77.1234,
  //     longitude: 38.8954,
  //   },
  //   {
  //     latitude: -77.1234,
  //     longitude: 38.8955,
  //   },
  //   {
  //     latitude: -77.1234,
  //     longitude: 38.8956,
  //   },
  //   {
  //     latitude: -77.1234,
  //     longitude: 38.8957,
  //   },
  //   {
  //     latitude: -77.1234,
  //     longitude: 38.8958,
  //   },
  //   {
  //     latitude: -77.1234,
  //     longitude: 38.8959,
  //   },
  //   {
  //     latitude: -77.1234,
  //     longitude: 38.8950,
  //   },
  //   {
  //     latitude: -77.1234,
  //     longitude: 38.8967,
  //   }
  //  ]),
    };
  }
  componentDidMount() {
    this.props.restore()
    
    // return fetch("https://gist.githubusercontent.com/kikimaxs/bbf358e50a3614fd67f3c8b9a3500c4f/raw/30b4f43ac86676ba22c27b116de11d55c9929dd9/api.json")
    // .then((Response) => Response.json())
    // .then((datas) => {
    //   this.setState({
    //     isLoading:false,
    //     idUser:datas.id_user,
    //     token:datas.token,
    //     data:datas.data
    //   });
    // })
    // .catch((error) =>{
    //   console.log(error);
    // })
  }
 
  logout = () => {
    this.props.logout();
    setTimeout(() => {
      Actions.reset('login');
    }, 100);
  };
  render() {
    const isLogged = this.props.logged;
    return (
      <Container style={styles.container}>
           
            {
                isLogged ? (
                    <Content>
                    <Header>
                        <Left>
                           <Text>{this.props.user.email}</Text>
                        </Left>
                        
                        <Right>
                        <Button transparent onPress={this.logout}>
                          <Text>Logout</Text>
                        </Button>
                        </Right>
                    </Header>
                      <Container>
                      <MapList/>
                        </Container>
                    </Content>
                ) : (
                    <Content>
                      <Header>
                        <Left>
                           <Text>Unknown User</Text>
                        </Left>
                        
                        <Right>
                        <Button transparent onPress={() => Actions.login()}>
                          <Text>Login</Text>
                        </Button>
                        </Right>
                    </Header>
              <Text style={styles.welcome}>You must Login</Text>
              </Content>
                )
            }
          </Container>
        );
      }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = ({routes ,sessionReducer: {logged, user} }) => ({
  routes: routes,
  user: user,
  logged: logged,
})
 
const mapDispatchToProps = {
  restore: restoreSession,
  logout: logoutUser
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)