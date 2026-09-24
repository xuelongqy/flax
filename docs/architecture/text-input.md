# Material Text Input and Focus

Implemented for macOS arm64 Hermes/V8 with UI protocol 21. All selected calls use
generated Dart APIs; no Controller-specific validation or formatter fallback is added.

## Selected API

- TextEditingController: unnamed text constructor, fromValue, text/value/selection
  getters and setters, clear, clearComposing, listeners and dispose.
- TextEditingValue: text, selection, composing, isComposingRangeValid, empty, copyWith.
- TextSelection: unnamed/collapsed constructors, offsets, affinity, directionality,
  inherited range getters and copyWith. TextRange: unnamed/collapsed, range getters,
  empty.
- FocusNode: debugLabel/canRequestFocus/skipTraversal constructor options; hasFocus,
  hasPrimaryFocus; writable canRequestFocus/skipTraversal; requestFocus, unfocus,
  nextFocus, previousFocus, listeners and dispose.
- TextInputFormatter.withFunction; FilteringTextInputFormatter unnamed/allow/deny,
  digitsOnly and singleLineFormatter; LengthLimitingTextInputFormatter and its
  enforcement constructor option. RegExp uses its real Dart constructor and flags.
- Material TextField: key, controller, focusNode, inputFormatters, onChanged,
  onSubmitted, onEditingComplete, enabled, readOnly, obscureText, autofocus,
  autocorrect, enableSuggestions, minLines, maxLines, textInputAction.

Required enums are generated from their actual declaration identities. Controllers,
values and formatters belong to core bindings; TextField belongs to the standalone
Material package. Unlisted APIs are not exposed. Widget parameters except key accept
bindings; ordinary constructors, setters and methods do not.

## Editing values and notifications

Values are readonly references to actual immutable Dart instances. Each field read calls
its getter; nested reads make multiple bridge calls. A saved old controller.value
remains unchanged when the controller receives a new value. copyWith invokes Dart on the
original receiver. Omission preserves real Dart defaults, with no copied constructor
logic or restoration from snapshots.

A controller listener can read value once and update a presentation signal. The
application explicitly writes controller state; Flax does not create a two-way effect.
Writing text resets selection/composing; writing value updates them atomically. Other
methods invoke Flutter without normalization. UTF-16 offsets, equality-based
notification and selection/composing rules are Flutter's. onChanged reports user edits
rather than programmatic writes; controller listeners observe editing state changes.

## Focus and formatting

TextField borrows FocusNode and Controller objects. Flutter manages attachment and
traversal. Applications register listener removal and disposal with page lifecycle
cleanup. Replacing a node or controller does not transfer disposal responsibility.

Formatters are real Dart objects retaining generated callback closures. Multiple fields
can share one formatter, and unmounting one field does not retire the other's callback.
Lists are converted to typed Dart lists. Their order and Flutter's composing, selection
and length calculations are preserved. Programmatic Controller writes or replacing the
formatter list do not force reformatting.

A custom formatter must synchronously return TextEditingValue. Promise results are
rejected. A thrown error propagates through Flutter's input error boundary once; Flax
neither returns oldValue automatically nor promises editing rollback. Applications may
explicitly return oldValue to reject an edit, and should respect composing state:

```javascript
const formatter = TextInputFormatter.withFunction((oldValue, newValue) => {
  if (!newValue.composing.isCollapsed) return newValue;
  return newValue.text.includes('!') ? oldValue : newValue;
});
```

Disposal preconditions and release-mode assertions match direct Dart usage. Page cleanup
runs after content descendants unmount. Session close only removes bridge listeners and
references; applications must dispose their own nodes/controllers. See
[objects and callbacks](objects.md).

## Tests and limits

Node tests validate transport wrappers; real Hermes/V8 Flutter tests validate
construction, editing, focus traversal, formatting, replacement, exceptions and local
signals updates. The macOS integration test operates real TextFields and focus nodes.
Composition sequences are injected through Flutter's input channel, not a certified
system-IME end-to-end test. Bridge getter calls and Flax host rebuilds are counted
separately from Flutter editing internals. Cupertino input, validation, autofill and
general two-way binding remain out of scope.
