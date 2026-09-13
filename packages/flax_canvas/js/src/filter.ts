const filterPart =
  /^(?:blur\(\s*[\d.]+\s*px\s*\)|brightness\(\s*[\d.]+%?\s*\)|contrast\(\s*[\d.]+%?\s*\)|grayscale\(\s*[\d.]+%?\s*\)|invert\(\s*[\d.]+%?\s*\)|opacity\(\s*[\d.]+%?\s*\)|saturate\(\s*[\d.]+%?\s*\)|sepia\(\s*[\d.]+%?\s*\)|hue-rotate\(\s*-?[\d.]+\s*deg\s*\))$/;

export function acceptedFilter(value: string): string | null {
  const text = value.trim();
  if (text === 'none' || text === '') return 'none';
  if (/\burl\s*\(|drop-shadow/i.test(text)) return null;
  const parts = text.split(/\)\s*/).filter(Boolean);
  if (parts.length === 0) return null;
  for (const part of parts) {
    if (!filterPart.test(`${part})`)) return null;
  }
  return text;
}
