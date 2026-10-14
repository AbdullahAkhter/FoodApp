import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native"
import ResturantCard from "./Restuarant"
export default function FeaturedRow({ name,description, restaurants }) {

  
  return (
    <View>

      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View>
          <Text>{name}</Text>
          <Text className="text-red-950">{description}</Text>
        </View>
        
        <TouchableOpacity>
          <Text className="text-red-500">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
    nestedScrollEnabled
showsHorizontalScrollIndicator={false}
contentContainerStyle={{
    paddingTop: 10,
    gap: 10,
    
    
  }}>
  {
    restaurants.map((item,index)=>{
      return(
        <ResturantCard
        item={item}
        key={index}/>
      )
    })
  }
</ScrollView>
     {/*<FlatList
        horizontal
        data={temp}
        
        renderItem={({ item }) => <ResturantCard
        item={item}/>}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
    paddingHorizontal: 10,
    gap: 10,
    
  }}

      />*/}


    </View>
  )
}