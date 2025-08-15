# Under Construction Mode - Quick Guide

This guide explains how to enable and disable the "Under Construction" overlay on your HSP 2026 Conference website.

## What is Under Construction Mode?

When enabled, all pages except the home page (`index.html`) will display a professional "Under Construction" overlay that:
- Shows a construction message with animated icon
- Provides a link back to the home page
- Preserves all existing content underneath
- Can be easily toggled on/off

## How to Enable/Disable Construction Mode

### Method 1: Edit Configuration File (Recommended)

1. **Open the configuration file:**
   ```
   config.js
   ```

2. **Find this line near the top:**
   ```javascript
   UNDER_CONSTRUCTION_MODE: true,
   ```

3. **To DISABLE construction mode (show all content):**
   ```javascript
   UNDER_CONSTRUCTION_MODE: false,
   ```

4. **To ENABLE construction mode (hide content):**
   ```javascript
   UNDER_CONSTRUCTION_MODE: true,
   ```

5. **Save the file and refresh your browser**

### Method 2: Browser Console (Temporary)

You can also toggle construction mode directly in your browser:

1. **Open Developer Tools** (F12 or right-click → Inspect)
2. **Go to Console tab**
3. **Type one of these commands:**

   **To disable construction mode (show content):**
   ```javascript
   window.disableConstructionMode()
   ```

   **To enable construction mode (hide content):**
   ```javascript
   window.enableConstructionMode()
   ```

## Which Pages Are Affected?

- ✅ **Home page (`index.html`)** - Always accessible, never shows overlay
- 🚧 **All other pages** - Show overlay when construction mode is enabled:
  - `deadlines.html`
  - `schedule.html`
  - `map.html`
  - `faq.html`

## Testing Your Changes

1. **After changing the config file:**
   - Hard refresh the page (`Cmd + Shift + R` on Mac, `Ctrl + Shift + R` on Windows)
   - Navigate to any non-home page (e.g., `http://localhost:8000/deadlines.html`)

2. **After using console commands:**
   - Changes are immediate, no refresh needed

## When to Use Construction Mode

### Enable Construction Mode When:
- ✅ Content is being updated
- ✅ Information is not finalized
- ✅ You want to show a professional "coming soon" message
- ✅ You're still working on page details

### Disable Construction Mode When:
- ✅ All content is finalized
- ✅ You're ready to launch the website
- ✅ Information is accurate and complete
- ✅ You want visitors to see all pages

## Troubleshooting

### Overlay Not Appearing?
1. **Check the config file** - Make sure `UNDER_CONSTRUCTION_MODE: true`
2. **Hard refresh** - Clear browser cache (`Cmd + Shift + R`)
3. **Check console** - Look for any JavaScript errors (F12 → Console)

### Overlay Won't Go Away?
1. **Check the config file** - Make sure `UNDER_CONSTRUCTION_MODE: false`
2. **Hard refresh** - Clear browser cache
3. **Use console command** - `window.disableConstructionMode()`

### Still Having Issues?
1. **Check file paths** - Make sure `config.js` and `script.js` are in the same directory
2. **Check script loading** - Ensure both files are included in your HTML pages
3. **Check browser console** - Look for error messages

## File Structure

Your website should have these files:
```
hsp2026/
├── config.js          # Configuration (edit this to toggle construction mode)
├── script.js          # JavaScript functionality
├── styles.css         # CSS styles including overlay styles
├── index.html         # Home page (always accessible)
├── deadlines.html     # Shows overlay when construction mode enabled
├── schedule.html      # Shows overlay when construction mode enabled
├── map.html          # Shows overlay when construction mode enabled
└── faq.html          # Shows overlay when construction mode enabled
```

## Quick Reference

| Action | Config File Change | Console Command |
|--------|-------------------|-----------------|
| **Enable Construction** | `UNDER_CONSTRUCTION_MODE: true` | `window.enableConstructionMode()` |
| **Disable Construction** | `UNDER_CONSTRUCTION_MODE: false` | `window.disableConstructionMode()` |

## Need Help?

If you're still having issues:
1. Check the browser console for error messages
2. Verify all files are in the correct locations
3. Make sure your web server is running (`python3 -m http.server 8000`)
4. Try a different browser to rule out cache issues 