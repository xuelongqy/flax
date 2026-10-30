# Changelog

## 0.0.0

- Development package boundary established.
- Include Fetch and HTTP types in the default Session host. Create each Session's
  HttpClient on its first request, and configure relative URLs with fetchBaseUrl on
  FlaxSession or FlaxView. Remove the private standalone Fetch packages and plugin.
