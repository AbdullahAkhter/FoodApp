import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeft, Minus } from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal, remove_from_cart, slectedcartitems } from "../redux/slices";
import { urlFor } from "../sanity";

export default function cartScreen() {
    const restaurant = useSelector(state => state.restaurant.restaurant)
    const selectedItems = useSelector(slectedcartitems);
    const totalcart = selectedItems.filter(
        item => item.resturant === restaurant.name
    ).reduce((total, item) => total = total + item.price, 0) + 25

    console.log("Testing of the daata", selectedItems)
    console.log("Testing....", totalcart)

    const [groupeditems, setgroup] = useState({});

    const router = useRouter();

    const dispatch = useDispatch();

    useEffect(() => {
        const filteredItems = selectedItems.filter(
            item => item.resturant === restaurant.name
        );

        const grouped = filteredItems.reduce((total, item) => {
            if (!total[item.id]) {
                total[item.id] = [];
            }
            total[item.id].push(item);
            return total;
        }, {});

        setgroup(grouped);
    }, [selectedItems, restaurant]);

    console.log("groupitems are ", groupeditems)



    return (

        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                paddingTop: 6,

            }}>
            <View
                style={{ height: 800 }}
            >

                <TouchableOpacity
                    style={{
                        position: "absolute",
                        top: 5,
                        left: 10,
                        height: 24,
                        width: 24,
                        backgroundColor: "orange",
                        borderRadius: 24,


                    }}
                    onPress={() => router.back()}>

                    <ArrowLeft
                        width={24}
                        height={24}
                        color="white"
                    />
                </TouchableOpacity>

                <View
                    style={{
                        paddingLeft: 140
                    }}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20
                        }}>
                        Your Cart
                    </Text>
                    <Text>{restaurant.name}</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        width: 370,
                        backgroundColor: "brown",
                        opacity: 0.1,

                        height: 80,
                        justifyContent: "center"


                    }}>





                </View>
                <Image
                    source={{ uri: "https://tse4.mm.bing.net/th/id/OIP.7Zwk2KFraIWUCOJ6bT34hwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" }}
                    style={{
                        width: 60,
                        height: 60,
                        position: "absolute",
                        top: 55,
                        left: 18


                    }} />
                <Text
                    style={{
                        marginTop: 24,
                        marginLeft: 100,
                        fontWeight: "bold",
                        fontSize: 15,
                        position: "absolute",
                        top: 55

                    }}>Delivery is in 20 minutes</Text>


                <TouchableOpacity
                    style={{
                        marginLeft: 300,
                        position: "absolute",
                        top: 80,

                    }}>
                    <Text
                        style={{
                            color: "orange",
                            fontWeight: "bold",


                        }}>Change</Text>
                </TouchableOpacity>
                <ScrollView
                    contentContainerStyle={{
                        marginTop: 5
                    }}
                    showsVerticalScrollIndicator={false}>
                    {
                        Object.entries(groupeditems).map((item, index) => {
                            let dish = item[1]
                            console.log("data is is", dish)

                            return (
                                <View
                                    style={{
                                        flexDirection: "row", backgroundColor: "white",
                                        marginBottom: 10,
                                        paddingLeft: 12,
                                        alignItems: "center",

                                        borderRadius: 24,
                                        width: 350,
                                        borderWidth: 1,
                                        borderColor: "#cdcdcd",
                                        gap:1


                                    }}>
                                    <Text
                                    style={{
                                        fontSize:20
                                    }}>{dish.length}x</Text>

                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            flexDirection: 'row',
                                            paddingLeft: 8
                                        }}>

                                        <Image
                                            source={{ uri: urlFor(dish[0].image).url() }}
                                            style={{
                                                width: 60,
                                                height: 60,

                                            }} />
                                    </View>







                                    <Text
                                        style={{
                                            fontSize: 15,
                                            marginLeft:10
                                        }}>{dish[0].name}</Text>
                                    <Text>{dish[0].description}</Text>

                                    <View
                                        style={{
                                            marginTop: 10,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            width:"50%"


                                        }}>
                                        <Text
                                            style={{ fontSize: 15,
                                                marginBottom:12,
                                                marginLeft:70
                                             }}>${dish[0].price}</Text>
                                       

                                            <TouchableOpacity
                                                style={{
                                                    backgroundColor: "brown",
                                                    borderRadius: 500,
                                                    borderWidth:1,
                                                    borderColor:"white"
                                                


                                                }}
                                                onPress={() => dispatch(remove_from_cart(dish[0].id))}
                                            >
                                                <Minus
                                                    height={20}
                                                    width={20}
                                                    color={"white"}
                                                />
                                            </TouchableOpacity>



                                        
                                    </View>

                                </View>
                            )

                        })
                    }




                </ScrollView>

                <View
                    style={{
                        marginBottom: 100
                    }}>
                    <View
                        style={{
                            backgroundColor: "red",
                            opacity: 0.2,
                            width: 360,
                            height: 170,
                            borderRadius: 20
                        }}>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            position: "absolute",
                            justifyContent: "space-between",
                            width: 360,
                            top: 15,
                            paddingLeft: 15,
                            paddingRight: 15

                        }}>
                        <Text>Subtotal</Text>
                        <Text>$20</Text>

                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            position: "absolute",
                            justifyContent: "space-between",
                            width: 360,
                            top: 40,
                            paddingLeft: 15,
                            paddingRight: 15

                        }}>
                        <Text>Delivery Fee</Text>
                        <Text>$5</Text>

                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            position: "absolute",
                            justifyContent: "space-between",
                            width: 360,
                            top: 75,
                            paddingLeft: 15,
                            paddingRight: 15

                        }}>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20
                            }}>Total</Text>
                        <Text>{totalcart}</Text>

                    </View>
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            position: "absolute",
                            justifyContent: "space-between",
                            width: 330,
                            top: 110,
                            paddingLeft: 15,
                            paddingRight: 15,
                            backgroundColor: "orange",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 60,
                            borderRadius: 50,
                            marginHorizontal: 15


                        }}
                        onPress={() => router.push('./orderPreparingScreen')}>
                        <Text>Place Order</Text>
                    </TouchableOpacity>

                </View>




            </View>
        </View>

    )
}