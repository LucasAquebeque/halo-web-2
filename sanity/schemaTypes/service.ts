import { title } from "process";

export default{
    name:'service',
    title: 'Services',
    type: 'document',
    fields: [
        {name:'title', type: 'string'},
        {name: 'slug', type: 'slug', options: {source: 'title'}},
        {name: 'icon', type: 'string'}, // nombre del icono svg
        {name: 'shortDescription', type: 'text'},
        {name: 'body', type: 'array', of:[{type: 'block'}], title: 'Full description'},
        {name: 'order', type: 'number'},
    ]
}