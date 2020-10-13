import React from 'react'
import Layout from './../components/layout'

 const DynamicPage = ({pageContext}) => {
    return (
        <Layout>
            <h1>Dynamic Page</h1>
            {pageContext.name}<br/>
            {pageContext.email}
        </Layout>
    )
}
export default DynamicPage
