import { client } from "./sanity";
let sanityQuery=(query,param)=> client.fetch(query,param)
export const getcategory=()=>{
    return sanityQuery(`*[_type == "category"]{
  
  name,
  description,
  image{
  asset->{
  id,
  url}}
  
}
`)
}
export const getfeaturedResturant=()=>{
  return sanityQuery( `*[_type == "featured"]{
      name,
      description,
      resturants[]->{
        name,
        address,
        reviews,
        ratting,
        image,
        category->{
          name
        },
        dishes[]->{
          resturant,
          id,
          name,
          image,
          price
          }
        }
      }

  `)
}


