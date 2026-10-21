# Standalone JS Application

The private @flax/example-standalone project describes the complete Material
application. MaterialApp supplies Theme and Navigator. HomePage uses real Flutter State,
explicitly owns its TextEditingController, and keeps independent signals for title and
result text. DetailsPage returns a structured navigation result.

`assets.ts` demonstrates `Image.asset` and a native `FutureBuilder` for JSON. It obtains
the Session's native bundle from `getAssetBundle()` in `@flax/core/assets` and keeps the
loading Future in State. The same JS supports built-in assets, a prepared sandbox
directory, and installed local/remote `.flax` packages. Asset keys use `assets/...` from
the business root, independent of the TS file's location. Resource sources live in this
project's `assets/` directory. The bundle script copies them into
`../assets/flax/assets/` and generates `../assets/flax/flax.json` from `package.json`
(`flax.id`, version, description).

`network_assets.ts` demonstrates the separate HTTP resource path. **Open network
assets** fetches `/assets/config.json` once in State, checks the response, and displays
its `message` and absolute `imageUrl` through FutureBuilder and Image.network. HTTP
errors abort an unread JSON response immediately; closing the page aborts a pending JSON
request, including body reading. The host's Fetch plugin supplies the baseUrl for the
relative JSON request; the image URL comes from the response and is independent of that
setting. These requests do not use FlaxView.network's artifact cache or ETag. The JSON
AbortController does not control the native image request; Image.network keeps Flutter's
cache and transfer lifetime, which can extend beyond the page.

For manual use, configure `FLAX_FETCH_BASE_URL` and provide the endpoints documented in
the [Flutter host example](../README.md#independent-network-images-and-json). The
scenario starts its own loopback server for both JSON and PNG. See the
[loading and storage guide](../../../docs/architecture/applications.md#resource-and-cache-locations)
for the entry-specific defaults and cache overrides.

TypeScript and the bundler use normal package exports. Configuration is self-contained;
there are no repository source aliases or imports from root tools.

```sh
pnpm run typecheck
pnpm run bundle
```

Build the Flax workspace packages first when working inside this repository. The bundle
is an ES2019 IIFE written to the sibling Flutter project's ignored `assets/flax/app.js`.
Node and esbuild are development tools; application code has no Node or browser
dependencies.

The [external verification](../../../docs/architecture/applications.md) installs packed
Flax packages and runs these same commands outside the workspace. Public package names,
registry publication and project creation commands remain undecided.
