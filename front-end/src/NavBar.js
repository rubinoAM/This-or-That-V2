import React from 'react';
import { Link } from 'react-router-dom';

export default ()=>{
    return(
        <nav>
            <div className="nav-wrapper amber lighten-3">
                <a className="brand-logo">Like This or Not That!</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a className="waves-effect waves-lighten">Home</a></li> {/* Wrap in <Link> tag */}
                    <li><a className="waves-effect waves-lighten">Standings</a></li>
                </ul>
            </div>
        </nav>
    )
}