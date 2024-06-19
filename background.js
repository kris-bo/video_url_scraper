// // Assume you have a function to get the database from storage or API
// let database = [];
// fetch('1_us_urlsci_tech_output.json')
//   .then(response => response.json())
//   .then(data => {
//     database = data;
//   });

// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === 'getDatabase') {
//     sendResponse({ database: database });
//   }
// });


let database = [];
fetch('db/1_us_urlsci_tech_output.json')
  .then(response => response.json())
  .then(data => {
    database = data;
  });

// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === 'getDatabase') {
//     sendResponse({ database: database });
//   }
// });


// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.action === 'openTab') {
//       console.log('openTab');
//       chrome.tabs.create({ url: request.url });
//       sendResponse({ message: 'Tab opened' });
//     }
//   });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
if (request.action === 'openTab') {
    chrome.tabs.create({ url: request.url }, function(tab) {
    setTimeout(function() {
        chrome.tabs.remove(tab.id);
    }, 5000); // 5 seconds
    });
}
});




// background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getDatabase') {

    let currentIndex = 0;

    function openNextTab() {
    //   if (currentIndex < database.length) {
      if (currentIndex < 30) {

        const entry = database[currentIndex];
        chrome.tabs.create({ url: entry.url + '/videos' }, function(tab) {
          const newTabId = tab.id;
          setTimeout(function() {
            chrome.tabs.sendMessage(newTabId, { action: 'waitForPageLoad', name: entry.name });
          }, 5000); // 10 seconds
          // Wait for 5 seconds and then close the tab
          setTimeout(function() {
            chrome.tabs.remove(newTabId, function() {
              // Open the next tab
              currentIndex++;
              openNextTab();
            });
          }, 50000); // 5 seconds
        });
      }
    }

    openNextTab();
  }
});


// chrome.runtime.sendMessage({ action: 'getDatabase' }, function(response) {
//     const database = response.database;
    
//     // Iterate through the database entries
//     database.forEach(entry => {
//       if (window.location.href === entry.url + '/videos') {
//         console.log('window.location.href   ');
//         console.log(window.location.href);
//         // Perform actions for this specific page
//         console.log(`Found match for ${entry.name}!`);
//         waitForPageLoad(entry.name);
  
//         chrome.runtime.sendMessage({ action: 'openTab', url: entry.url + '/videos' }, function(response) {
//           console.log('openTab response', response);
          
//           // Get the ID of the newly opened tab
//           chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//             const newTabId = tabs[0].id;
            
//             // Wait for 50 seconds and then close the tab
//             setTimeout(function() {
//               chrome.tabs.remove(newTabId);
//             }, 50000); // 50 seconds
//           });
//         });
//       }
//     });
//   });

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.action === 'openTab') {
//       chrome.tabs.create({ url: request.url }, function(tab) {
//         setTimeout(function() {
//           chrome.tabs.remove(tab.id);
//         }, 5000); // 5 seconds
//       });
//     }
//   });