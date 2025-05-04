document.getElementById("export").addEventListener("click", () => {
  browser.runtime.sendMessage({ action: "exportTitles" });
});
