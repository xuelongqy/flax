const defaultFlaxEngine = 'hermes';

String selectedEngine(List<String> arguments) {
  if (arguments.isEmpty) return defaultFlaxEngine;
  if (arguments.length == 1) {
    final match = RegExp(r'^--engine=([a-z][a-z0-9_]*)$')
        .firstMatch(arguments.single);
    if (match != null) return match.group(1)!;
  }
  throw ArgumentError('Expected one --engine=<name> option');
}
