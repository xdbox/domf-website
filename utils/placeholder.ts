/**
 * Generic, self-contained image placeholders (inline SVG data-URIs).
 * No real photography and no network requests — every image on the site
 * resolves to one of these neutral, on-brand tiles.
 */
const enc = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg.replace(/\n\s*/g, ' ').trim())}`

// Landscape "image" tile — framed picture glyph (sun + hills) on a soft sage field.
export const PLACEHOLDER_IMG = enc(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#e8efe0"/>
  <g fill="none" stroke="#b3c194" stroke-width="16" stroke-linecap="round" stroke-linejoin="round">
    <rect x="410" y="288" width="380" height="262" rx="22"/>
    <circle cx="498" cy="374" r="30"/>
    <path d="M430 532l112-102 80 70 70-60 92 82"/>
  </g>
</svg>`)

// Square avatar tile — generic person silhouette on the same field.
export const PLACEHOLDER_AVATAR = enc(`
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#e8efe0"/>
  <g fill="#b3c194">
    <circle cx="200" cy="158" r="66"/>
    <path d="M200 248c-78 0-140 48-140 110v42h280v-42c0-62-62-110-140-110Z"/>
  </g>
</svg>`)
