import { useRouter } from "expo-router"
import{View,Text,Image} from "react-native"
import { ZoomOut } from "react-native-reanimated"
import { ZoomIn } from "react-native-reanimated"
import  Animated from "react-native-reanimated"
import { useEffect } from "react"

export default function OrderScreen(){
    const router=useRouter();
    useEffect(()=>{setTimeout(()=>{
        router.push("./DeliveryScreen")
    },3000)},[])
    return(
        <Animated.View
        
        entering={ZoomIn.duration(500)}
        exiting={ZoomOut.duration(500)}
        style={{
            flex:1,
            justifyContent:'center',
            alignItems:"center"
        }}>

        <View
       >
            <Image
            source={{uri:"https://tse3.mm.bing.net/th/id/OIP.C8G4rbRJGfvTXWAZyvZj-wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"}}
            style={{
                height:200,
                width:250
            }}/>
        </View>
        </Animated.View>
    )
}