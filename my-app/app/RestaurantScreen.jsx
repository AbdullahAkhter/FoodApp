import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeft, MapPin } from "react-native-feather";
import { useDispatch } from "react-redux";
import { setrestaurant } from "../redux/slices";
import CartView from "./CartView";
import DishesRow from "./DishesRow";
import { urlFor } from "../sanity";
export default function RestaurantScreen() {
    
    const router=useRouter()
    const params = useRoute();
    const paramdata = params.params
    const {imageurl}=params.params
    const{dish}=params.params
    const finalurl=JSON.parse(imageurl)
    console.log('paramdata is ',dish)
     const finaldish=JSON.parse(dish)


    {/*const finalurl=JSON.parse(imageurl)*/}

    
  
    const dispatch=useDispatch();
    
    useEffect(()=>{
        if(paramdata){
     dispatch(setrestaurant({...paramdata}))}
    },[])
    

    return (
        
        
        <View
            style={{
                flex: 1,
                backgroundColor: "#cdcdcd",
                marginBottom:30
        
            }}>
                
               
            <ScrollView
            >
                

                <View>
                    <View>
                       { <Image
                            source={{ uri:urlFor(finalurl).url()}}
                            style={{
                                width: 360,
                                height: 350,
                            }}/>}
                        <TouchableOpacity
                            style={{
                                position: "absolute",

                                backgroundColor: "orange",
                                borderRadius: 50,
                                height: 30,
                                width: 30,
                                marginTop: 20,
                                marginLeft: 20
                            }}
                            onPress={()=>router.back()}>
                            <ArrowLeft
                                height={30}
                                width={30}
                                color={"white"} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View>
                    <View
                        style={{
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            backgroundColor: 'white',
                            position: "absolute",
                            bottom: 0,

                            width: 375,
                            paddingHorizontal: 5,
                            

                        }}>
                        <View
                            style={{ paddingLeft: 20 }}>

                            <Text
                                style={{ fontSize: 18 }}>
                                {paramdata.name}
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row", gap: 4,

                                }}>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        gap: 4
                                    }}>
                                    <Image
                                        source={{ uri: "https://img.freepik.com/premium-psd/one-star-rating-png_1296627-6559.jpg" }}
                                        style={{
                                            height: 10, width: 10,
                                            marginTop: 5
                                        }} />

                                    <Text>4<Text
                                        style={{ fontSize: 15 }}>.</Text>
                                        <Text>|</Text></Text>

                                    <Text
                                        style={{

                                        }}>{paramdata.reviews}</Text>

                                    <Text>reviews</Text>
                                    <Text
                                    > {paramdata.category.name}</Text>


                                </View>
                                <View
                                    style={{ flexDirection: "row" }}>
                                    <MapPin
                                        height={15}
                                        width={15}
                                        color={"#cdcdcd"}
                                        />
                                    <Text
                                    style={{
                                        marginRight:220
                                    }}>{paramdata.address}</Text>
                                </View>
                            </View>
                            <View>
                                <Text>Pizza and Palace</Text>
                            </View>

                        </View>




                    </View>
                </View>
        <View
                    style={{ backgroundColor: "white" }}>
                    <Text
                        style={{ fontSize: 20,marginLeft:10,
                            marginBottom:12,marginTop:5
                        }}>Menu</Text>
                    {
                        finaldish.map((item, index) => {
                            return <DishesRow dish={item} />

                        })
                    }

                     

                </View>
                 

            </ScrollView>
             <CartView/>
           
        </View>
        
        
    )
}



