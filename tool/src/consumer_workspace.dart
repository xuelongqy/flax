import 'dart:io';

import 'package:path/path.dart' as p;

/// Stable CI paths preserve compiler intermediates; local callers stay disposable.
final class ConsumerWorkspace {
  ConsumerWorkspace(String name, {String? cacheRoot}) {
    final cache = cacheRoot ?? Platform.environment['FLAX_CONSUMER_CACHE'];
    persistent = cache != null;
    directory = cache == null
        ? Directory.systemTemp.createTempSync('$name-')
        : (Directory(p.join(cache, name))..createSync(recursive: true));
  }

  late final bool persistent;
  late final Directory directory;
  final _saved = <(Directory, Directory)>[];

  /// Remove original compiler outputs before relocation, then restore for reuse.
  void removeBuild(Directory source) {
    if (!source.existsSync()) return;
    if (!persistent) {
      source.deleteSync(recursive: true);
      return;
    }
    final saved = Directory(
      p.join(
        directory.path,
        '.saved',
        p.relative(source.path, from: directory.path),
      ),
    );
    if (saved.existsSync()) saved.deleteSync(recursive: true);
    saved.parent.createSync(recursive: true);
    source.renameSync(saved.path);
    _saved.removeWhere((entry) => entry.$1.path == source.path);
    _saved.add((source, saved));
  }

  void finish() {
    if (!persistent) {
      if (directory.existsSync()) directory.deleteSync(recursive: true);
      return;
    }
    for (final (source, saved) in _saved) {
      if (source.existsSync()) source.deleteSync(recursive: true);
      source.parent.createSync(recursive: true);
      saved.renameSync(source.path);
    }
    final savedRoot = Directory('${directory.path}/.saved');
    if (savedRoot.existsSync()) savedRoot.deleteSync(recursive: true);
  }
}
