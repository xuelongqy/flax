# ADR 0044: Native Widget Interface Values

Status: accepted. Supersedes the forwarding-host implementation of ADR 0029.

## Decision

Widget factories with selected `widgetInterfaces` use the ordinary object factory and
return the actual Dart Widget. Generic interface arguments are resolved from the real
implemented supertype. JS subclasses use the existing native Widget proxy, checked type
handles and shared peer lifecycle.

Flutter invokes native members on that Widget directly. No second host implements the
interface, copies method defaults or reserves member names such as `configuration`.
Native-only signatures may retain private types/defaults because no generated import or
JS conversion is needed. Explicit JS APIs retain normal conversion and visibility rules.

Constructor inputs remain fixed; replace the containing property to change them. Child
Widgets retain their independent signals and subscriptions. Flutter still owns State and
Element lifetimes; callbacks and JS peers use the existing joint-GC ownership.

## Version and boundaries

Manifest 21 removes forwarding source/imports from native member metadata and rejects
previous formats. Providers and consumers regenerate together. Selection format 2, UI
protocol 24, internal engine binding extension 8 and native ABI 2 are unchanged. No new
engine API or per-interface runtime branch is added.

A Type token does not turn a plain JS object into a Dart Widget. A real compiled Dart
class must implement the selected interface; legal JS overrides use its generated proxy.
Incompatible interfaces, Dart class modifiers, foreign sessions and invalid callback
arguments retain their normal checks.
