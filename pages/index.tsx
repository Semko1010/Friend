// @generated: @expo/next-adapter@2.1.9
import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Dimensions,Image, Button} from 'react-native'
import Link from 'next/link'

import MapView, { Marker,Callout} from "react-native-maps";
import MapViews from "./components/mapView/MapViews"
import * as Location from 'expo-location';
export default function App() {

type coordinates ={
  // accuracy: number,
  // altitude: number,
  // altitudeAccuracy: number,
  // heading: number,
  longitude: number;
  latitude: number
  
  
}

  const [location, setLocation] = useState<coordinates | undefined>();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [ info, setInfo] = useState<boolean>(false)


const test = () =>{
  setInfo(!info)
}

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log(location.coords);
      
    })();
  }, []);
  return (
    <View style={styles.container}>
      <MapViews/>
  
     
    </View>
  )
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
  infos:{
    width: "100%",
    height: 150,
    backgroundColor: 'white',
    textAlign: 'center',
    flexDirection:"row"
  },
  infosText:{
    flexDirection:"column"
  },
  userImg:{
    width: 80,
    height: 80,
    borderRadius:80
  },
  button:{width: 150, height: 50}
});

