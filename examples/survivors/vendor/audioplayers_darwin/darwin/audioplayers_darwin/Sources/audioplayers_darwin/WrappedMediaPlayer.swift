import AVFoundation

private let defaultPlaybackRate: Double = 1.0

private let defaultVolume: Double = 1.0

private let defaultReleaseMode: ReleaseMode = ReleaseMode.release

typealias Completer = () -> Void

typealias CompleterError = (Error?) -> Void

enum ReleaseMode: String {
  case stop
  case release
  case loop
}

@MainActor private final class PlayerPreparation {
  let item: AVPlayerItem
  let generation: UInt64
  let continuation: CheckedContinuation<Void, Error>
  var observation: NSKeyValueObservation?

  init(item: AVPlayerItem, generation: UInt64, continuation: CheckedContinuation<Void, Error>) {
    self.item = item
    self.generation = generation
    self.continuation = continuation
  }
}

// The worker owns this player through preparation, then hands it to the main actor.
private struct PreparedLoopingMusic: @unchecked Sendable {
  let player: AVAudioPlayer

  init(path: URL) throws {
    try Task.checkCancellation()
    let player = try AVAudioPlayer(contentsOf: path, fileTypeHint: AVFileType.wav.rawValue)
    player.enableRate = true
    guard player.prepareToPlay() else {
      throw AudioPlayerError.error("Failed to prepare looping music")
    }
    try Task.checkCancellation()
    self.player = player
  }
}

@MainActor class WrappedMediaPlayer {
  private(set) var eventHandler: AudioPlayersStreamHandler
  private(set) var isPlaying: Bool
  var releaseMode: ReleaseMode {
    didSet { loopingMusic?.numberOfLoops = releaseMode == .loop ? -1 : 0 }
  }

  private let usesNativeMusicLoop: Bool
  private var loopingMusic: AVAudioPlayer?
  private var loopingMusicPreparation: Task<PreparedLoopingMusic, Error>?
  private var reference: AudioplayersDarwinPlugin
  private var player: AVPlayer
  private var playbackRate: Double
  private var volume: Double
  private var url: String?

  private var completionObserver: TimeObserver?
  private var playbackEpoch: UInt64 = 0
  private var preparation: PlayerPreparation?
  private var preparationGeneration: UInt64 = 0
  private var disposed = false

  init(
    reference: AudioplayersDarwinPlugin,
    eventHandler: AudioPlayersStreamHandler,
    player: AVPlayer = AVPlayer.init(),
    playbackRate: Double = defaultPlaybackRate,
    volume: Double = defaultVolume,
    releaseMode: ReleaseMode = defaultReleaseMode,
    url: String? = nil,
    usesNativeMusicLoop: Bool = false
  ) {
    self.usesNativeMusicLoop = usesNativeMusicLoop
    self.reference = reference
    self.eventHandler = eventHandler
    self.player = player
    self.completionObserver = nil
    self.preparation = nil

    self.isPlaying = false
    self.playbackRate = playbackRate
    self.volume = volume
    self.releaseMode = releaseMode
    self.url = url
  }

  func setSourceUrl(
    url: String,
    isLocal: Bool,
    mimeType: String? = nil
  ) async throws {
    guard !disposed else {
      throw AudioPlayerPreparationCancelled(reason: "disposed", generation: preparationGeneration)
    }
    if isLocal && mimeType == "audio/wav" {
      if loopingMusic != nil && self.url == url {
        eventHandler.onPrepared(isPrepared: true)
        return
      }
      if usesNativeMusicLoop && releaseMode == .loop {
        try await setLoopingMusicSource(url)
        return
      }
    }

    let replacingLoopingMusic = loopingMusic != nil
    let playbackStatus = player.currentItem?.status

    if self.url != url || playbackStatus == .failed || playbackStatus == nil {
      reset(reason: "replaced")
      self.url = url
      let playerItem = try createPlayerItem(url: url, isLocal: isLocal, mimeType: mimeType)
      // Need to observe item status immediately after creating:
      let generation = preparationGeneration
      try await setUpPlayerItemStatusObservation(playerItem, generation: generation)
      // A ready callback may have resumed this task immediately before reset/replacement.
      guard !disposed, generation == preparationGeneration, player.currentItem === playerItem else {
        throw AudioPlayerPreparationCancelled(reason: "stale", generation: generation)
      }
      if replacingLoopingMusic && isPlaying {
        resume()
      } else {
        updateDuration()
        setUpSoundCompletedObserver(player, playerItem)
      }
      self.eventHandler.onPrepared(isPrepared: true)
    } else {
      if playbackStatus == .readyToPlay {
        // A same-source readiness acknowledgement does not start new playback.
        self.eventHandler.onPrepared(isPrepared: true)
      }
    }
  }

