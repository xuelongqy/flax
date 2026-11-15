import type { Language } from './i18n';

export interface Profile {
  version: 1;
  language: Language;
  showFps: boolean;
  music: number;
  effects: number;
  quality: 'balanced' | 'detailed';
  reducedMotion: boolean;
  haptics: boolean;
  bestScore: number;
  longest: number;
  // Preserve historical finite-encounter records without counting endless boss clears.
  wins: number;
}
export function readProfile(
  raw: string | null,
  desktop = false,
): {
  profile: Profile;
  writable: boolean;
} {
  const profile: Profile = {
    version: 1,
    language: 'zh',
    showFps: false,
    music: 0.5,
    effects: 0.7,
    quality: desktop ? 'detailed' : 'balanced',
    reducedMotion: false,
    haptics: true,
    bestScore: 0,
    longest: 0,
    wins: 0,
  };
  try {
    const data: unknown = raw ? JSON.parse(raw) : null;
    if (!data || typeof data !== 'object' || Array.isArray(data))
      return { profile, writable: true };
    const value = data as Record<string, unknown>;
    if (typeof value.version === 'number' && value.version > 1)
      return { profile, writable: false };
    if (value.version !== 1) return { profile, writable: true };
    if (value.language === 'zh' || value.language === 'en')
      profile.language = value.language;
    if (typeof value.showFps === 'boolean') profile.showFps = value.showFps;
    for (const key of ['music', 'effects'] as const)
      if (
        typeof value[key] === 'number' &&
        Number.isFinite(value[key]) &&
        value[key] >= 0 &&
        value[key] <= 1
      )
        profile[key] = value[key];
    for (const key of ['bestScore', 'longest', 'wins'] as const)
      if (
        typeof value[key] === 'number' &&
        Number.isSafeInteger(value[key]) &&
        value[key] >= 0
      )
        profile[key] = value[key];
    if (value.quality === 'balanced' || value.quality === 'detailed')
      profile.quality = value.quality;
    if (typeof value.reducedMotion === 'boolean')
      profile.reducedMotion = value.reducedMotion;
    if (typeof value.haptics === 'boolean') profile.haptics = value.haptics;
  } catch {
    /* Invalid storage falls back to defaults. */
  }
  return { profile, writable: true };
}
