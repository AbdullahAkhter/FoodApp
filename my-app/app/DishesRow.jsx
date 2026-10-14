import { Image, Text, TouchableOpacity, View } from "react-native";
import { Minus, Plus } from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart, remove_from_cart, selecteditemsbyid } from "../redux/slices";
import { urlFor } from "../sanity";
export default function DishesRow({dish}){
    console.log("Dish is",dish)
    const dispatch=useDispatch();
    const totalitems=useSelector(state=>selecteditemsbyid(state,dish.id))
    const handledecrease=()=>{
        dispatch(remove_from_cart(dish.id))
    }

     const handleincrease=()=>{
        dispatch(add_to_cart({...dish}))
    }

    return(
        <View
        style={{flexDirection:"row",backgroundColor:"white",
            marginBottom:10,

            borderRadius:24,
            width:350,
            borderWidth:1,
            borderColor:"#cdcdcd"
        
            
        }}>
            <View
            style={{
                justifyContent:'center',
                alignItems:"center",
                flexDirection:'row',
                paddingLeft:8
            }}>
        
            <Image
            source={{uri:urlFor(dish.image).url()}}
            style={{width:60,
                height:60,
                
            }}/>
        </View>


           
        
         <View
            style={{paddingTop:10,paddingLeft:18}}>
                <View>
                    <Text
                    style={{
                        fontSize:15
                    }}>{dish.name}</Text>
                    <Text>{dish.description}</Text>
                </View>
                <View
                style={{marginTop:10,
                    flexDirection:"row",
                    justifyContent:"space-between",
                

                }}>
                    <Text
                    style={{fontSize:15}}>${dish.price}</Text>
                    <View
                    style={{
                        justifyContent:"space-between",
                        flexDirection:"row",
                        gap:4,
                        
                    
                        marginLeft:150

                        
                    }}
                    >

                        <TouchableOpacity
                        style={{
                            backgroundColor:"brown",
                            borderRadius:24,
                            

                        }}
                       
                        onPress={handledecrease}>
                            <Minus
                            height={20}
                            width={20}
                            color={"white"}
                            />
                        </TouchableOpacity>
                        <Text>{totalitems.length}</Text>

                        <TouchableOpacity
                        style={{
                            backgroundColor:"brown",
                            borderRadius:24

                        }}
                        onPress={handleincrease}>
                            <Plus
                            height={20}
                            width={20}
                            color={"white"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}