import AVKit
import Foundation

// Only Flutter event plumbing is stubbed; production AVPlayer/KVO and continuations run.
@MainActor final class AudioplayersDarwinPlugin { func controlAudioSession() {} }
@MainActor final class AudioPlayersStreamHandler {
  var prepared = 0
  var completes = 0
  var errors = 0
  func onError(code: String, message: String, details: Any?) { errors += 1 }
  func onPrepared(isPrepared: Bool) { if isPrepared { prepared += 1 } }
  func onDuration(millis: Int) {}
  func onLog(message: String) {}
  func onComplete() { completes += 1 }
  func onSeekComplete() {}
  func dispose() {}
}
final class GatePlayer: AVPlayer, @unchecked Sendable {
  var held: AVPlayerItem?
  override func replaceCurrentItem(with item: AVPlayerItem?) {
    if let item = item { held = item } else { super.replaceCurrentItem(with: nil) }
  }
  func attach() { super.replaceCurrentItem(with: held) }
}
final class SeekGateItem: AVPlayerItem, @unchecked Sendable {
  var completions = [@Sendable (Bool) -> Void]()
  override func seek(to time: CMTime, completionHandler: (@Sendable (Bool) -> Void)? = nil) {
    if let reply = completionHandler { completions.append(reply) }
  }
}
// Selected only by the scratch source factory in test_darwin_preparation.py.
@MainActor enum ProofItems {
  static var holdNextSeek = false
  static func make(_ url: URL) -> AVPlayerItem {
    if holdNextSeek {
      holdNextSeek = false
      return SeekGateItem(url: url)
    }
    return AVPlayerItem(url: url)
  }
}
// Used only by the scratch source to suspend a prepared loop before publication.
@MainActor final class MusicPublicationGate {
  static var next: MusicPublicationGate?
  var waiting: CheckedContinuation<Void, Never>?

  static func waitIfArmed() async {
    guard let gate = next else { return }
    next = nil
    await withCheckedContinuation { gate.waiting = $0 }
  }

  func release() {
    waiting?.resume()
    waiting = nil
  }
}

@MainActor final class PreparationResult {
  var count = 0
  var cancellation: String?
  var genuineError = false
  var errorDescription: String?
}
@MainActor struct Fixture {
  let gate = GatePlayer()
  let events = AudioPlayersStreamHandler()
  let player: WrappedMediaPlayer
  init() { player = WrappedMediaPlayer(reference: AudioplayersDarwinPlugin(), eventHandler: events, player: gate) }
  func source(_ path: String) -> PreparationResult {
    let result = PreparationResult()
    Task { @MainActor in
      do { try await player.setSourceUrl(url: path, isLocal: true) }
      catch let error as AudioPlayerPreparationCancelled { result.cancellation = error.reason }
      catch { result.genuineError = true; result.errorDescription = String(describing: error) }
      result.count += 1
    }
    return result
  }
}
@main struct PreparationProof {
  @MainActor static func require(_ value: @autoclosure () -> Bool, _ message: String) {
    guard value() else { print("DARWIN_PREPARATION_FAILED: \(message)"); exit(1) }
  }
  @MainActor static func until(_ ready: () -> Bool) async {
    for _ in 0..<300 {
      if ready() { return }
      try? await Task.sleep(nanoseconds: 5_000_000)
    }
    require(false, "bounded native preparation wait expired")
  }
  @MainActor static func loopGap(_ player: WrappedMediaPlayer, duration: Int) async -> Double {
    await player.seek(time: toCMTime(millis: duration - 400))
    player.resume()
    var tail: (position: Int, time: TimeInterval)?
    let deadline = ProcessInfo.processInfo.systemUptime + 2
    while ProcessInfo.processInfo.systemUptime < deadline {
      let now = ProcessInfo.processInfo.systemUptime
      let position = player.getCurrentPosition() ?? 0
      if position >= duration - 200 && position < duration && position > (tail?.position ?? 0) {
        tail = (position, now)
      }
      if let tail, (10...200).contains(position) {
        player.pause()
        return (now - tail.time) * 1000 - Double(duration - tail.position + position)
      }
      try? await Task.sleep(nanoseconds: 2_000_000)
    }
    require(false, "music did not loop within the measurement window")
    return .infinity
  }

