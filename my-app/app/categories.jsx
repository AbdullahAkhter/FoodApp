import{View,Text, ScrollView, TouchableOpacity,Image} from "react-native"
import { categories } from "../constants/dummydata"
import { useEffect, useState } from "react"
import { getcategory } from "../Api"
import{urlFor} from "../sanity"
export default function Categories(){
    const[activecategory,setcategory]=useState()
    const[category,setcategory1]=useState([])
    useEffect(()=>{
        getcategory().then((data)=>{
        
            setcategory1(data)
        })
    },[])
    return(
        <View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:20,gap:10,marginTop:10}}
            style={{gap:5}}>
                
{category.map((item,index)=>{

let isActive=item.id==activecategory
    return(

        <TouchableOpacity
        onPress={()=>setcategory(item.id)}
        key={index}
       >
       <View
       style={{width:70,
        height:100,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#cdcdcd",
        borderRadius:100,
        
       }}
       key={index}>
        <Text className="text-red-400">{item.name}</Text>
        <Image
        source={{uri:urlFor(item.image).url()}}
        style={{height:45,
            width:45
        }}/>
       </View>
       </TouchableOpacity>
    )
})}
            </ScrollView>
        </View>
    )
}