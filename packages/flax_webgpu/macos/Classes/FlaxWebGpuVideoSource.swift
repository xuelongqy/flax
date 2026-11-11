import CoreVideo
import FlutterMacOS
import Foundation

/// Shares the latest ready SDR video buffer with Flutter Texture and Flax WebGPU.
/// Create, publish, read textureId, and dispose on the macOS platform thread.
@objc(FlaxWebGpuVideoSource)
public final class FlaxWebGpuVideoSource: NSObject, FlutterTexture {
  private struct Frame {
    let pixelBuffer: CVPixelBuffer
    let timestamp: Int64
    let duration: Int64
  }

  private static let sourcesLock = NSLock()
  private static let sources = NSMapTable<NSString, FlaxWebGpuVideoSource>.strongToWeakObjects()

  public let sourceId = UUID().uuidString
  public private(set) var textureId: Int64 = 0
  private weak var registry: FlutterTextureRegistry?
  private let frameLock = NSLock()
  private var latestFrame: Frame?

  /// Register using the Flutter plugin registrar's texture registry.
  public init?(registry: FlutterTextureRegistry) {
    precondition(Thread.isMainThread)
    self.registry = registry
    super.init()
    textureId = registry.register(self)
    guard textureId != 0 else { return nil }
    Self.sourcesLock.withLock {
      Self.sources.setObject(self, forKey: sourceId as NSString)
    }
  }

  /// Publish a ready IOSurface-backed pool buffer. Finish writing its pixels
  /// and attachments before publication and let the pool reclaim the buffer
  /// after its consumers release it. Pass nil for an unknown duration.
  public func publish(
    _ pixelBuffer: CVPixelBuffer,
    timestampMicroseconds: Int64,
    durationMicroseconds: Int64? = nil
  ) {
    precondition(Thread.isMainThread)
    guard textureId != 0, let registry else { return }
    frameLock.withLock {
      latestFrame = Frame(
        pixelBuffer: pixelBuffer,
        timestamp: timestampMicroseconds,
        duration: durationMicroseconds ?? -1
      )
    }
    registry.textureFrameAvailable(textureId)
  }

  public func dispose() {
    precondition(Thread.isMainThread)
    let id = textureId
    guard id != 0 else { return }
    textureId = 0
    Self.sourcesLock.withLock {
      Self.sources.removeObject(forKey: sourceId as NSString)
    }
    frameLock.withLock { latestFrame = nil }
    registry?.unregisterTexture(id)
  }

  @objc(videoSourceForRegistry:sourceId:)
  public static func videoSource(for registry: AnyObject, sourceId: String) -> FlaxWebGpuVideoSource? {
    sourcesLock.withLock {
      guard let source = sources.object(forKey: sourceId as NSString),
        source.registry === registry
      else { return nil }
      return source
    }
  }

  public func copyPixelBuffer() -> Unmanaged<CVPixelBuffer>? {
    copyFlaxVideoFrame(timestamp: nil, duration: nil)
  }

  @objc(copyFlaxVideoFrameWithTimestamp:duration:)
  public func copyFlaxVideoFrame(
    timestamp: UnsafeMutablePointer<Int64>?,
    duration: UnsafeMutablePointer<Int64>?
  ) -> Unmanaged<CVPixelBuffer>? {
    frameLock.withLock {
      guard let frame = latestFrame else { return nil }
      timestamp?.pointee = frame.timestamp
      duration?.pointee = frame.duration
      return Unmanaged.passRetained(frame.pixelBuffer)
    }
  }
}
