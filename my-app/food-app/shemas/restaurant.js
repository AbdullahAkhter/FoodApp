export default {
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Resturant Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name:'image',
      title:"Resturant Image",
      type:"image"
    },
    {
      name:'address',
      title:"Resturant Address",
      type:"string"
    },
    {
      name:'reviews',
      title:"Resturant reviews",
      type:"string"
    },
    {
      name:'ratting',
      title:"Resturant ratting",
      type:"string",
      validation:rule=>rule.required().min(1).max(5).error("Please enter number between 1 and 5")
    },
    {
      name:'category',
      title:"Resturant category",
      type:"reference",
      to:[{type:"category"}]
    
    },
 {
      name:'dishes',
      title:"Dishes",
      type:"array",
      of:[{
        type:'reference',
        to:[{type:'dish'}]
      }]
    
    }
    
  ]
}
