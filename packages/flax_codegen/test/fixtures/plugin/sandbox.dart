import 'package:flax/sandbox.dart';
import 'package:flax_annotations/flax_annotations.dart';

class NotePolicy {}

class NoteStore {
  @FlaxSandboxGuard(policyType: NotePolicy, handler: createNotes, replace: true)
  NoteStore(this.path);
  final String path;
  FlaxSandboxScope? _scope;

  @FlaxSandboxGuard(policyType: NotePolicy, handler: checkNotes)
  String read({String fallback = 'empty'}) {
    _scope?.requireActive();
    return path.isEmpty ? fallback : path;
  }

  @FlaxSandboxGuard(policyType: NotePolicy, handler: checkNotes)
  T identity<T>(T value) => value;
  @FlaxSandboxGuard(policyType: NotePolicy, handler: checkNotes)
  String get value => read();
  @FlaxSandboxGuard(policyType: NotePolicy, handler: checkNotes)
  set value(String value) {}
  @FlaxSandboxGuard(policyType: NotePolicy, handler: checkNotes)
  String operator [](int index) => read();
  @FlaxSandboxGuard.deny()
  static NoteStore get host => NoteStore('host');
}

NoteStore createNotes(FlaxSandboxContext c, NotePolicy p, String path) =>
    NoteStore(path).._scope = c.scope;
void checkNotes(FlaxSandboxContext c, NotePolicy p, NoteStore receiver) {
  c.scope.requireActive();
}

@FlaxSandboxGuard(policyType: NotePolicy, handler: sandboxOpen, replace: true)
Future<NoteStore> openNotes(String path) => Future.value(NoteStore(path));
Future<NoteStore> sandboxOpen(
  FlaxSandboxContext c,
  NotePolicy p,
  String path,
) => Future.value(createNotes(c, p, path));
@FlaxSandboxGuard(policyType: NotePolicy, handler: sandboxWatch, replace: true)
Stream<NoteStore> watchNotes(String path) => Stream.value(NoteStore(path));
Stream<NoteStore> sandboxWatch(
  FlaxSandboxContext c,
  NotePolicy p,
  String path,
) => Stream.value(createNotes(c, p, path));
@FlaxSandboxGuard.deny()
const hostSecret = 'host-only';

extension NoteExtension on NoteStore {
  @FlaxSandboxGuard(policyType: NotePolicy, handler: checkExtension)
  String extended(String suffix) => '$value$suffix';
}

void checkExtension(FlaxSandboxContext c, NotePolicy p, NoteStore receiver) {
  c.scope.requireActive();
}

enum NoteKind {
  text;

  @FlaxSandboxGuard(policyType: NotePolicy, handler: checkKind)
  String get label => name;
  @FlaxSandboxGuard(policyType: NotePolicy, handler: checkKind)
  String format(String suffix) => '$name$suffix';
  @FlaxSandboxGuard.deny()
  static NoteKind host() => text;
}

void checkKind(FlaxSandboxContext c, NotePolicy p, NoteKind receiver) {
  c.scope.requireActive();
}

@FlaxSandboxGuard.deny()
class InvalidClass {
  InvalidClass();
}

enum InvalidConstant {
  @FlaxSandboxGuard.deny()
  secret,
}

@FlaxSandboxGuard(policyType: NotePolicy, handler: asyncGuard)
void invalidAsync() {}
void asyncGuard(FlaxSandboxContext c, NotePolicy p) async {}
@FlaxSandboxGuard(
  policyType: NotePolicy,
  handler: generatorGuard,
  replace: true,
)
Stream<int> invalidGenerator() => const Stream.empty();
Iterable<int> generatorGuard(FlaxSandboxContext c, NotePolicy p) sync* {
  yield 1;
}
