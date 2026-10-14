import { createSlice } from "@reduxjs/toolkit";
export const restaurantSlice=createSlice({
    name:"restaurant",
    initialState:{restaurant:null,
        dishes:null
    },
    reducers:{
        setrestaurant:(state,action)=>{
            state.restaurant=action.payload
        }
    }
})
export const{setrestaurant}=restaurantSlice.actions
export const slectedrestaurant=state=>state.restaurant.restaurant;
export const reducer=restaurantSlice.reducer


export const cartSlice=createSlice({
    name:"cart",
    initialState:{items:[]},
    reducers:{
        add_to_cart:(state,action)=>{
            state.items=[...state.items,action.payload]
        },

       remove_from_cart: (state, action) => {
  const index = state.items.findIndex(
    item => item.id === action.payload
  )

  if (index >= 0) {
   state.items.splice(index, 1)
   

  } else {
    console.log("item is not found")
  }
},


        emptyCart:(state,action)=>{
            state.items=[]
        }
    }
})
export const{add_to_cart,remove_from_cart,emptyCart}=cartSlice.actions
export const slectedcartitems=state=>state.cart.items;
export const selecteditemsbyid=(state,id)=>state.cart.items.filter(item=>item.id===id)
export const cartTotal=(state)=>state.cart.items.reduce((total,item)=>total=total+item.price,0)
export const cartreducer=cartSlice.reducer