import * as React from 'react';
import MapView, { Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
         initialRegion={{
          latitude: 7.318237,
          longitude: 80.626133,
          latitudeDelta: 0.0005,
          longitudeDelta: 0.0005,
        }}
      >
        <Marker
        coordinate={{latitude: 7.318237, longitude: 80.626133}}
        title="Coordinate 01"
        pinColor='red'
        ></Marker>
        {/* <Circle center={{latitude: 7.318237, longitude: 80.626133}}
        radius={100}
        ></Circle> */}
    
        <Marker
        coordinate={{latitude: 7.317180, longitude: 80.626346}}
        title="Coordinate 02"
        pinColor='red'
        ></Marker>
        {/* <Circle center={{latitude: 7.317335, longitude: 80.626346}}
        radius={100}
        ></Circle> */}

        <Marker
        coordinate={{latitude: 7.317503, longitude: 80.626910}}
        title="Coordinate 03"
        pinColor='red'
        ></Marker>
        {/* <Circle center={{latitude: 7.317503, longitude: 80.626910}}
        radius={100}
        ></Circle> */}

<Marker
        coordinate={{latitude: 7.317400, longitude: 80.626200}}
        title="Sound Source"
        pinColor='blue'
        ></Marker>
        {/* <Circle center={{latitude: 7.317335, longitude: 80.626346}}
        radius={100}
        ></Circle> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
