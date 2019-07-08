// background.js
chrome.webNavigation.onCompleted.addListener(function (details) {
    console.log(details)
    let frameId = details.frameId
    if (frameId == 0 &
        details.url.includes('www.google.com/search')) {

        let tabID = details.tabId
        console.log(`i got the nav with tabid, ${tabID}.`)

        chrome.storage.sync.get(['enabled'], function (result) {
            console.log('Value currently is ' + result.enabled);
            let enabled = result.enabled;

            // first time init
            if (typeof result.enabled == 'undefined') {
                enabled = false
                chrome.storage.sync.set({ 'enabled': false }, function () {
                    console.log('Value is set to ' + false);
                });
            }

            if (enabled) {
                chrome.tabs.executeScript(
                    tabID, {
                        file: "changeChrono.js"
                    })

            }
        }
        )

    }
}
);
// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function (tab) {
//     // Send a message to the active tab
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         var activeTab = tabs[0];
//         chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
//     });
// });

// // This block is new!
// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         if (request.message === "open_new_tab") {
//             chrome.tabs.create({ "url": request.url });
//         }
//     }
// );