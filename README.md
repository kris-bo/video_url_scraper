
# 🎬 Video URL Scraper – A YouTube Channel Crawler Extension

This Chrome extension allows the user to get URLs of every single video of any number of chnnels provided in the database. It's perfect for researchers, digital marketers or video archivists.


## 🚀 How it works
- Loads a list of YouTube channels from a JSON file
- Visits each `/videos` page automatically
- Sends a message to the content script to scrape data
- Closes the tab after scraping
- Rinse and repeat for the next channel in you JSON file

---

## 📦 Project Structure
``` txt
video-url-scraper/
│
├── background.js # Handles the tab management and message passing
├── contentScript.js # Handles scraping on the /videos page
├── manifest.json # Chrome extension config
├── YOUR_DATABASE.json # The list of YouTube channels to visit (You create this!)
└── README.md # You're looking at it
```

---

## 🔧 Setup Instructions

1. Clone this repo.
2. Update `YOUR_DATABASE.json` with your list of channels in the following format:
   ```json
   [
     { "name": "Cool Channel", "url": "https://www.youtube.com/c/coolchannel" },
     ...
   ]
3. In manifest.json change YOUR_STARTING_PAGE to a desired URL. It can be any web page. When you go to YOUR_STARTING_PAGE after enabling the extension, the script will automatically begin to execute, parsing through every channel in your database.
4. Load the extension in Chrome:

- Go to chrome://extensions/

- Enable "Developer Mode"

- Click "Load unpacked"

- Select your project folder

5. Trigger the extension execution by going to YOUR_STARTING_PAGE

## NOTES
The current implementation processes 30 entries in a database. You can change this number to any number in background.js.
