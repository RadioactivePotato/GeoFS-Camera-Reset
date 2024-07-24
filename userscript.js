// ==UserScript==
// @name         GeoFS Camera Reset
// @version      1.1
// @description  Reset GeoFS camera when middle mouse button is double-clicked
// @author       krunchiekrunch
// @match        https://www.geo-fs.com/geofs.php?v=*
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function() {
    'use strict';

    let clickCount = 0;
    const clickDelay = 300; // maximum time (ms) between clicks to be considered a double click
    let clickTimer;

    document.addEventListener('mousedown', function(event) {
        if (event.button === 1) {
            clickCount++;
            if (clickCount === 1) {
                clickTimer = setTimeout(function() {
                    clickCount = 0;
                }, clickDelay);
            } else if (clickCount === 2) {
                clearTimeout(clickTimer);
                clickCount = 0;
                // reset camera
                if (typeof geofs !== 'undefined' && geofs.camera && typeof geofs.camera.reset === 'function') {
                    geofs.camera.reset();
                }
            }
        }
    }, false);
})();
