import 'dart:typed_data' as bytes;

class Uint8List {
  Uint8List();
}

class ByteConsumer {
  ByteConsumer();
  bytes.Uint8List echo(bytes.Uint8List value) => value;
}
