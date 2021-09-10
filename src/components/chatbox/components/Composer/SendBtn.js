import React from 'react';

const SendBtn = () => {
    return(
        <button onclick="sendPrivateMess()" id="sendBtn">
            <svg id="Layer_1" enable-background="new 0 0 496.007 496.007" height="512" viewBox="0 0 496.007 496.007" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m205.892 403.822c-6.25-6.25-16.38-6.25-22.63 0l-41.92 41.92c-6.25 6.24-6.25 16.38 0 22.62 6.206 6.226 16.348 6.282 22.63 0l41.92-41.92c6.25-6.251 6.25-16.38 0-22.62zm-113.71-113.711c-6.24-6.25-16.37-6.25-22.62 0l-41.92 41.92c-6.25 6.25-6.25 16.38 0 22.63 6.24 6.239 16.354 6.266 22.62 0l41.92-41.92c6.25-6.249 6.25-16.38 0-22.63zm75.81 37.901c-6.25-6.25-16.38-6.24-22.63 0l-106.24 106.24c-6.25 6.25-6.25 16.38 0 22.63 6.248 6.229 16.358 6.252 22.63 0l106.24-106.24c6.25-6.25 6.25-16.38 0-22.63zm327.2-307.02-151.62 464c-4.286 13.097-22.084 15.008-29.04 3.07l-101.96-175.35c-3.22-5.53-2.83-12.44.98-17.58l36.61-49.29-49.29 36.61c-5.14 3.81-12.05 4.2-17.58.98l-175.35-101.961c-11.896-6.919-10.066-24.741 3.07-29.04l464-151.62c12.402-4.047 24.245 7.727 20.18 20.181z"/></svg>
        </button>
    );
}

export default SendBtn;
