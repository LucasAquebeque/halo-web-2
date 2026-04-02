import { title } from "process";

export default{
    name: 'partner',
    title: 'Partners',
    type: 'document',
    fields: [
        {name: 'name', type: 'string'},
        {name: 'slug', type: 'slug', options:{source: 'name'}},
        {name: 'logo', type: 'image'},
        {name: 'tier', type: 'string', options: {list:['Premier', 'Authorized', 'Certified']}},
        {name: 'description', type: 'text'},
        {name: 'body', type: 'array', of:[{type: 'block'}]},
    ]
}