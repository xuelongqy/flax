import 'dart:io';

class Partial {
  Partial({this.ok, this.bad});
  final int? ok;
  final Uri? bad;
}

class Box<T> {
  Box(this.value);
  final T value;
}

class Fat {
  Fat({
    this.a = const Object(),
    this.b = const Object(),
    this.c = const Object(),
    this.d = const Object(),
    this.e = const Object(),
    this.f = const Object(),
    this.g = const Object(),
  });
  final Object a;
  final Object b;
  final Object c;
  final Object d;
  final Object e;
  final Object f;
  final Object g;
}

class Holder {
  Holder({this.file, this.ok});
  final File? file;
  final int? ok;
}

class Hidden {
  Hidden._();
}

class RequiredFile {
  RequiredFile({required this.file});
  final File file;
}
