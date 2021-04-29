// exports.createPages = async ({ graphql, actions: { createPage } }) => {

//   return graphql(`
//     {  
//       allBuilderModels {
//         page {
//           data {
//             url
//           }
//         }
//       }
//     }`).then(res => {
//       console.log('res', res)
//       res.data.allBuilderModels.page.forEach(({ node }) => {
//         if(node.data.url && node.data.url !== '-') {
//           createPage({
//             path: `/${node.data.url}`,
//             component: require.resolve("../../src/templates/page.jsx"),
//             context: { slug: node.data.url },
//           })
//         }
//       })
//     })
// }