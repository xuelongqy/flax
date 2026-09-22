class Box<T> {
  Box(this.value);
  final T? value;
}

class VoidBox extends Box<void> {
  VoidBox() : super(null);

  int reads = 0;

  void get explicitValue {
    reads++;
  }

  void get failure {
    reads++;
    throw StateError('getter failure');
  }
}

class IndirectVoidBox extends VoidBox {}

class StringBox extends Box<String> {
  StringBox() : super('kept');
}
