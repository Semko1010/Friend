// @generated: @expo/next-adapter@2.1.9
import React, {useState,useEffect,createContext} from 'react'
import { StyleSheet, View ,Dimensions} from 'react-native'
import MapViews from "./components/mapView/MapViews"

interface user{
  img:string
  latitude:number,
  longitude:number,
  name:string
}

type settName = {
  info: user[],
  setInfo:React.Dispatch<React.SetStateAction<user[]>>
}

const userInfo = createContext<settName>({} as settName)

export default function App() {
const [ info, setInfo] = useState<user[]>([])

 



  return (
    <View style={styles.container}>
      <userInfo.Provider value={{info,setInfo}}>
      <MapViews/>
      </userInfo.Provider>
     
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

export {userInfo}