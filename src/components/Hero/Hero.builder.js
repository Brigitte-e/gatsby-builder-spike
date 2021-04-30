import { Builder } from '@builder.io/react';
import { Hero } from './Hero';

Builder.registerComponent(Hero, {
    name: 'Hero',
    // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
    image: 'https://www.holdenqigong.com/wp-content/uploads/2016/03/lee-sunset-qi-gong.jpg',
    inputs: [{
            name: 'title',
            type: 'string',
            defaultValue: 'Your Title Here'
        },
        {
            name: 'image',
            type: 'file',
            allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
            required: true,
            defaultValue: 'https://www.holdenqigong.com/wp-content/uploads/2016/03/lee-sunset-qi-gong.jpg'
        },
        {
            name: 'height',
            type: 'number',
            defaultValue: 500
        },
    ]
});