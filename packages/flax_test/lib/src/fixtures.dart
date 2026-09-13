import 'dart:io';

String flaxTestFixtureSource(String name) =>
    File('.dart_tool/flax/ui/$name.js').readAsStringSync();
