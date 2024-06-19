
let database = [];
fetch('db/1_us_urlsci_tech_output.json')
  .then(response => response.json())
  .then(data => {
    database = data;
  });




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