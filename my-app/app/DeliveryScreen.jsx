import { useRouter } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { Phone, X } from "react-native-feather"
import MapView, { Marker } from "react-native-maps"
import { useDispatch, useSelector } from "react-redux"
import { emptyCart } from "../redux/slices"
export default function DeliveryScreen() {
    const restaurant = useSelector(state=>state.restaurant.restaurant)
    const router=useRouter()
    const dispatch=useDispatch()
    const cancelOrder=()=>{
            
            dispatch(emptyCart())
            router.push('.')
    
        }
    
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",

            }}>
            <MapView
                initialRegion={{
                    latitude: 12,
                    longitude: 12,
                    longitudeDelta: 0.2,
                    latitudeDelta: 0.2
                }}
                mapType="standard"
                style={{ flex: 1 }}
            >

                <Marker
                    coordinate={{
                        latitude: 12,
                        longitude: 12
                    }}
                    title={restaurant.name}
                    description="" />
            </MapView>
            <View
                style={{


                    backgroundColor: "white",
                    position: "relative",
                    marginTop:13


                }}>
                <View
                    style={{
                        flexDirection: "row",
                        backgroundColor:"white",
                        position: "absolute",
                        bottom:70,
                        

                        width: 360,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,




                    }}>
                    <View
                        style={{
                            paddingLeft: 20,
                            marginTop: 18
                        }}>
                        <Text

                            style={{
                                fontSize: 14,
                                textShadowColor: "rgba(0,0,0,0.5)",
                                textShadowOffset: { width: 2, height: 2 },
                                shadowRadius: 4

                            }}>Estimated Arrival</Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20
                            }}>20-30 Minutes</Text>
                        <Text>Your order is on its way</Text>
                    </View>

                    <Image
                        source={{ uri: "https://img.freepik.com/premium-photo/delivery-rider-with-digital-tracking-app_230115-8535.jpg" }}
                        style={{
                            width: 80,
                            height: 80,
                            marginLeft: 50

                        }} />



                </View>
                <View
                    style={{
                        backgroundColor: "orange",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingRight:40,
                       marginHorizontal:10,
                        borderRadius: 50,
                        marginTop:80,
                    


                    }}>


                    <Image
                        source={{ uri: "https://tse4.mm.bing.net/th/id/OIP.nWz9ILnDKIklrqawQh6PlQHaLG?w=996&h=1492&rs=1&pid=ImgDetMain&o=7&rm=3" }}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 50,
                            marginRight: 10
                        }} />
                        <View>
                             <Text
                        style={{fontSize:20,
                            fontWeight:"bold",
                            marginTop:14
                        }}>
                            Abdullah</Text>
                            <Text>Your Rider</Text>
                            </View>
                            
                       
                            <TouchableOpacity
                            style={{
                                marginTop:12,
                                height:38,
                                width:38,
                                borderRadius:24,
                                backgroundColor:"white",
                                paddingLeft:8,
                                paddingTop:6,
                                marginLeft:35
                            }}>
                                <Phone
                                height={24}
                                width={ 24}
                                color={"orange"}/>
                            </TouchableOpacity>

                             <TouchableOpacity
                            style={{
                                marginTop:12,
                                height:38,
                                width:38,
                                borderRadius:24,
                                backgroundColor:"white",
                                paddingLeft:8,
                                paddingTop:6
                            }}
                            onPress={cancelOrder}>
                                <X
                                height={24}
                                width={ 24}
                                color={"orange"}/>
                            </TouchableOpacity>


                </View>
            </View>
        </View>

    )
}