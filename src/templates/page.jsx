import React from 'react';
import { BuilderComponent } from '@builder.io/react'
import { graphql } from 'gatsby'

const Page = (props) => {
  // if (!Builder.isEditing && !Builder.isPreviewing && !props.builderContent) {
  //   return '404'
  // }

  const content = props.data?.allBuilderModels?.onePage?.content;

  return (
    <BuilderComponent
      content={content}
      model="page" />
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