# History Title Exporter (Firefox Extension)

This Firefox extension exports the titles of all websites you've visited in the past two weeks, removes duplicates and blank entries, and saves the result as a `.txt` file.

## Features

- Collects titles from your browsing history for the last 14 days
- Removes empty entries and duplicates
- Saves the output as `history_titles.txt`
- Fully offline and runs locally
- Works with Firefox (Manifest V2)

## Installation (Temporary Load)

1. Open Firefox and go to `about:debugging`
2. Click **“This Firefox”**
3. Click **“Load Temporary Add-on…”**
4. Select the `manifest.json` file from this project folder

## How to Use
1. Click the extension icon in your toolbar
2. In the popup, click **“Export Titles”**
3. Choose where to save the generated `history_titles.txt` file

## Notes
Requires permissions for `history` and `downloads`
