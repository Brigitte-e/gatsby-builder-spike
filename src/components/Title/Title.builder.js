import { Builder } from '@builder.io/react';
import { TitleComponent } from "./Title";

Builder.registerComponent(TitleComponent, {
    name: "title",
    inputs: [{
        name: "title",
        type: "string",
        defaultValue: "My title",
    }, ],
});