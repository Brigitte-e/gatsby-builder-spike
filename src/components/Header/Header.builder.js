// This code is in your app. Can be the same components you already use
import { Builder } from '@builder.io/react';
import { Header } from './Header';

Builder.registerComponent(Header, {
    name: 'header',
    image: "https://www.holdenqigong.com/wp-content/uploads/2016/03/holden-qi-gong-logo-web.png",
    inputs: [{
        name: 'image',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        required: true,
        defaultValue: "https://www.holdenqigong.com/wp-content/uploads/2016/03/holden-qi-gong-logo-web.png"
    }]
})