import 'dart:async';

class RecursiveUser {
  RecursiveUser(this.name, [this.parent]);

  final String name;
  final RecursiveUser? parent;
}

typedef RecursiveLoader<T> = Future<List<T>> Function(int page);

class RecursiveRepository {
  RecursiveRepository(this.pending);

  final Future<List<RecursiveUser>> pending;
  Future<List<RecursiveUser>> writable = Future.value(<RecursiveUser>[]);
  FutureOr<List<Map<String, RecursiveUser>>> immediateValue =
      <Map<String, RecursiveUser>>[];
  Stream<Map<String, RecursiveUser?>> live =
      const Stream<Map<String, RecursiveUser?>>.empty();

  Future<List<RecursiveUser>> load(Future<List<RecursiveUser>> value) => value;

  Stream<Map<String, RecursiveUser?>> watch(
    Stream<Map<String, RecursiveUser?>> value,
  ) => value;

  FutureOr<List<Map<String, RecursiveUser>>> immediate(
    FutureOr<List<Map<String, RecursiveUser>>> value,
  ) => value;

  Map<String, Stream<List<RecursiveUser>>> nested(
    Map<String, Stream<List<RecursiveUser>>> value,
  ) => value;

  RecursiveLoader<RecursiveUser> loader(RecursiveLoader<RecursiveUser> value) =>
      value;
}

class RecursiveBase<T> {
  RecursiveBase();

  Stream<List<T>> get values => Stream<List<T>>.empty();
}

class RecursiveUserStore extends RecursiveBase<RecursiveUser> {
  RecursiveUserStore();
}

Future<List<RecursiveUser>> recursiveFuture(
  Future<List<RecursiveUser>> value,
) => value;

Stream<Map<String, RecursiveUser?>> recursiveStream(
  Stream<Map<String, RecursiveUser?>> value,
) => value;

FutureOr<List<Map<String, RecursiveUser>>> recursiveFutureOr(
  FutureOr<List<Map<String, RecursiveUser>>> value,
) => value;

Map<String, Stream<List<RecursiveUser>>> recursiveNested(
  Map<String, Stream<List<RecursiveUser>>> value,
) => value;

Future<({RecursiveUser user, List<RecursiveUser> items})> recursiveRecord(
  Future<({RecursiveUser user, List<RecursiveUser> items})> value,
) => value;

Iterable<Future<RecursiveUser>> recursiveIterable(
  Iterable<Future<RecursiveUser>> value,
) => value;

Set<List<RecursiveUser>> recursiveSet(Set<List<RecursiveUser>> value) => value;

Future<List<RecursiveUser>> recursiveTopValue = Future.value(<RecursiveUser>[]);

Stream<Map<String, RecursiveUser?>> recursiveTopStream =
    const Stream<Map<String, RecursiveUser?>>.empty();
