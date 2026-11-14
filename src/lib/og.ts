// Builds the 1200x630 social preview card for an article, as an SVG string.
// Text is wrapped using real glyph widths from the two brand fonts (src/assets/fonts/widths.json),
// so titles break cleanly without a layout engine.
import widths from '../assets/fonts/widths.json';

const DISPLAY = 'Bricolage Grotesque ExtraBold';
const BODY = 'Atkinson Hyperlegible Next';

const INK = '#231b6b';
const TONES = { berry: '#ff4f8b', mint: '#35e0a1', lilac: '#c3b5ff', custard: '#ffd84d' } as const;
export type Tone = keyof typeof TONES;
type FontKey = 'bricolage-800' | 'atkinson-700';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function textWidth(text: string, size: number, font: FontKey) {
  const table = (widths as Record<string, Record<string, number>>)[font];
  let w = 0;
  for (const ch of text) w += (table[ch] ?? 0.58) * size;
  return w;
}

function wrap(text: string, size: number, font: FontKey, maxWidth: number) {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const next = line ? `${line} ${word}` : word;
    if (line && textWidth(next, size, font) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// Largest size that fits the title in at most `maxLines` lines.
function fitTitle(text: string, maxWidth: number, maxLines: number) {
  for (let size = 92; size >= 52; size -= 4) {
    const lines = wrap(text, size, 'bricolage-800', maxWidth);
    if (lines.length <= maxLines) return { size, lines };
  }
  const size = 52;
  const lines = wrap(text, size, 'bricolage-800', maxWidth).slice(0, maxLines);
  lines[lines.length - 1] = lines[lines.length - 1].replace(/[\s.,;:]*$/, '') + '…';
  return { size, lines };
}

const WHITE = '#ffffff';
const SOFT = 'fill="#fff" fill-opacity="0.65"';

function art(type: string) {
  if (type === 'data')
    return `<rect x="8" y="80" width="28" height="50" rx="8" ${SOFT}/><rect x="46" y="50" width="28" height="80" rx="8" ${SOFT}/><rect x="84" y="66" width="28" height="64" rx="8" ${SOFT}/><rect x="122" y="18" width="28" height="112" rx="8" fill="${INK}"/><rect x="160" y="40" width="28" height="90" rx="8" ${SOFT}/>`;
  if (type === 'breakdown')
    return `<rect x="14" y="8" width="160" height="36" rx="10" ${SOFT}/><rect x="14" y="54" width="160" height="36" rx="10" ${SOFT}/><rect x="14" y="100" width="92" height="30" rx="15" fill="${INK}"/><circle cx="36" cy="26" r="8" fill="${INK}" fill-opacity="0.85"/><circle cx="36" cy="72" r="8" fill="${INK}" fill-opacity="0.85"/>`;
  if (type === 'guide')
    return `<circle cx="24" cy="28" r="13" fill="${INK}"/><path d="M18 28l4.5 4.5L31 23" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="48" y="22" width="120" height="12" rx="6" ${SOFT}/><circle cx="24" cy="70" r="13" fill="${INK}"/><path d="M18 70l4.5 4.5L31 65" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="48" y="64" width="96" height="12" rx="6" ${SOFT}/><circle cx="24" cy="112" r="13" ${SOFT}/><rect x="48" y="106" width="108" height="12" rx="6" ${SOFT}/>`;
  // insight
  return `<rect x="10" y="10" width="124" height="58" rx="18" ${SOFT}/><path d="M34 66l-6 22 24-16z" ${SOFT}/><rect x="28" y="28" width="80" height="10" rx="5" fill="${INK}" fill-opacity="0.85"/><rect x="28" y="46" width="52" height="10" rx="5" fill="${INK}" fill-opacity="0.85"/><rect x="94" y="84" width="96" height="46" rx="16" fill="${INK}"/><path d="M156 128l8 14-22-10z" fill="${INK}"/><circle cx="116" cy="107" r="5" fill="#fff"/><circle cx="142" cy="107" r="5" fill="#fff"/><circle cx="168" cy="107" r="5" fill="#fff"/>`;
}

interface Card {
  type: 'breakdown' | 'data' | 'guide' | 'insight';
  tone: Tone;
  label: string;
  title: string;
  stat?: string;
  caption?: string;
}

export function articleCard({ type, tone, label, title, stat, caption }: Card) {
  const bg = TONES[tone];
  const textMax = 640;
  let main = '';

  if (stat) {
    // Headline number, with what it counts underneath.
    let size = 220;
    while (textWidth(stat, size, 'bricolage-800') > textMax && size > 90) size -= 10;
    const cap = caption ? wrap(caption, 46, 'atkinson-700', textMax).slice(0, 3) : [];
    const capStart = 330 + size * 0.2 + 56;
    main =
      `<text x="80" y="${330 + size * 0.2}" font-family="${DISPLAY}" font-size="${size}" fill="${INK}" letter-spacing="-4">${esc(stat)}</text>` +
      cap.map((l, i) => `<text x="80" y="${capStart + i * 56}" font-family="${BODY}" font-weight="700" font-size="46" fill="${INK}">${esc(l)}</text>`).join('');
  } else {
    const { size, lines } = fitTitle(title, textMax, 4);
    const lead = size * 1.06;
    const startY = 150 + (4 - lines.length) * (lead / 2) + size * 0.78;
    main = lines
      .map((l, i) => `<text x="80" y="${startY + i * lead}" font-family="${DISPLAY}" font-size="${size}" fill="${INK}" letter-spacing="-2">${esc(l)}</text>`)
      .join('');
  }

  const pillW = textWidth(label, 28, 'atkinson-700') + 44;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="${bg}"/>
<text x="80" y="104" font-family="${DISPLAY}" font-size="40" fill="${INK}" letter-spacing="-1">feedme.design</text>
<g transform="translate(740 130) scale(2.3)">${art(type)}</g>
${main}
<rect x="80" y="520" width="${pillW}" height="52" rx="26" fill="${INK}"/>
<text x="${80 + 22}" y="556" font-family="${BODY}" font-weight="700" font-size="28" fill="${WHITE}">${esc(label)}</text>
</svg>`;
}

// Used for the home page and anything without its own card.
export function defaultCard() {
  const tagline = 'E-commerce UX, picked apart.';
  const { size, lines } = fitTitle(tagline, 700, 3);
  const lead = size * 1.06;
  const text = lines
    .map((l, i) => `<text x="80" y="${220 + i * lead}" font-family="${DISPLAY}" font-size="${size}" fill="${WHITE}" letter-spacing="-2">${esc(l)}</text>`)
    .join('');
  const bars = (['berry', 'mint', 'lilac', 'custard'] as Tone[])
    .map((t, i) => `<rect x="${830 + (i % 2) * 150}" y="${150 + Math.floor(i / 2) * 170}" width="130" height="150" rx="34" fill="${TONES[t]}"/>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="${INK}"/>
<text x="80" y="104" font-family="${DISPLAY}" font-size="40" fill="${WHITE}" letter-spacing="-1">feedme.design</text>
${text}
<text x="80" y="540" font-family="${BODY}" font-weight="700" font-size="34" fill="${TONES.lilac}">Original breakdowns and data you can cite.</text>
${bars}
</svg>`;
}