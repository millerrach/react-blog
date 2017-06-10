import React from 'react';

export default (props) => {
    let links;
    if (window.location.pathname === '/') {
        links = ['PORTFOLIO', 'BLOG'];
    }
    if (window.location.pathname === '/portfolio') {
        links = ['HOME', 'BLOG'];
    }
    return (
        <div>
            {props.width <=700 ?
                <div>
                    <div id="mobileNavContainer">
                        <div id="mobileLogo" className="sansBold">
                            <div>
                                <span id="g">G</span><span id="eometrics">EOMETRICS</span>
                            </div>
                        </div>
                        <div id="mobileLinksContainer">
                            <div id="mobileLinks">
                                <div><a className="link sansBold" href="/portfolio">{links[0]}</a></div>
                                <div><a className="link sansBold" href="/blog">{links[1]}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    );
}