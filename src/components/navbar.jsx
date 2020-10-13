import React from 'react'
import {Link} from 'gatsby'
const Navbar = () => {
    return (
        <>

            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/contact/">Contact</Link>
            <Link to="/dynamic-page/">my-dynamic-page</Link>
        </>
    )
}

export default Navbar
