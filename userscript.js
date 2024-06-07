// ==UserScript==
// @name         GeoFS Camera Reset
// @version      1.0
// @description  Reset GeoFS camera when middle mouse button is pressed
// @author       krunchiekrunch
// @match        https://www.geo-fs.com/geofs.php?v=*
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // detect when middle mouse button is pressed
    document.addEventListener('mousedown', function(event) {
        if (event.button === 1) {
            // reset camera
            if (typeof geofs !== 'undefined' && geofs.camera && typeof geofs.camera.reset === 'function') {
                geofs.camera.reset();
            }
        }
    }, false);
})();
