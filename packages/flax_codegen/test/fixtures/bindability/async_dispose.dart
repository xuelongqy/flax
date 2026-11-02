class SyncDisposable {
  void dispose() {}
}

class AsyncDisposable extends SyncDisposable {
  @override
  Future<void> dispose() async => super.dispose();
}