  @MainActor static func main() async {
    let music = CommandLine.arguments[1], effect = CommandLine.arguments[2]
    do {
      let f = Fixture(), r = f.source(music)
      await until { f.player.proofPending == 1 }
      await f.player.release()
      await until { r.count == 1 }
      require(r.cancellation == "released" && f.player.proofPending == 0 && f.events.prepared == 0, "release cancellation")
    }
    do {
      let f = Fixture(), r = f.source(music)
      await until { f.player.proofPending == 1 }
      await f.player.dispose()
      await until { r.count == 1 }
      let later = f.source(effect)
      await until { later.count == 1 }
      require(r.cancellation == "disposed" && later.cancellation == "disposed" && f.player.proofPending == 0, "dispose and disposed guard")
    }
    do {
      let f = Fixture(), old = f.source(music)
      await until { f.player.proofPending == 1 }
      let token = f.player.proofToken!
      let new = f.source(effect)
      await until { old.count == 1 && f.player.proofToken!.generation != token.generation }
      require(old.cancellation == "replaced" && new.count == 0 && f.player.proofPending == 1, "replacement must leave new request held")
      await Task.detached { await f.player.proofStatus(.readyToPlay, token: token) }.value
      f.player.proofStatus(.failed, token: token)
      require(new.count == 0 && f.player.proofPending == 1 && f.events.prepared == 0, "stale callbacks must not settle replacement")
      await f.player.dispose()
      await until { new.count == 1 }
      require(new.cancellation == "disposed" && old.count == 1, "replacement results exactly once")
    }
    do {
      let f = Fixture(), r = f.source(music)
      await until { f.player.proofPending == 1 }
      let token = f.player.proofToken!
      f.player.proofStatus(.readyToPlay, token: token)
      f.player.proofReset() // Before the resumed source task can re-enter MainActor.
      await until { r.count == 1 }
      require(r.cancellation == "stale" && f.events.prepared == 0 && f.player.proofPending == 0, "ready followed by reset must not revive source")
    }
    do {
      let f = Fixture(), r = f.source(music)
      await until { f.player.proofPending == 1 }
      f.player.proofStatus(.failed, token: f.player.proofToken!)
      await until { r.count == 1 }
      require(r.genuineError && r.cancellation == nil && f.player.proofPending == 0, "genuine decoder failure preserved")
    }
    do {
      let f = Fixture(), r = f.source(music)
      await until { f.player.proofPending == 1 }
      let token = f.player.proofToken!
      f.gate.attach() // Real AVFoundation readiness/KVO, no injected success snapshot.
      await until { r.count == 1 }
      require(r.cancellation == nil && !r.genuineError && f.events.prepared == 1 && f.player.proofPending == 0, "real AVPlayer readiness")
      await Task.detached { await f.player.proofStatus(.readyToPlay, token: token) }.value
      f.player.proofStatus(.readyToPlay, token: token)
      require(r.count == 1 && f.events.prepared == 1, "duplicate/background callback exactly once")
      await f.player.dispose()
    }
    for mode in [ReleaseMode.stop, ReleaseMode.loop] {
      let f = Fixture(), r = f.source(music)
      f.player.releaseMode = mode
      await until { f.player.proofPending == 1 }
      await f.player.stop()
      require(f.player.proofPending == 1 && r.count == 0, "stop/loop must preserve live preparation")
      await f.player.dispose()
      await until { r.count == 1 }
      require(r.cancellation == "disposed" && f.player.proofPending == 0, "held stop/loop disposal")
    }
    do {
      let events = AudioPlayersStreamHandler()
      let player = WrappedMediaPlayer(reference: AudioplayersDarwinPlugin(), eventHandler: events, releaseMode: .stop)
      let old = SeekGateItem(url: URL(fileURLWithPath: effect))
      player.proofAttach(old)
      player.resume()
      let epoch = player.proofEpoch
      var done = false
      Task { @MainActor in await player.proofComplete(old, epoch: epoch); done = true }
      await until { old.completions.count == 1 }
      require(events.completes == 0, "no reusable completion before native seek cleanup")
      let fresh = AVPlayerItem(url: URL(fileURLWithPath: music))
      player.proofAttach(fresh)
      player.resume()
      old.completions[0](true)
      await until { done }
      require(player.isPlaying && player.proofCurrent === fresh && events.completes == 0,
        "old held seek cannot stop or complete fresh playback")
      await player.dispose()
    }
    do {
      let events = AudioPlayersStreamHandler()
      let player = WrappedMediaPlayer(reference: AudioplayersDarwinPlugin(), eventHandler: events, releaseMode: .stop)
      let item = SeekGateItem(url: URL(fileURLWithPath: effect))
      player.proofAttach(item)
      player.resume()
      NotificationCenter.default.post(name: .AVPlayerItemDidPlayToEndTime, object: item)
      player.pause()
      player.resume()
      // A new valid notification gives a positive execution gate, without a delay guess.
      NotificationCenter.default.post(name: .AVPlayerItemDidPlayToEndTime, object: item)
      await until { item.completions.count == 1 }
      require(events.completes == 0, "queued stale notification cannot publish early completion")
      item.completions[0](true)
      await until { events.completes == 1 }
      require(!player.isPlaying && item.completions.count == 1,
        "same-item pause/resume rejects old epoch but accepts current notification")
      await player.dispose()
    }
    for mode in [ReleaseMode.stop, ReleaseMode.loop, ReleaseMode.release] {
      let events = AudioPlayersStreamHandler()
      let player = WrappedMediaPlayer(reference: AudioplayersDarwinPlugin(), eventHandler: events, releaseMode: mode)
      let item = SeekGateItem(url: URL(fileURLWithPath: effect))
      player.proofAttach(item)
      player.resume()
      let epoch = player.proofEpoch
      var finished = 0
      for _ in 0..<2 {
        Task { @MainActor in await player.proofComplete(item, epoch: epoch); finished += 1 }
      }
      await until { item.completions.count == 2 }
      require(events.completes == 0, "mode cleanup must precede completion")
      for reply in item.completions { reply(true) }
      await until { finished == 2 }
      require(events.completes == 1 && player.isPlaying == (mode == .loop),
        "STOP/LOOP/RELEASE duplicate completion exactly once")
      require((mode != .release) == (player.proofCurrent === item), "release retires only its own item")
      await player.dispose()
    }
    do {
      let events = AudioPlayersStreamHandler()
      let player = WrappedMediaPlayer(reference: AudioplayersDarwinPlugin(), eventHandler: events, releaseMode: .stop)
      try! await player.setSourceUrl(url: music, isLocal: true)
      player.resume()
      try! await player.setSourceUrl(url: effect, isLocal: true)
      require(player.isPlaying && events.prepared == 2, "direct source publication preserves playing intent")
      await until { events.completes == 1 }
      require(!player.isPlaying && events.completes == 1,
        "direct source while playing keeps real AVPlayer end notification")
      await player.dispose()
    }
    do {
      let events = AudioPlayersStreamHandler(), av = AVPlayer()
      let player = WrappedMediaPlayer(reference: AudioplayersDarwinPlugin(), eventHandler: events, player: av, releaseMode: .stop)
      ProofItems.holdNextSeek = true
      try! await player.setSourceUrl(url: effect, isLocal: true)
      let item = av.currentItem as! SeekGateItem
      require(item.status == .readyToPlay, "same-source item is actually ready")
      player.resume()
      await until { item.completions.count == 1 } // Actual AVPlayer natural end, no synthetic notification.
      let epoch = player.proofEpoch
      require(events.completes == 0, "genuine end waits for native cleanup")
      try! await player.setSourceUrl(url: effect, isLocal: true)
      require(player.proofCurrent === item && player.proofEpoch == epoch,
        "same ready source is an acknowledgement, not a new playback epoch")
      item.completions[0](true)
      await until { events.completes == 1 }
      require(!player.isPlaying && av.rate == 0 && events.prepared == 2,
        "same ready source preserves genuine completion after held end-seek")
      await player.dispose()
    }
    do {
      let broken = URL(fileURLWithPath: ProcessInfo.processInfo.environment["TMPDIR"]!)
        .appendingPathComponent("survivors-broken-\(UUID().uuidString).wav")
      try! Data("invalid audio".utf8).write(to: broken)
      defer { try? FileManager.default.removeItem(at: broken) }
      let f = Fixture(), r = f.source(broken.path)
      await until { f.player.proofPending == 1 }
      let item = f.gate.held!
      f.gate.attach()
      await until { r.count == 1 }
      require(r.genuineError && r.cancellation == nil && f.player.proofPending == 0,
        "real broken media fails exactly once")
      let error = item.error! as NSError
      let diagnostic = r.errorDescription ?? ""
      require(diagnostic.contains(error.domain) && diagnostic.contains(String(error.code))
        && diagnostic.contains(error.localizedDescription), "real AVPlayer error cause survives failure")
      if let cause = error.userInfo[NSUnderlyingErrorKey] as? NSError {
        require(diagnostic.contains(cause.domain) && diagnostic.contains(String(cause.code))
          && diagnostic.contains(cause.localizedDescription), "underlying decoder error survives failure")
      }
      require(!diagnostic.contains(broken.path), "failure diagnostic excludes source pathname")
      await f.player.dispose()
    }
    do {
      let events = AudioPlayersStreamHandler(), cachedMusic = CommandLine.arguments[3]
      let player = WrappedMediaPlayer(
        reference: AudioplayersDarwinPlugin(), eventHandler: events, volume: 0, releaseMode: .loop,
        usesNativeMusicLoop: true)
      try! await player.setSourceUrl(url: cachedMusic, isLocal: true, mimeType: "audio/wav")
      let duration = player.getDuration() ?? 0
      require(duration == 12000 && events.prepared == 1, "prepared extensionless music WAV")
      for sample in 1...3 {
        let gap = await loopGap(player, duration: duration)
        print(String(format: "DARWIN_MUSIC_LOOP: seam %d %.1f ms", sample, gap))
        require(abs(gap) <= 20, "music loop clock has no audible-sized gap")
      }
      require(events.completes == 0 && events.errors == 0, "music loops without per-wrap callbacks or errors")
      await player.seek(time: toCMTime(millis: 2400))
      try! await player.setSourceUrl(url: cachedMusic, isLocal: true, mimeType: "audio/wav")
      require(player.getCurrentPosition() == 2400 && !player.isPlaying && events.prepared == 2,
        "acknowledging the cached source preserves the paused position")
      player.resume()
      await until { (player.getCurrentPosition() ?? 0) > 2400 }
      await player.stop()
      require(!player.isPlaying && player.getCurrentPosition() == 0 && player.getDuration() == duration,
        "stop rewinds and retains looping music")
      player.resume()
      let replacementGate = MusicPublicationGate()
      MusicPublicationGate.next = replacementGate
      let replacement = Task { @MainActor in
        try await player.setSourceUrl(url: effect, isLocal: true, mimeType: "audio/wav")
      }
      await until { replacementGate.waiting != nil }
      await player.stop()
      replacementGate.release()
      try! await replacement.value
      require(!player.isPlaying && player.getCurrentPosition() == 0 && events.prepared == 3,
        "stop during preparation prevents the replacement from starting")
      await player.release()
      require(player.getDuration() == nil && player.getCurrentPosition() == nil,
        "release clears looping music")

      let disposalGate = MusicPublicationGate()
      MusicPublicationGate.next = disposalGate
      let pending = Task { @MainActor in
        try await player.setSourceUrl(url: cachedMusic, isLocal: true, mimeType: "audio/wav")
      }
      await until { disposalGate.waiting != nil }
      await player.dispose()
      disposalGate.release()
      do {
        try await pending.value
        require(false, "disposed music preparation must cancel")
      } catch let error as AudioPlayerPreparationCancelled {
        require(error.reason == "disposed", "disposed music preparation reports cancellation")
      } catch {
        require(false, "unexpected music preparation error")
      }
      player.resume()
      require(!player.isPlaying && player.getDuration() == nil && events.prepared == 3,
        "disposal cannot publish or revive looping music")
    }
    print("DARWIN_PREPARATION_PASSED: 8 preparation + 7 completion races + 1 real decoder diagnostic + native music loop lifecycle")
  }
}
