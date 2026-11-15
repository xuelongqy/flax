// Appended to a scratch copy of WrappedMediaPlayer.swift for private-state race tests.
// These accessors are never compiled into the Flutter plugin.
extension WrappedMediaPlayer {
  var proofPending: Int { preparation == nil ? 0 : 1 }
  var proofToken: (generation: UInt64, item: ObjectIdentifier)? {
    guard let record = preparation else { return nil }
    return (record.generation, ObjectIdentifier(record.item))
  }
  func proofStatus(_ status: AVPlayerItem.Status, token: (generation: UInt64, item: ObjectIdentifier)) {
    receiveStatus(status.rawValue, item: token.item, generation: token.generation)
  }
  func proofReset() { reset(reason: "released") }
}

extension WrappedMediaPlayer {
  func proofAttach(_ item: AVPlayerItem) { player.replaceCurrentItem(with: item) }
  var proofCurrent: AVPlayerItem? { player.currentItem }
  var proofEpoch: UInt64 { playbackEpoch }
  func proofComplete(_ item: AVPlayerItem, epoch: UInt64) async {
    await onSoundComplete(item: item, epoch: epoch)
  }
}
