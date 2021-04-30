import React from 'react';
import { BuilderComponent } from '@builder.io/react'
import { graphql } from 'gatsby'

// builder.init('8343beb1ffff4268ae86505e1041cbb7')

const Page = (props) => {
  // if (!Builder.isEditing && !Builder.isPreviewing && !props.builderContent) {
  //   return '404'
  // }

  const content = props.data?.allBuilderModels?.onePage?.content;

  return (
    <div>
      <BuilderComponent
        content={content}
        model="page" />
    </div>
  )
}

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