  private func setLoopingMusicSource(_ url: String) async throws {
    reset(reason: "replaced")
    let generation = preparationGeneration
    let path = URL(fileURLWithPath: url.deletingPrefix("file://"))
    let preparation = Task.detached(priority: .userInitiated) { try PreparedLoopingMusic(path: path) }
    loopingMusicPreparation = preparation
    let result = await preparation.result
    guard !disposed, generation == preparationGeneration else {
      throw AudioPlayerPreparationCancelled(
        reason: disposed ? "disposed" : "stale", generation: generation)
    }
    loopingMusicPreparation = nil
    let music: AVAudioPlayer
    do {
      music = try result.get().player
    } catch {
      isPlaying = false
      throw error
    }
    music.numberOfLoops = releaseMode == .loop ? -1 : 0
    music.volume = Float(volume)
    music.rate = Float(playbackRate)
    loopingMusic = music
    self.url = url
    if isPlaying { resume() } else { updateDuration() }
    eventHandler.onPrepared(isPrepared: true)
  }

  func getDuration() -> Int? {
    if let loopingMusic { return Int(loopingMusic.duration * 1000) }
    guard let duration = getDurationCMTime() else {
      return nil
    }
    return fromCMTime(time: duration)
  }

  func getCurrentPosition() -> Int? {
    if let loopingMusic { return Int(loopingMusic.currentTime * 1000) }
    guard let time = getCurrentCMTime() else {
      return nil
    }
    return fromCMTime(time: time)
  }

  func pause() {
    isPlaying = false
    if let loopingMusic {
      loopingMusic.pause()
    } else {
      player.pause()
    }
  }

