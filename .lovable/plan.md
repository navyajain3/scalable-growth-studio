
# Change Heading Font to Satoshi 500 Weight

## Overview
Replace the current Aeonik heading font with Satoshi at 500 weight (Medium) using FontShare CDN.

## Changes Required

### 1. Update `src/index.css`

**Remove Aeonik font declarations (lines 3-25):**
```css
@font-face {
  font-family: 'Aeonik';
  src: url('https://cdn.jsdelivr.net/gh/nicofraisse/aeonik-font@main/Aeonik-Regular.woff2') format('woff2');
  ...
}
```

**Add Satoshi font import using FontShare CDN:**
```css
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@500&display=swap');
```

**Update heading font-family rule (line 165):**
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
}
```

### 2. Update `tailwind.config.ts`

**Update the heading font family (line 33):**
```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  heading: ['Satoshi', 'system-ui', 'sans-serif'],  // Changed from Aeonik
},
```

---

## Technical Details

| Item | Current | New |
|------|---------|-----|
| Font Family | Aeonik | Satoshi |
| Weight | Variable (400, 500, 700) | 500 (Medium) only |
| Source | jsdelivr CDN | FontShare CDN |
| Import Method | @font-face | @import URL |

The Satoshi font from FontShare is free for commercial use and provides excellent readability with a modern, clean aesthetic that complements the Inter body font.
