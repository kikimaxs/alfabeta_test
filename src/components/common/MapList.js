import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text } from 'native-base'
import MapView from 'react-native-maps'

class MapList extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[],
      error: null,
      idUser:'',
      token:'',
      markers: [{
      coordinates:{
          latitude: -77.1234,
          longitude: 38.8951,
        },
      },
      {
       coordinates:{
          latitude: -77.1234,
          longitude: 38.8952,
        },
      },
      {
        coordinates:{
          latitude: -77.1234,
          longitude: 38.8953,
        },
      },
        {
          coordinates:{
          latitude: -77.1234,
          longitude: 38.8954,
        },
      },
        {
          coordinates:{
          latitude: -77.1234,
          longitude: 38.8955,
        },
      },
        {
          coordinates:{
          latitude: -77.1234,
          longitude: 38.8956,
        },
      },
        {
          coordinates:{
          latitude: -77.1234,
          longitude: 38.8957,
        },
      },
        { 
          coordinates:{
          latitude: -77.1234,
          longitude: 38.8958,
        },
      },
        {
          coordinates:{
          latitude: -77.1234,
          longitude: 38.8959,
        },
      },
        {
          coordinates:{
          latitude: -77.1234,
          longitude: 38.8950,
        },
      },
        {
          coordinates:{
          latitude: -77.1234,
          longitude: 38.8967,
        },
      }]
    }
  }
  render() {
    return (
            <Container>
                    <MapView 
                        style={styles.map}
                        showsUserLocation={true}
                        followUserLocation={true}
                        zoomEnabled={true}
                        >
                        {this.state.markers.map(marker =>(
                        <MapView.Marker 
                          coordinate={marker.coordinates}
                          title={"datas.id_user"}
                          description={"datas.token"}
                        />
                        ))}
                      </MapView>      
            </Container>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
  },
});


export default MapList;