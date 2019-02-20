import React from 'react';

export default ()=>{
    return(
        <nav>
            <div className="nav-wrapper light-blue lighten-3">
                <a className="brand-logo">Like This or Not That!</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a className="waves-effect waves-lighten">Home</a></li>
                    <li><a className="waves-effect waves-lighten">Standings</a></li>
                </ul>
            </div>
        </nav>
    )
}