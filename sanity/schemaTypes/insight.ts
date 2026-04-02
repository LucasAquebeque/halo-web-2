import { title } from "process";

export default{
    name: 'insight',
    title: 'Insight',
    type: 'document',
    fields:[
        {name: 'title', type: 'string'},
        {name: 'slug', type: 'slug', options: {source:'title'}},
        {name: 'publishedAt', type: 'datetime'},
        {name:'mainImage', type: 'image', options: {hotspot: true}},
        {name: 'excerpt', type: 'text'},
        {name: 'body', type: 'array', of:[{type: 'block'}]},
        {name: 'tags', type: 'array', of:[{type:'string'}]},
        //Ejemplos: 'crestron', 'lutron', 'marine', 'lighting', 'superyacht'
        {name: 'seoTitle', type: 'string'},
        {name: 'seoDescription', type: 'text'},
    ]
}