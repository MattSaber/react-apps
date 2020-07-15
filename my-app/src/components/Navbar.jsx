import React from 'react';

// stateless functional component
const Navbar = function({ totalCounters }){
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
                Navbar{" "}
                <span className="badge badge-pill badge-primary">
                    {totalCounters}
                </span>
            </div>
        </nav>
    );
};
 
export default Navbar;