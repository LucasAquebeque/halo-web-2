import { title } from "process";

    export default{
        name : 'project',
        title:'Projects',
        type: 'document',
        fields:[
            {name:'title', type:'string', title:'Title'},
            {name: 'slug', type:'slug', options:{source:'title'}},
            {name: 'category', type:'string',
                options:{list:['Marine Refit','Marine New Build', 'Luxury Residential', 'Cruise']}
            },
            {name:'location', type: 'string'},
            {name: 'year', type: 'number'},
            {name: 'mainImage', type: 'image', optional:{hotspot: true}},
            {name: 'gallery', type: 'array', of: [{type: 'image'}]},
            {name: 'technologies', type: 'array', of:[{type: 'string'}]},
            //Crestron, Lutron, L-Acoustic, etc.
            {name: 'summary', type: 'text'},
            {name: 'body', type: 'array', of:[{type: 'block'}]},
            {name: 'featured', type: 'boolean', title: 'Featured on homepage'},
        ]
    }