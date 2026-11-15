enum AudioPlayerError: Error {
  case error(String)
  case warning(String)
}

// Cancellation belongs to the original method call, never a replacement's event stream.
struct AudioPlayerPreparationCancelled: Error {
  let reason: String
  let generation: UInt64
  static let code = "DarwinAudioPreparationCancelled"
}
