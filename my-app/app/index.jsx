import { StatusBar } from "expo-status-bar"
import { Text, TextInput, View, } from "react-native"
import { MapPin, Search, Sliders } from "react-native-feather"
import { SafeAreaView } from "react-native-safe-area-context"
import { featured } from "../constants/dummydata"
import { store } from "../redux/store"
import Categories from "./categories"
import FeaturedRow from "./FeaturedRow"
import { getfeaturedResturant } from "../Api"
import { useEffect, useState } from "react"
import { ScrollView } from "react-native"

export default function HomeScreen() {
    const[featuredresturant,setfeaturedresturant]=useState([])
    

    useEffect(()=>{
getfeaturedResturant().then((data)=>{
    console.log("Data is",data)
    console.log("Resturants are ",data[2].resturants);
setfeaturedresturant(data)
})


    },[])
    return (
        
    
        <SafeAreaView
            style={{
                backgroundColor: "white",
                

            }}>
                <ScrollView
                >
            <StatusBar

                style="dark" />

            <View
                style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    paddingRight: 15,
                    paddingLeft: 15,
                    marginTop: 10,
                    gap:5
                }}>
                <View
                    style={{
                        justifyContent: "space-between", borderWidth: 1,
                        flexDirection: "row",
                        borderColor: "gray",

                        borderRadius: 100,
                        flex: 1,
                        paddingLeft: 5,
                        paddingRight: 6


                    }}>
                    <View
                        style={{
                            paddingLeft: 5,
                            gap: 2,
                            justifyContent: "flex-start",
                            flexDirection: "row"
                        }}>
                        <Search
                            height="30"
                            width="30"
                            stroke={"gray"}
                            style={{ paddingTop: 49 }} />
                        <TextInput
                            placeholder="Resturants" />
                    </View>

                    <View
                        style={{ justifyContent: "space-between", flexDirection: "row", gap: 3 }}>
                        <View style={{
                            width: 1,
                            height: 50,
                            backgroundColor: "black"
                        }}></View>
                        <MapPin
                            height={20}
                            width={20}
                            color={"gray"}
                            style={{ paddingTop: 50 }} />
                        <Text
                            style={{ paddingTop: 15 }}>NewYork,NYC</Text>
                    </View>
                </View>
                <View
                style={{height:30,
                    width:30,
                    borderRadius:50,
                    backgroundColor:'#cdcdcd',
                    justifyContent:"center",
                    alignItems:"center",
                    marginTop:10
                }}>
                    <Sliders
                    height={20}
                    width={20}
                    color={"brown"}
                    />
                    </View>
                
            </View>
            <Categories/>
         <View
            style={{marginTop:5}}>
                
                   { featuredresturant.map((item,index)=>{
                        return(
                            <FeaturedRow
                            key={index}
                            name={item.name}
                            restaurants={item.resturants}
                            description={item.description}/>
                        )

                
 } )}
            </View>
            </ScrollView>
        </SafeAreaView>
        
    )
}