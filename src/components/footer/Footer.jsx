import React from 'react';

function Footer() {
    const date = new Date();

    return (
        <footer>
            <span id="text">
                All rights reserved. ©{date.getFullYear()}  
                <i style={{color: 'tomato'}}>AKDA</i>
            </span>
        </footer>
    )
}

export default Footer;
