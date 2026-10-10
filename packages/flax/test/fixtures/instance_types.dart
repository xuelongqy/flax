sealed class CodegenResult {
  CodegenResult();
  factory CodegenResult.success(int value) = CodegenSuccess;
  factory CodegenResult.failure(String message) = CodegenFailure;
  factory CodegenResult.hidden() => _HiddenResult();
  factory CodegenResult.extra(int value) => _ExtraSuccess(value);

  String get status;
  String describe() => 'result:$status';
}

abstract interface class CodegenReadable {
  int read();
}

mixin CodegenTagged {
  String get tag => 'tag';
}

class CodegenSuccess extends CodegenResult
    with CodegenTagged
    implements CodegenReadable {
  CodegenSuccess(this.value);
  final int value;
  @override
  String get status => 'success';
  @override
  int read() => value;
}

final class CodegenFailure extends CodegenResult {
  CodegenFailure(this.message);
  final String message;
  @override
  String get status => 'failure';
}

final class _HiddenResult extends CodegenResult {
  @override
  String get status => 'hidden';
}

final class _ExtraSuccess extends CodegenSuccess {
  _ExtraSuccess(super.value);
}

class CodegenResultConsumer {
  CodegenResult echo(CodegenResult value) => value;
  int read(CodegenReadable value) => value.read();
  String tag(CodegenTagged value) => value.tag;
}
