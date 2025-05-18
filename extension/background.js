// Track time spent on active tab every 5 seconds and classify websites as productive/unproductive

const productiveWebsites = [
  "stackoverflow.com",
  "github.com",
  "leetcode.com",
  "codeforces.com",
  "codesandbox.io",
];

const unproductiveWebsites = [
  "facebook.com",
  "twitter.com",
  "instagram.com",
  "youtube.com",
  "reddit.com",
];

let currentTabId = null;
let currentUrl = "";
let currentStartTime = Date.now();

const userId = "user1"; // For demo, later make dynamic

function classifyWebsite(url) {
  try {
    const domain = new URL(url).hostname.replace("www.", "");
    if (productiveWebsites.some(site => domain.includes(site))) return true;
    if (unproductiveWebsites.some(site => domain.includes(site))) return false;
    return null; // Neutral
  } catch {
    return null;
  }
}

function sendTimeData(url, timeSpent) {
  const productive = classifyWebsite(url);
  if (productive === null) return; // Don't send neutral sites

  fetch("http://localhost:5000/api/time", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      website: url,
      timeSpent,
      date: new Date(),
      productive,
    }),
  }).catch(console.error);
}

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);

  if (currentTabId !== null && currentUrl) {
    const elapsed = (Date.now() - currentStartTime) / 1000;
    sendTimeData(currentUrl, Math.floor(elapsed));
  }

  currentTabId = tab.id;
  currentUrl = tab.url;
  currentStartTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === currentTabId && changeInfo.url) {
    // Send time for previous URL
    const elapsed = (Date.now() - currentStartTime) / 1000;
    sendTimeData(currentUrl, Math.floor(elapsed));

    currentUrl = changeInfo.url;
    currentStartTime = Date.now();
  }
});

// Periodically send time for active tab every 60 seconds
setInterval(async () => {
  if (!currentUrl) return;
  const elapsed = (Date.now() - currentStartTime) / 1000;
  if (elapsed >= 60) {
    sendTimeData(currentUrl, Math.floor(elapsed));
    currentStartTime = Date.now();
  }
}, 60000);