  func resume() {
    guard !disposed else { return }
    if let loopingMusic {
      isPlaying = loopingMusic.play()
      if isPlaying {
        updateDuration()
      } else {
        eventHandler.onError(code: "DarwinAudioError", message: "Failed to play looping music", details: nil)
      }
      return
    }
    isPlaying = true
    if let item = player.currentItem { setUpSoundCompletedObserver(player, item) }
    configParameters(player: player)
    if #available(iOS 10.0, macOS 10.12, *) {
      player.playImmediately(atRate: Float(playbackRate))
    } else {
      player.play()
    }
    updateDuration()
  }

  func setVolume(volume: Double) {
    self.volume = volume
    if let loopingMusic {
      loopingMusic.volume = Float(volume)
    } else {
      player.volume = Float(volume)
    }
  }

  func setPlaybackRate(playbackRate: Double) {
    self.playbackRate = playbackRate
    if let loopingMusic {
      loopingMusic.rate = Float(playbackRate)
    } else if isPlaying {
      // Setting the rate causes the player to resume playing. So setting it only, when already playing.
      player.rate = Float(playbackRate)
    }
  }

  func seek(time: CMTime) async {
    if let loopingMusic {
      loopingMusic.currentTime = CMTimeGetSeconds(time)
      eventHandler.onSeekComplete()
      return
    }
    guard let currentItem = player.currentItem else {
      return
    }
    await currentItem.seek(to: time)
    if !self.isPlaying {
      self.player.pause()
    }
    self.eventHandler.onSeekComplete()
  }

  func stop() async {
    pause()
    if releaseMode == ReleaseMode.release {
      await release()
    } else if (getCurrentPosition() ?? 0) != 0 {
      await seek(time: toCMTime(millis: 0))
    }
  }

  func release() async {
    if self.isPlaying {
      pause()
    }
    self.reset(reason: disposed ? "disposed" : "released")
  }

  func dispose() async {
    guard !disposed else { return }
    disposed = true
    await release()
    self.eventHandler.dispose()
  }

  private func getDurationCMTime() -> CMTime? {
    return player.currentItem?.asset.duration
  }

  private func getCurrentCMTime() -> CMTime? {
    return player.currentItem?.currentTime()
  }

  private func createPlayerItem(
    url: String,
    isLocal: Bool,
    mimeType: String? = nil
  ) throws -> AVPlayerItem {
    guard
      let parsedUrl = isLocal
        ? URL(fileURLWithPath: url.deletingPrefix("file://")) : URL(string: url)
    else {
      throw AudioPlayerError.error("Url not valid: \(url)")
    }

    let playerItem: AVPlayerItem

    if let unwrappedMimeType = mimeType {
      if #available(iOS 17, macOS 14.0, *) {
        let asset = AVURLAsset(
          url: parsedUrl, options: [AVURLAssetOverrideMIMETypeKey: unwrappedMimeType])
        playerItem = AVPlayerItem(asset: asset)
      } else {
        let asset = AVURLAsset(
          url: parsedUrl, options: ["AVURLAssetOutOfBandMIMETypeKey": unwrappedMimeType])
        playerItem = AVPlayerItem(asset: asset)
      }
    } else {
      playerItem = AVPlayerItem(url: parsedUrl)
    }

    playerItem.audioTimePitchAlgorithm = AVAudioTimePitchAlgorithm.timeDomain
    return playerItem
  }

  private func finishPreparation(_ record: PlayerPreparation, result: Result<Void, Error>) {
    guard preparation === record else { return }
    // Retire before invalidating: any queued/duplicate KVO callback is now stale.
    preparation = nil
    record.observation?.invalidate()
    record.observation = nil
    record.continuation.resume(with: result)
  }

  private func receiveStatus(_ status: Int, item: ObjectIdentifier, generation: UInt64) {
    guard let record = preparation, !disposed,
      record.generation == generation, ObjectIdentifier(record.item) == item else { return }
    switch status {
    case AVPlayerItem.Status.readyToPlay.rawValue:
      finishPreparation(record, result: .success(()))
    case AVPlayerItem.Status.failed.rawValue:
      var message = "Failed to set playerItem"
      if let error = record.item.error as NSError? {
        message += ": \(error.domain) (\(error.code)): \(error.localizedDescription)"
        if let cause = error.userInfo[NSUnderlyingErrorKey] as? NSError {
          message += "; \(cause.domain) (\(cause.code)): \(cause.localizedDescription)"
        }
      }
      finishPreparation(record, result: .failure(AudioPlayerError.error(message)))
      reset(reason: "failed")
    default:
      break
    }
  }

  private func setUpPlayerItemStatusObservation(
    _ playerItem: AVPlayerItem, generation: UInt64
  ) async throws {
    try await withCheckedThrowingContinuation { (continuation: CheckedContinuation<Void, Error>) in
      let record = PlayerPreparation(item: playerItem, generation: generation, continuation: continuation)
      preparation = record
      record.observation = playerItem.observe(\AVPlayerItem.status, options: [.new]) {
        [weak self] (item, change) in
        // KVO can arrive off the main thread. Only immutable snapshots cross actors.
        let status = (change.newValue ?? item.status).rawValue
        let identity = ObjectIdentifier(item)
        Task { @MainActor [weak self] in
          self?.receiveStatus(status, item: identity, generation: generation)
        }
      }
      self.player.replaceCurrentItem(with: playerItem)
    }
  }

  private func setUpSoundCompletedObserver(_ player: AVPlayer, _ playerItem: AVPlayerItem) {
    invalidateCompletion()
    let epoch = playbackEpoch
    let observer = NotificationCenter.default.addObserver(
      forName: NSNotification.Name.AVPlayerItemDidPlayToEndTime,
      object: playerItem,
      queue: nil
    ) {
      (notification) in
      Task { @MainActor [weak self] in
        guard let self = self else {
          return
        }
        await self.onSoundComplete(item: playerItem, epoch: epoch)
      }
    }
    self.completionObserver = TimeObserver(player: player, observer: observer)
  }

  private func configParameters(player: AVPlayer) {
    if isPlaying {
      player.volume = Float(volume)
      player.rate = Float(playbackRate)
    }
  }

  private func reset(reason: String = "released") {
    preparationGeneration &+= 1
    if let record = preparation {
      finishPreparation(record, result: .failure(
        AudioPlayerPreparationCancelled(reason: reason, generation: record.generation)))
    }
    invalidateCompletion()
    loopingMusicPreparation?.cancel()
    loopingMusicPreparation = nil
    loopingMusic?.stop()
    loopingMusic = nil
    player.replaceCurrentItem(with: nil)
    self.url = nil
  }

  private func updateDuration() {
    if let millis = getDuration(), millis > 0 {
      eventHandler.onDuration(millis: millis)
    }
  }

  private func invalidateCompletion() {
    playbackEpoch &+= 1
    if let observer = completionObserver {
      NotificationCenter.default.removeObserver(observer.observer)
      completionObserver = nil
    }
  }

  private func isCurrentPlayback(_ item: AVPlayerItem, epoch: UInt64) -> Bool {
    !disposed && isPlaying && playbackEpoch == epoch && player.currentItem === item
  }

  private func onSoundComplete(item: AVPlayerItem, epoch: UInt64) async {
    guard isCurrentPlayback(item, epoch: epoch) else { return }
    // Seeking can suspend. Never seek a replacement or apply the old tail to fresh playback.
    await item.seek(to: toCMTime(millis: 0))
    guard isCurrentPlayback(item, epoch: epoch) else { return }
    eventHandler.onSeekComplete()
    // Finish native cleanup before JS can reuse the completed effect's pool slot.
    if releaseMode == .loop {
      resume()
    } else {
      pause()
      if releaseMode == .release { reset(reason: "released") }
    }
    reference.controlAudioSession()
    eventHandler.onComplete()
  }
}
