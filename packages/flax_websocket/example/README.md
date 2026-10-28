# WebSocket playground

Connect to an echo server, send a message, inspect the reply and disconnect. Leaving the
page closes its connection and detaches event handlers. The
[top-level playground](../../../examples/embedded/README.md) uses the same private
`./showcase` widget.

The example launch command starts a Dart echo server on a random loopback port and
injects its base URL. **Connect** opens `/socket`; **Send message** displays the echoed
text. A complete public ws:// or wss:// URL can be entered instead.

Keep the launch command running: quitting or detaching closes the server and active
connections. The development server is not embedded in packaged applications. Direct
Flutter runs can use `startApplication(apiBaseUrl: ...)` or the `FLAX_FETCH_BASE_URL`
Dart define to select an existing server.

The example test uses a local echo server and verifies that unmounting closes the
connection. From the repository root, open this example alone or run its package checks:

```sh
dart run tool/example_run.dart --package=flax_websocket
dart run tool/package.dart integration flax_websocket
```
