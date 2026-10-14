import { useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

import { cartTotal } from "../redux/slices"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
export default function CartView(){
    
    const restaurant = useSelector(state => state.restaurant.restaurant)
    const router=useRouter()
    const selectedItems=useSelector(state=>state.cart.items)

         const totalitems = selectedItems.filter(
  item => item.resturant === restaurant.name
).length

const total = selectedItems.filter(
  item => item.resturant === restaurant.name
).reduce((total,item)=>total=total+item.price,0)
    
   
    

    return(
        <View
        style={{justifyContent:"center",
            flexDirection:"row",
           
           
            height:200,
           marginBottom:20,
            position:"absolute",
            bottom:0,
        
        
        }}>
            <TouchableOpacity
            style={{
                justifyContent:"space-between",
                flexDirection:"row",
                width:330,
                height:60,
                backgroundColor:"orange",
                borderRadius:50,
               
            position:"absolute",
            top:189,

           
        
            paddingHorizontal:30,
            paddingTop:15,
            marginLeft:350
            

            }}
            onPress={()=>router.push("./cartScreem")}>
                <View
                style={{
                    width:30,
                    height:30,
                    borderRadius:24,
                    backgroundColor:"white",
                    paddingLeft:12,
                    paddingTop:5,jfjfjf
                    shadowColor:"rgba(0,0,0,0.4)",
                    shadowOffset:{width:2,height:2},
                    shadowRadius:4,
                    opacity:0.5,
                    
                }}>dmdmdmdmd
                    <Text>{totalitems}</Text>
                </View>
                <Text
                style={{
                    fontSize:20,
                    color:"white",
                    textShadowColor: "rgba(0,0,0,0.4)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
                }}>View cart</Text>
                <Text
                 style={{ color:"white",
                    marginTop:5,
                     textShadowColor: "rgba(0,0,0,0.4)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
                    
                }}>${total}</Text>

            </TouchableOpacity>
        </View>
       
    )
}