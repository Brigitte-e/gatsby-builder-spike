// This code is in your app. Can be the same components you already use
import { Builder } from '@builder.io/react';
import { Heading } from './Heading';

Builder.registerComponent(Heading, {
  name: 'heading',
  inputs: [{ type: 'string', name: 'text' }]
})