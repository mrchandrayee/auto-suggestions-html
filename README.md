# Auto Suggestions HTML

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/auto-suggestions-html/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable recreation of the uploaded 15.53-second screen recording.

## What is shown

The video title reads **Auto Suggestions HTML**. The interface has a dark navy background, a blue-glowing heading, a white rounded search field with a gold/orange outline, and a dropdown of matching technology names. A blue-framed dark code panel appears below with the caption `Comment "Auto Suggest" for code`.

The visible suggestion examples include:
- `a` → JavaScript, React, Angular, Bootstrap, Tailwind CSS, Django (and further list entries)
- `ht` → HTML
- `re` → React, Express, PostgreSQL, Firebase
- `read` → No results found

The dropdown is a substring search: it shows items containing the typed text, ignoring letter case. Click a suggestion or use the keyboard arrows and Enter to select it. Escape closes the dropdown.

## CSS code transcribed from the video

```css
.box {
    width: 500px; position: relative
}
.search {
    width: 100%; padding: 14px;
    border-radius: 10px; border: 0
}
#list {
    position: absolute; top: 52px;
    left: 0; right: 0; background: #fff;
    border-radius: 10px; max-height: 250px;
    overflow: auto; display: none
}
.item {
    padding: 10px; cursor: pointer
}
.item.active, .item:hover {
    background: #2563eb; color: #fff
}
```

The HTML structure and JavaScript filtering logic are reconstructed to make the demonstrated autocomplete interaction fully functional. The source panel reproduces the readable CSS shown on screen.

## Run

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Type a technology name or partial text such as `a`, `ht`, or `re`.
4. Click a suggestion, or navigate with ↑ / ↓ and press Enter.

No dependencies, npm installation, build step, server, or external assets are required.

## Files

- `index.html` — page structure and visible CSS source panel
- `style.css` — visual design and dropdown styling
- `script.js` — live autocomplete, selection, keyboard support
- `README.md` — transcription and run guide

## Fidelity note

The screen title, suggestion examples, visible CSS declarations, colors, and overall layout are based on the recording. The exact complete original HTML/JavaScript source is not visible in the recording; the interaction logic and supporting markup are a working reconstruction.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
