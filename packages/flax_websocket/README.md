# Flax WebSocket

Optional session WebSocket support for macOS arm64 Hermes and V8. Install independently
of Fetch; MessageEvent, Blob and binary types come from the base environment.

Install Dart `flax_websocket` and npm `@flax/websocket` at the same exact version. The
npm package is declarations-only; constructing and registering `FlaxWebSocketPlugin`
installs the actual implementation for each selected session.

```yaml
dependencies:
  flax_websocket: <version>
```

```sh
pnpm add @flax/websocket@<version>
```

```dart
Flax.registerPlugins([
  FlaxWebSocketPlugin(
    baseUrl: 'wss://example.com/',
    createHttpClient: () => HttpClient(context: securityContext)
      ..findProxy = resolveProxy,
  ),
]);
```

Import `dart:io`, `package:flax/flax.dart` and
`package:flax_websocket/flax_websocket.dart`. The factory must return a fresh client for
each connection. The plugin closes that client, including failed or cancelled
handshakes. Configure private certificate authorities, client certificates and proxy
authentication on that client. Default certificate verification remains enabled.

The plugin installs WebSocket and CloseEvent before application code; no JS installation
import is needed. `@flax/websocket/globals` provides optional TypeScript declarations.
Read the [WebSocket contract](../../docs/architecture/websocket.md) for supported
operations, limits and lifecycle. **bufferedAmount is not implemented or declared.**

An OPEN connection has a total five-second close budget, beginning when JS calls
close(), including pending sends. Expiry destroys the transport and reports an abnormal
close. This deadline is independent of the configurable handshake timeout.

Run `host:generate` after changing the JS implementation. Sandboxed macOS applications
need `com.apple.security.network.client`; the plugin does not change app entitlements.
