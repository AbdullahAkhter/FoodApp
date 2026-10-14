export default {
  name: 'featured',
  title: 'Featured Resturant',
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
      name:'resturants',
      title:"resturants",
      type:"array",
      of:[
        {
            type:'reference',
            to:[{type:'resturant'}]
        }
      ]
    }
  ]
}
