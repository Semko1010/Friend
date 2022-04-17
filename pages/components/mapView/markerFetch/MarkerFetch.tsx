import Api from "../../../api/Api.json"
import Marker from "../marker/Marker"
import { StyleSheet, Text, View ,Dimensions,Image, Button} from 'react-native'
const MarkerFetch = () =>{
    
    
    return(<>
    

    
    {Api.map(e => 
    <Marker
    latitude={e.latitude}
    longitude={e.longitude}
    name={e.name}
    img={e.img}
    
    
    />
    
)}

    </>)
}


export default MarkerFetch