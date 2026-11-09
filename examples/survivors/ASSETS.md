# Lumen Outpost assets

## Directional actors and industrial floor

The current renderer uses two original images made with the built-in `image_gen` tool on
2026-11-05, with the directional actor shadow edit on 2026-11-06. The approved Lumen
Outpost concept and the original actor atlas were visual references; no other game's
artwork was used. The images are separate assets, not screenshots composited over
gameplay.

| File under `js/assets/images/` | Format                 | SHA-256                                                            |
| ------------------------------ | ---------------------- | ------------------------------------------------------------------ |
| `actors-directional-v3.png`    | 1,254 × 1,254 RGBA PNG | `1e389d607e63d6cf21d1d34981d18b36c7a159cd9f29d49d0b6d1cd64b61b6e5` |
| `floor-metal-v2.png`           | 1,254 × 1,254 RGB PNG  | `982e53deb494ecc7ba94a03f36a8a94a6245e6d766ef97773d1bea68ba100b37` |

The transparent actor sheet has six columns and six rows of 209-pixel square cells.
Actor columns are drone, orange pursuer, magenta flanker, rust brute, yellow sentry and
guardian. Rows zero through four face east, northeast, north, southeast and south;
western directions mirror the corresponding eastern pose. The last row contains the
experience crystal, bolt, orbit blade, chain nodes, pulse crown and amber impact.
Characters remain upright while their pose changes. The floor texture is baked once with
world-aligned panel details; neither image consumes simulation randomness.

The retained `actors-directional-v2.png` is the input reference for the current actor
sheet. Its SHA-256 is
`4c33a4d3925c670faca3b391ff1ae1eb131392d03aaa0294ac1f8161000113af`.

### Directional shadow edit brief

Edit the six-by-six directional atlas, using the approved concept only as a style
reference. Replace the opaque gray ovals under the actors with soft, translucent dark
contact shadows. Preserve the actor identities, colors, poses, proportions and cell
placement, the six-by-six layout and the final row of experience and weapon effects.
Keep a 1,254-pixel square transparent PNG with no scenery, labels, borders or watermark.
The edit uses the built-in `image_gen` tool; it does not add runtime shadow images.

### Directional atlas generation brief

Create a production sprite atlas for the original sci-fi survival game Lumen Outpost.
Use the supplied concept and original sprites as style and character references. Output
a square transparent PNG in an exact six-column by six-row grid, equal square cells,
with no labels, borders, drawn grid or scenery. Keep each complete sprite centered with
transparent margins. Columns: white cyan maintenance drone, orange angular crab pursuer,
magenta beetle flanker, rust armored brute, yellow gun sentry, larger rust armored
guardian. Five actor rows: east/right side, northeast/back-right, north/back,
southeast/front-right, south/front. Draw real distinct views of the same characters,
preserving upright near-top-down three-quarter perspective and consistent proportions;
do not rotate a single flat sticker to make new views. Sixth row: green experience
crystal, cyan bolt pointing right, cyan curved orbit blade, cyan linked chain nodes,
cyan pulse crown, amber impact star. Crisp illustrated contours, readable cel shading
and localized glow. No floor, UI, watermark or painted checkerboard.

### Industrial floor generation brief

Create a seamless square top-down industrial outpost floor texture matching the provided
Lumen Outpost concept. Dark blue gunmetal steel plates with varied chamfered rectangular
panels, restrained wear, scuffs, rivets, recessed cable channels and small vents. Add
occasional muted amber hazard stripes near panel edges. Preserve enough quiet dark area
for cyan projectiles and warm enemies to read clearly. Orthographic flat lighting, no
perspective horizon, characters, props, UI, lettering, logos or watermark. Avoid a
bright regular grid and excessive glowing lines.

## Original actor reference

`js/assets/images/actors.png` is original AI-generated artwork produced with the
built-in `image_gen` tool on 2026-11-05, following the approved Lumen Outpost visual
concept. It contains actual actor sprites, not a gameplay screenshot. No artwork from
another game was used as an input.

This retained reference is not loaded by the current renderer. The PNG is 1,774 by 887
pixels with alpha, four columns and two rows. Cells are equal squares of 443.5 source
pixels; Canvas source rectangles accept fractional positions. In reading order: drone,
pursuer, flanker, brute, sentry, guardian, experience crystal, energy bolt. The renderer
may inset each source cell by five percent to exclude faint generation traces in the
otherwise transparent cell margins.

### Generation prompt

Create a production game sprite atlas for the original 2D game Lumen Outpost, using the
approved concept only as an art-style and character reference. Output one wide 2:1 PNG
with real transparent alpha. Use a regular four-column by two-row grid of eight equal
square cells, without gutters, borders, labels or a drawn grid. Center every complete
sprite in its cell with at least twelve percent transparent margin. Top row: white and
cyan maintenance drone, orange angular beetle pursuer, magenta slim flanker, rust-red
armored brute. Bottom row: yellow ranged sentry, large rust-armored guardian with an
orange reactor, mint diamond experience crystal, cyan energy bolt pointing right. Use
consistent near-top-down 2D illustrated sprites, crisp contours, clean cel shading and
readable silhouettes at 32 to 72 screen pixels. Keep localized crystal/bolt glow. Do not
add floor, scenery, UI, rectangular backplates, text, watermark or a painted
checkerboard. Preserve cyan player versus warm enemy colors.

## Audio

The bundled WAV files are generated from the original, deterministic synthesis recipes
in [generate_audio.py](tool/generate_audio.py). Run that script to reproduce them. They
require no downloaded samples or additional Python packages.
