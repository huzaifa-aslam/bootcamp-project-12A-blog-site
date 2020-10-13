import React from 'react'
import Client1 from './../components/client1'
import Client2 from './../components/client2'
import { Router } from '@reach/router'
 const app = () => {
    return (
        <div>
            <h1>app page</h1>
            <Router>

            <Client1 path="/app/client1"/>
            <Client2 path="/app/client2"/>
            </Router>
        </div>
    )
}
export default app
