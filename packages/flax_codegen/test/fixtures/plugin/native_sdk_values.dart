import 'dart:typed_data';

export 'dart:core' show BigInt;
export 'dart:typed_data' show Int16List;

class NativeSdkConsumer {
  NativeSdkConsumer();
  BigInt integer(BigInt value) => value;
  Int16List samples(Int16List value) => value;
}
