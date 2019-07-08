function setCurrent(){
    console.log('run setCurrent()');
    chrome.storage.sync.get(['enabled'], function(result) {
        console.log('Value currently is ' + result.enabled);
        let enabled = result.enabled;

        // first time init
        if (typeof result.enabled == 'undefined'){
            enabled = false
            chrome.storage.sync.set({'enabled': false}, function() {
                console.log('Value is set to ' + false);
              });
        }
        document.querySelector("#check").checked = enabled
      });
}

setCurrent();

function toggleSetting(){
    console.log('run toggleSetting()');

    chrome.storage.sync.get(['enabled'], function(result) {
        console.log('Value currently is ' + result.enabled);
        
        chrome.storage.sync.set({'enabled': !result.enabled}, function() {
            console.log('Value is set to ' + !result.enabled);
          });
      });
    
}

document.getElementById("check").addEventListener('click', toggleSetting);