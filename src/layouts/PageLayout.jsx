import * as React from 'react';
// import { graphql, StaticQuery } from 'gatsby';
// import { BuilderComponent } from '@builder.io/react';
import { makeStyles } from '@material-ui/core/styles';
import '../builder-settings';

// import theme from '../theme';
// import { BuilderComponent } from '@builder.io/react';

const useStyles = makeStyles(them => ({
  root: {
    maxWidth: '100vw',
    overflowX: 'hidden'
  },
  header: {},
  footer: {},
  content: {
    width: '100vw'
  }
}));

// const query = graphql`
//   query {
//     allBuilderModels {
//       header(limit: 1, options: { cachebust: true }) {
//         content
//       }
//       footer(limit: 1, options: { cachebust: true }) {
//         content
//       }
//     }
//   }
// `;

function PageLayout({ children }) {
  const classes = useStyles();
  // return (
    // <StaticQuery query={query}>
    //   {data => {
        // const models = data.allBuilderModels;
        // const header = models.header[0].content;
        // const footer = models.footer[0].content;
        return (
          <div className={classes.root}>
      

            <div className={classes.header}>
              {/* <BuilderComponent
                renderLink={Link}
                name="header"
                content={header}
              /> */}
            </div>
            <div className={classes.content}>{children}</div>
            <div className={classes.footer}>
              {/* <BuilderComponent
                renderLink={Link}
                name="footer"
                content={footer}
              /> */}
            </div>
          </div>
        );
      // }}
    // </StaticQuery>
  // );
}

export default PageLayout;
