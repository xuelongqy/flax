/// Optional build_runner entry point for package-scoped binding generation.
library;

import 'package:build/build.dart';

import 'src/build.dart';

Builder flaxCodegenBindingsBuilder(BuilderOptions options) =>
    FlaxCodegenBindingsBuilder(options);
