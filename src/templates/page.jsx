import * as React from 'react';
import { BuilderComponent } from '@builder.io/react'
import { graphql } from 'gatsby'

// builder.init('8343beb1ffff4268ae86505e1041cbb7')

const Page = (props) => {
  const content = props.data?.allBuilderModels?.onePage?.content;

  return (
    <div>
      <BuilderComponent
        content={content}
        model="page" />
    </div>
  )
}

// export const FormSubmitButton = withBuilder(FormSubmitButtonComponent, {
//   name: 'Heading',
//   inputs: [{ type: 'string', name: 'text' }]
// })

export default Page

export const query = graphql`
  query($path: String!) {
    allBuilderModels {
      onePage(
        target: { urlPath: $path }
        options: { cachebust: true }
      ) { content }
    }
  }
`