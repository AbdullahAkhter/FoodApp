import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity, Pressable } from "react-native"
import { MapPin } from "react-native-feather"
import { useRouter } from "expo-router"
import { useEffect } from "react"
import { urlFor } from "../sanity"
export default function ResturantCard({ item }) {
    const router = useRouter()

    let dishes = JSON.stringify(item.dishes);


    let image = JSON.stringify(item.image)
    let params = { ...item, imageurl: image, dish: dishes }
    
    useEffect(() => {

    }, [])
    return (
      
        <Pressable
           onPress={() => router.push({
                pathname: "./RestaurantScreen",
                params:params
            })}
            style={{width:200,
                
                
            }}
            >

            <View
                style={{ margin: 6, backgroundColor: "#cdcdcd", width: 200, height: 200, borderRadius: 20 }}>
                <Image
                    style={{
                        height: 120,
                        width: 200,
                        borderRadius: 25
                    }}
                    source={{ uri: urlFor(item.image).url() }}
                />
                <View
                    style={{

                    }}>
                 
                    <View
                        style={{ paddingLeft: 8 }}>

                        <Text
                        >
                            <Image
                                source={{ uri: urlFor(item.image).url() }}
                                style={{
                                    height: 11,
                                    width: 11
                                }} />
                            
                            <Text style={{ color: "green" }}>{item.ratting}<Text style={{ fontSize: 20 }}>.</Text></Text>
                            <Text style={{ color: "gray" }}>{item.reviews}</Text>
                            <Text style={{ color: "gray" }}>reviews <Text style={{ fontSize: 20 }}>.</Text></Text>

                           
                        </Text>
                        <View
                            style={{ flexDirection: "row", gap: 7 }}>
                            <MapPin
                                height={20}
                                width={20}
                                color={"gray"} />
                            <Text>{item.address}</Text>
                        </View>

                    </View>
                </View>
            </View>

    
            
            
        </Pressable>
        
    )
}
