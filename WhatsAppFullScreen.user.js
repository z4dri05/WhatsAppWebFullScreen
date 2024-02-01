// ==UserScript==
// @name         WhatsApp Web Full Screen
// @description  Disable margins and use all available screen space for chats on WhatsApp Web.
// @version      1.1
// @author       https://github.com/z4dri05
// @supportURL   https://github.com/z4dri05/WhatsAppWebFullScreen
// @match        https://web.whatsapp.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==
GM_addStyle(`
div[id="app"] > div > *, div[data-testid="status-v3-main-panel"] > div {
    top: 0 !important;
    width: 100% !important;
    max-width: 100vw !important;
    height: 100% !important;
}

#wa-popovers-bucket {
    display: none !important;
}
`);
