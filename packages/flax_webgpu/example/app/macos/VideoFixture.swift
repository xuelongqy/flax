import AVFoundation
import FlutterMacOS
import flax_webgpu

// Decode the test asset on a serial queue. Only ready frames cross to the
// platform thread, where the same producer serves Flutter and Flax.
final class WebGpuVideoFixture {
  private let registry: FlutterTextureRegistry
  private var source: FlaxWebGpuVideoSource?
  private let decodeQueue = DispatchQueue(label: "flax.webgpu.video-fixture", qos: .userInitiated)
  private var reader: AVAssetReader?
  private var output: AVAssetReaderTrackOutput?
  private var timer: DispatchSourceTimer?
  private var published = 0

  static func register(with registrar: FlutterPluginRegistrar) {
    let fixture = WebGpuVideoFixture(registry: registrar.textures)
    let channel = FlutterMethodChannel(
      name: "flax_webgpu_video_fixture", binaryMessenger: registrar.messenger)
    channel.setMethodCallHandler(fixture.handle)
  }

  private init(registry: FlutterTextureRegistry) {
    self.registry = registry
  }

  private func handle(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
    switch call.method {
    case "source":
      // Dart asks after the engine has started. Plugin registration is earlier.
      if source == nil { source = FlaxWebGpuVideoSource(registry: registry) }
      guard let source else {
        result(FlutterError(code: "fixture", message: "Could not register Flutter texture", details: nil))
        return
      }
      result(["sourceId": source.sourceId, "textureId": source.textureId])
    case "load":
      guard
        let mode = call.arguments as? String,
        let format = [
          "nv12": kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange,
          "nv12-full": kCVPixelFormatType_420YpCbCr8BiPlanarFullRange,
          "bgra": kCVPixelFormatType_32BGRA,
        ][mode],
        let path = ProcessInfo.processInfo.environment["FLAX_WEBGPU_VIDEO_FILE"]
      else {
        result(FlutterError(code: "fixture", message: "Video fixture or format unavailable", details: nil))
        return
      }
      let asset = AVURLAsset(url: URL(fileURLWithPath: path))
      asset.loadTracks(withMediaType: .video) { tracks, error in
        self.decodeQueue.async {
          do {
            guard let track = tracks?.first, tracks?.count == 1 else {
              throw error ?? FixtureError("Expected one video track")
            }
            self.stop()
            self.reader?.cancelReading()
            let reader = try AVAssetReader(asset: asset)
            let output = AVAssetReaderTrackOutput(track: track, outputSettings: [
              kCVPixelBufferPixelFormatTypeKey as String: format,
              kCVPixelBufferIOSurfacePropertiesKey as String: [:],
            ])
            output.alwaysCopiesSampleData = false
            guard reader.canAdd(output) else { throw FixtureError("Cannot add video output") }
            reader.add(output)
            guard reader.startReading() else {
              throw reader.error ?? FixtureError("Cannot start video reader")
            }
            self.reader = reader
            self.output = output
            self.published = 0
            try self.publishNext(result)
          } catch {
            self.replyError(error, result)
          }
        }
      }
    case "next":
      decodeQueue.async {
        do { try self.publishNext(result) }
        catch { self.replyError(error, result) }
      }
    case "play":
      decodeQueue.async { [self] in
        self.stop()
        self.published = 0
        let timer = DispatchSource.makeTimerSource(queue: self.decodeQueue)
        timer.schedule(deadline: .now(), repeating: .nanoseconds(16_666_667), leeway: .microseconds(250))
        timer.setEventHandler { [weak self] in
          guard let self else { return }
          do { try self.publishNext() }
          catch { self.stop() }
        }
        self.timer = timer
        timer.resume()
        DispatchQueue.main.async { result(nil) }
      }
    case "stop":
      decodeQueue.async {
        self.stop()
        let published = self.published
        DispatchQueue.main.async { result(published) }
      }
    case "dispose":
      decodeQueue.async {
        self.stop()
        self.reader?.cancelReading()
        self.reader = nil
        self.output = nil
        DispatchQueue.main.async {
          self.source?.dispose()
          self.source = nil
          result(nil)
        }
      }
    default:
      result(FlutterMethodNotImplemented)
    }
  }

  private func stop() {
    timer?.cancel()
    timer = nil
  }

  private func publishNext(_ result: FlutterResult? = nil) throws {
    guard let sample = output?.copyNextSampleBuffer(), let buffer = sample.imageBuffer else {
      throw reader?.error ?? FixtureError("No decoded video frame")
    }
    let timestamp = CMTimeConvertScale(sample.presentationTimeStamp, timescale: 1_000_000, method: .roundHalfAwayFromZero).value
    let duration = sample.duration.isNumeric
      ? CMTimeConvertScale(sample.duration, timescale: 1_000_000, method: .roundHalfAwayFromZero).value
      : nil
    published += 1
    DispatchQueue.main.async {
      self.source?.publish(buffer, timestampMicroseconds: timestamp, durationMicroseconds: duration)
      result?(timestamp)
    }
  }

  private func replyError(_ error: Error, _ result: @escaping FlutterResult) {
    DispatchQueue.main.async {
      result(FlutterError(code: "fixture", message: error.localizedDescription, details: nil))
    }
  }

  private struct FixtureError: LocalizedError {
    let errorDescription: String?
    init(_ message: String) { errorDescription = message }
  }
}
