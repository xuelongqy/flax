import 'dart:io';

import 'package:flax_local_storage/src/store.dart';

Future<void> main(List<String> arguments) async {
  final store = await FlaxLocalStorageStore.open(arguments.single, 10485760);
  try {
    if (store.getItem('process', 'key\ud800') != 'value\udfff') {
      throw StateError(
        'Persistent UTF-16 data did not survive process restart',
      );
    }
    stdout.writeln('persisted UTF-16 verified');
  } finally {
    await store.close();
  }
}
