import 'package:flutter/foundation.dart';

import 'editing_span.dart';

class Note {
  const Note({this.text = '', this.selection = Span.empty, this.optional});
  const Note.named(String text) : this(text: text);
  final String text;
  final Span selection;
  final Span? optional;
  bool get emptyText => text.isEmpty;
  static const empty = Note();
  Note copyWith({String? text, Span? selection}) => Note(
    text: text ?? this.text,
    selection: selection ?? this.selection,
    optional: optional,
  );
}

class NoteStore extends ValueNotifier<Note> {
  NoteStore({Note value = Note.empty}) : super(value);
  Span? echo(Span? input) => input;
  void watch(VoidCallback callback) => addListener(callback);
  void unwatch(VoidCallback callback) => removeListener(callback);
  void finish() => dispose();
}

NoteStore checkedNoteStore({Note value = Note.empty}) {
  if (value.text == 'invalid') throw ArgumentError('Invalid note');
  return NoteStore(value: value);
}

void writeNote(NoteStore store, Note value) {
  if (value.text == 'invalid') throw ArgumentError('Invalid note');
  store.value = value;
}

String wrongConstructor({Note value = Note.empty}) => '';
void wrongSetter(NoteStore store, String value) {}
