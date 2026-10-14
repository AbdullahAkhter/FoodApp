export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [

    
    {
      name: 'resturant',
      title: 'resturant',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'id',
      title: 'id',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required()
    },

    {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: Rule => Rule.required().min(2)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name:'image',
      title:"Dish Image",
      type:"image"
    }
    
  ]
}
