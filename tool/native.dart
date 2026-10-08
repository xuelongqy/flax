import 'src/process.dart';

Future<void> main(List<String> arguments) => command(() async {
  throw UnsupportedError(
    'Flax is built into its Flutter engine. Build the matching artifacts with '
    'python3 engine/src/flutter/flax/tools/build_engine.py --sdk <verified-v8-sdk> '
    '--mode debug from the Flutter fork. Standalone bridge builds are retired.',
  );
});
