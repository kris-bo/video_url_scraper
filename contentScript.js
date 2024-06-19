console.log('contentScript.js');

// chrome.runtime.sendMessage({ action: 'getDatabase' }, function(response) {
//     const database = response.database;
    
//     // Iterate through the database entries
//     database.forEach(entry => {
//       if (1) {
//         chrome.runtime.sendMessage({ action: 'openTab', url: entry.url + '/videos' }, function(response) {
//           console.log('openTab response', response);
          
//           // Get the ID of the newly opened tab
//           console.log('tabs', chrome.tabs);
//           chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//             if (tabs && tabs.length > 0) {
//               const newTabId = tabs[0].id;
              
//               setTimeout(function() {
//                 chrome.tabs.remove(newTabId);
//               }, 5000); // 5 seconds
//             }
//           });
//         });
//       }
//     });
//   });

// chrome.runtime.sendMessage({ action: 'getDatabase' }, function(response) {    
//     // Iterate through the database entries
//     const database = response.database;
//     database.forEach(entry => {
//         // console.log('entry:', entry);
//         chrome.runtime.sendMessage({ action: 'openTab', url: entry.url + '/videos' });
//     });
//   });

chrome.runtime.sendMessage({ action: 'getDatabase' });


// chrome.runtime.sendMessage({ action: 'getDatabase' }, function(response) {
//     const database = response.database;
//     let currentIndex = 0;
  
//     function openNextTab() {
//       if (currentIndex < database.length) {
//         const entry = database[currentIndex];
//         chrome.runtime.sendMessage({ action: 'openTab', url: entry.url + '/videos' }, function(response) {
//           console.log('openTab response', response);
  
//           // Wait for 5 seconds and then close the tab
//           setTimeout(function() {
//             // Get the ID of the newly opened tab
//             chrome.runtime.sendMessage({ action: 'getActiveTab' }, function(response) {
//               const newTabId = response.tabId;
//               chrome.tabs.remove(newTabId);
  
//               // Open the next tab
//               currentIndex++;
//               openNextTab();
//             });
//           }, 5000); // 5 seconds
//         });
//       }
//     }
  
//     openNextTab();
//   });
