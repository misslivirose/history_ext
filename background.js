browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "exportTitles") {
    exportHistoryTitles();
  }
});

async function exportHistoryTitles() {
  const twoWeeksAgo = Date.now() - 14 * 24 * 60 * 60 * 1000;

  const historyItems = await browser.history.search({
    text: "",
    startTime: twoWeeksAgo,
    maxResults: 10000,
  });

  const titles = historyItems
    .map((item) => item.title?.trim())
    .filter((title) => title && title.length > 0);

  const uniqueTitles = [...new Set(titles)];
  const textBlob = new Blob([uniqueTitles.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(textBlob);

  browser.downloads.download({
    url: url,
    filename: "history_titles.txt",
    saveAs: true,
  });
}
