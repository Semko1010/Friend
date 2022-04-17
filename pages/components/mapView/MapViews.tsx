import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Dimensions,Image, Button} from 'react-native'
import Link from 'next/link'
import {Svg, Image as ImageSvg} from 'react-native-svg';
import MapView, { Marker,Callout} from "react-native-maps";
import MarkerFetch from "../../components/mapView/markerFetch/MarkerFetch"
import * as Location from 'expo-location';
import Markers from "../mapView/marker/Marker"
import Api from "../../api/Api.json"
const MapViews = (props:Props) =>{


    type coordinates ={
        longitude: number;
        latitude: number
} 
    const [location, setLocation] = useState<coordinates | undefined>();
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [ info, setInfo] = useState<boolean>(true)
   

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
console.log(Api);

    return(
        <View style={styles.container}>
     {location   &&(
       <View>
         
     <MapView
				style={styles.map}
				initialRegion={{
					latitude: location.latitude,
					longitude: location.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				provider='google'>
				
        {/* <MarkerFetch/> */}
        {Api.map(e => 
        
        
    <Markers
    latitude={e.latitude}
    longitude={e.longitude}
    name={e.name}
    img={e.img}
    
    
    />
    
    
    
)}
    </MapView>

    {/* INFO VIEW*/}
    {info &&(
    <View style={styles.infos}>
      <View style={styles.infosText}> 
            <Text>{props.name}</Text>
            <Text>Fussball</Text>
            <Text>Sport</Text>
            <Text>32 Jahre</Text>
            </View>
        <View style={styles.button}>
            <Button 
      
            onPress={() => alert("hex")}
            title="Nachricht senden"
            />
        </View>

    </View>
    )}
      </View>
     )}
     
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
  

export default MapViews