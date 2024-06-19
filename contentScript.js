console.log('contentScript.js');

chrome.runtime.sendMessage({ action: 'getDatabase' });