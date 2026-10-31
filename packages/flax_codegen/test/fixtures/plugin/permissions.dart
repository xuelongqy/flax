import 'package:flax_annotations/flax_annotations.dart';

const readNotes = FlaxPermissionDefinition(
  id: 'example.notes.read',
  title: 'Read notes',
  authorization: FlaxPermissionAuthorization.runtime,
);
const writeNotes = FlaxPermissionDefinition(
  id: 'example.notes.write',
  title: 'Write notes',
  authorization: FlaxPermissionAuthorization.runtime,
);

class PermissionStore {
  @FlaxPermissionGuard(readNotes)
  PermissionStore(this.path);
  final String path;

  @FlaxPermissionGuard(readNotes)
  String read({String fallback = 'empty'}) => path.isEmpty ? fallback : path;
  @FlaxPermissionGuard(readNotes)
  T identity<T>(T value) => value;
  @FlaxPermissionGuard(readNotes)
  String get value => read();
  @FlaxPermissionGuard(writeNotes)
  set value(String value) {}
  @FlaxPermissionGuard(readNotes)
  String operator [](int index) => read();
  @FlaxPermissionGuard(readNotes)
  static PermissionStore get host => PermissionStore('host');
}

class ChildPermissionStore extends PermissionStore {
  ChildPermissionStore(super.path);
}

@FlaxPermissionGuard(readNotes)
Future<PermissionStore> openPermissionNotes(String path) async =>
    PermissionStore(path);
@FlaxPermissionGuard(readNotes)
Stream<PermissionStore> watchPermissionNotes(String path) =>
    Stream.value(PermissionStore(path));
@FlaxPermissionGuard(readNotes)
const permissionSecret = 'notes';
@FlaxPermissionGuard(readNotes)
String mutablePermissionSecret = 'notes';

extension PermissionExtension on PermissionStore {
  @FlaxPermissionGuard(readNotes)
  String extended(String suffix) => '$value$suffix';
}

enum PermissionKind {
  text;

  @FlaxPermissionGuard(readNotes)
  String get label => name;
  @FlaxPermissionGuard(readNotes)
  String format(String suffix) => '$name$suffix';
  @FlaxPermissionGuard(readNotes)
  static PermissionKind host() => text;
}

@FlaxPermissionGuard(readNotes)
@FlaxPermissionGuard(writeNotes)
void copyPermissionNotes() {}
