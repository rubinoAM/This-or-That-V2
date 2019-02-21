import React from 'react';
import { Link } from 'react-router-dom';

export default ()=>{
    return(
        <footer className="page-footer green darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5>Footer Content</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5>Links</h5>
                        <ul>
                            <li><a className="white-text">Link 1</a></li> {/* Wrap in <Link> tag */}
                            <li><a className="white-text">Link 2</a></li>
                            <li><a className="white-text">Link 3</a></li>
                            <li><a className="white-text">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div class="container">
                    <span>© 2019 Michael Rubino</span>
                </div>
            </div>
        </footer>
    )
}