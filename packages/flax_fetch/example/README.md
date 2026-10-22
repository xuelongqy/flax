# Fetch playground

Enter a URL, send a request, inspect its HTTP status and body, or cancel it. Pending
work is aborted when State disposes. The example is shared with the
[top-level playground](../../../examples/embedded/README.md) through `./showcase`.

The example launch command starts a Dart HTTP server on a random loopback port and
injects its base URL. **Send request** calls `/status` and displays JSON. **Try slow
request** calls `/slow`, which waits five seconds; **Cancel request** aborts it.
Requests start only when a control is pressed. You can also enter a complete public
HTTP/HTTPS URL.

Keep the launch command running: quitting or detaching stops its local server. The
development server is not embedded in packaged applications. Direct Flutter runs can use
`startApplication(apiBaseUrl: ...)` or the `FLAX_FETCH_BASE_URL` Dart define to select
an existing server.

The example test uses a loopback server to verify a JSON response and cancellation of a
pending request. From the repository root, open this example alone or run its package
checks:

```sh
dart run tool/example_run.dart --package=flax_fetch
dart run tool/package.dart integration flax_fetch --engine=v8
```
