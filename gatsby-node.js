const { Component } = require("react")

exports.createPages=async function({actions}){
    actions.createPage({
        path:'/dynamic-page/',
        component:require.resolve('./src/templates/dynamicPage.jsx'),
        context:{
            name:"huzaifa",
            email:"huzaifa@gmail.com"
        }
    })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // Only update the `/app` page.
    if (page.path.match(/^\/app/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/app/*"
  
      // Update the page.
      createPage(page)
    }
  }