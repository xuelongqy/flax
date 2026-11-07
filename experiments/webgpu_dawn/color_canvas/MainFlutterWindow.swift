import Cocoa
import FlutterMacOS
import IOSurface
import ScreenCaptureKit

private struct ProbeFailure: LocalizedError {
  let message: String
  var errorDescription: String? { message }
}

private struct SamplePoint {
  let name: String
  let logical: CGPoint
}

class MainFlutterWindow: NSWindow {
  private var channel: FlutterMethodChannel?

  override func awakeFromNib() {
    let controller = FlutterViewController()
    contentViewController = controller
    setFrame(NSRect(x: 100, y: 100, width: 760, height: 560), display: true)
    title = "Flax WebGPU Color Canvas"
    RegisterGeneratedPlugins(registry: controller)
    channel = FlutterMethodChannel(
      name: "flax.webgpu.color_canvas", binaryMessenger: controller.engine.binaryMessenger)
    channel?.setMethodCallHandler { [weak self, weak controller] call, result in
      guard call.method == "sample" else { result(FlutterMethodNotImplemented); return }
      guard let self, let controller else {
        result(FlutterError(code: "window", message: "Flutter window is closed", details: nil))
        return
      }
      do {
        let (points, width, height, scale) = try sampleArguments(call.arguments)
        let view = controller.view
        var report = try sampleSurface(view, points: points, width: width, height: height, scale: scale)
        report["screen"] = screenInfo(self.screen)
        Task { @MainActor in
          report["capture"] = await self.capture(view, points: points)
          result(report)
        }
      } catch {
        result(FlutterError(code: "sample", message: error.localizedDescription, details: nil))
      }
    }
    super.awakeFromNib()
  }

  private func capture(_ view: NSView, points: [SamplePoint]) async -> [String: Any] {
    guard CGPreflightScreenCaptureAccess() else { return ["status": "permission-unavailable"] }
    do {
      let content = try await SCShareableContent.excludingDesktopWindows(false, onScreenWindowsOnly: true)
      guard let windowID = CGWindowID(exactly: windowNumber),
            let window = content.windows.first(where: { $0.windowID == windowID }) else {
        throw ProbeFailure(message: "The probe window is absent from ScreenCaptureKit")
      }
      let filter = SCContentFilter(desktopIndependentWindow: window)
      let config = SCStreamConfiguration(preset: .captureHDRScreenshotLocalDisplay)
      let captureSize = filter.contentRect.size
      guard abs(frame.width - captureSize.width) <= 1, abs(frame.height - captureSize.height) <= 1 else {
        throw ProbeFailure(message: "Capture size \(captureSize) differs from the window frame \(frame.size)")
      }
      config.ignoreShadowsSingleWindow = true
      config.width = Int((captureSize.width * CGFloat(filter.pointPixelScale)).rounded())
      config.height = Int((captureSize.height * CGFloat(filter.pointPixelScale)).rounded())
      let image = try await SCScreenshotManager.captureImage(contentFilter: filter, configuration: config)
      guard image.bitsPerPixel == 64, image.bitsPerComponent == 16,
            image.bitmapInfo.contains(.floatComponents),
            let data = image.dataProvider?.data,
            CFDataGetLength(data) >= image.height * image.bytesPerRow,
            let raw = CFDataGetBytePtr(data) else {
        throw ProbeFailure(message: "ScreenCaptureKit did not return readable FP16 pixels")
      }
      let colorSpace = CGColorSpace(name: CGColorSpace.extendedLinearSRGB)!
      let samples = try points.map { point in
        let viewY = view.isFlipped ? view.bounds.minY + point.logical.y : view.bounds.maxY - point.logical.y
        let local = CGPoint(x: view.bounds.minX + point.logical.x, y: viewY)
        let windowPoint = view.convert(local, to: nil)
        let screenPoint = convertPoint(toScreen: windowPoint)
        let x = Int((screenPoint.x - frame.minX) * CGFloat(image.width) / captureSize.width)
        let y = Int((frame.maxY - screenPoint.y) * CGFloat(image.height) / captureSize.height)
        guard x >= 0, y >= 0, x < image.width, y < image.height,
              let patch = image.cropping(to: CGRect(x: x, y: y, width: 1, height: 1)) else {
          throw ProbeFailure(message: "Capture does not cover \(point.name) at \(x),\(y)")
        }
        var words = [UInt16](repeating: 0, count: 4)
        let values = try words.withUnsafeMutableBytes { bytes in
          let bitmapInfo = CGBitmapInfo.floatComponents.rawValue | CGBitmapInfo.byteOrder16Little.rawValue
            | CGImageAlphaInfo.premultipliedLast.rawValue
          guard let context = CGContext(data: bytes.baseAddress, width: 1, height: 1,
                                        bitsPerComponent: 16, bytesPerRow: 8, space: colorSpace,
                                        bitmapInfo: bitmapInfo) else {
            throw ProbeFailure(message: "CoreGraphics could not create a linear FP16 pixel")
          }
          context.setBlendMode(.copy)
          context.draw(patch, in: CGRect(x: 0, y: 0, width: 1, height: 1))
          return decode(bytes.baseAddress!, format: .rgbaHalf)
        }
        var measured = sample(point, x: x, y: y, values: values)
        let source = UnsafeRawPointer(raw.advanced(by: y * image.bytesPerRow + x * 8))
        measured["sourceWordsLE"] = halfWords(source).map(Int.init)
        return measured
      }
      return [
        "status": "sampled", "range": "hdrLocalDisplay", "windowID": window.windowID,
        "size": [image.width, image.height], "bitsPerComponent": image.bitsPerComponent,
        "sourceBitmapInfo": image.bitmapInfo.rawValue,
        "sourceColorSpace": image.colorSpace?.name as String? as Any? ?? NSNull(),
        "sampleColorSpace": "kCGColorSpaceExtendedLinearSRGB", "samples": samples,
      ]
    } catch {
      return ["status": "error", "error": error.localizedDescription]
    }
  }
}

private func sampleArguments(_ input: Any?) throws -> ([SamplePoint], Int, Int, CGFloat) {
  guard let args = input as? [String: Any], let entries = args["points"] as? [[String: Any]],
        let width = args["logicalWidth"] as? Double, let height = args["logicalHeight"] as? Double,
        let scale = args["scale"] as? Double,
        width.isFinite, height.isFinite, scale.isFinite, width > 0, height > 0, scale > 0 else {
    throw ProbeFailure(message: "Invalid Flutter viewport")
  }
  let points = try entries.map { entry in
    guard let name = entry["name"] as? String, let x = entry["x"] as? Double,
          let y = entry["y"] as? Double, x >= 0, x < width, y >= 0, y < height else {
      throw ProbeFailure(message: "A sample is outside the Flutter viewport")
    }
    return SamplePoint(name: name, logical: CGPoint(x: x, y: y))
  }
  return (points, Int((width * scale).rounded()), Int((height * scale).rounded()), scale)
}

private func sampleSurface(_ view: NSView, points: [SamplePoint], width: Int,
                           height: Int, scale: CGFloat) throws -> [String: Any] {
  var candidates: [(CALayer, IOSurfaceRef)] = []
  func find(_ layer: CALayer) {
    if let contents = layer.contents as AnyObject?, CFGetTypeID(contents) == IOSurfaceGetTypeID() {
      let surface = unsafeBitCast(contents, to: IOSurfaceRef.self)
      if IOSurfaceGetWidth(surface) == width, IOSurfaceGetHeight(surface) == height {
        candidates.append((layer, surface))
      }
    }
    for child in layer.sublayers ?? [] { find(child) }
  }
  if let layer = view.layer { find(layer) }
  guard candidates.count == 1, let (layer, surface) = candidates.first else {
    throw ProbeFailure(message: "Found \(candidates.count) Flutter IOSurfaces sized \(width)×\(height)")
  }
  let formatCode = IOSurfaceGetPixelFormat(surface)
  guard let format = PixelFormat(rawValue: formatCode) else {
    throw ProbeFailure(message: "Unknown IOSurface pixel format \(formatCode)")
  }
  let rowBytes = IOSurfaceGetBytesPerRow(surface)
  let pixelBytes = IOSurfaceGetBytesPerElement(surface)
  guard pixelBytes == (format == .bgra8 ? 4 : 8), rowBytes >= width * pixelBytes else {
    throw ProbeFailure(message: "Unexpected IOSurface pixel stride \(rowBytes)/\(pixelBytes)")
  }
  var seed: UInt32 = 0
  let status = IOSurfaceLock(surface, .readOnly, &seed)
  guard status == 0 else { throw ProbeFailure(message: "IOSurfaceLock failed with \(status)") }
  defer { IOSurfaceUnlock(surface, .readOnly, nil) }
  let base = IOSurfaceGetBaseAddress(surface)
  let samples = try points.map { point in
    let x = Int(point.logical.x * scale)
    let y = Int(point.logical.y * scale)
    guard x < width, y < height else { throw ProbeFailure(message: "Pixel outside IOSurface") }
    let pixel = base.advanced(by: y * rowBytes + x * pixelBytes)
    return sample(point, x: x, y: y, values: decode(pixel, format: format))
  }
  let colorSpaceTag = IOSurfaceCopyValue(surface, kIOSurfaceColorSpace)
  let colorSpace = (colorSpaceTag as? String) ?? colorSpaceTag.flatMap {
    CGColorSpace(propertyListPlist: $0)?.name as String?
  }
  return [
    "size": [width, height], "bytesPerRow": rowBytes, "bytesPerElement": pixelBytes,
    "format": format.fourCC, "formatCode": formatCode, "scale": scale,
    "surfaceID": IOSurfaceGetID(surface), "seed": seed,
    "surfaceColorSpace": colorSpace as Any? ?? NSNull(),
    "surfaceContentHeadroom": IOSurfaceCopyValue(surface, kIOSurfaceContentHeadroom) as? NSNumber as Any? ?? NSNull(),
    "preferredDynamicRange": layer.preferredDynamicRange.rawValue,
    "layerContentHeadroom": layer.contentsHeadroom, "layerContentsScale": layer.contentsScale,
    "layerFrame": NSStringFromRect(layer.frame), "samples": samples,
  ]
}

private enum PixelFormat: UInt32 {
  case bgra8 = 0x42475241
  case bgra10XR = 0x77343061
  case rgbaHalf = 0x52476841

  var fourCC: String {
    String(bytes: [24, 16, 8, 0].map { UInt8(truncatingIfNeeded: rawValue >> $0) }, encoding: .ascii)!
  }
}

private func decode(_ pixel: UnsafeRawPointer, format: PixelFormat) -> ([Int], [Double]) {
  switch format {
  case .bgra8:
    let codes = [2, 1, 0, 3].map { Int(pixel.load(fromByteOffset: $0, as: UInt8.self)) }
    return (codes, codes.map { Double($0) / 255 })
  case .bgra10XR:
    let codes = [2, 1, 0, 3].map { Int(pixel.loadUnaligned(fromByteOffset: $0 * 2, as: UInt16.self) >> 6) }
    return (codes, codes.map { Double($0 - 384) / 510 })
  case .rgbaHalf:
    let words = halfWords(pixel)
    return (words.map(Int.init), words.map { Double(Float16(bitPattern: $0)) })
  }
}

private func halfWords(_ pixel: UnsafeRawPointer) -> [UInt16] {
  (0..<4).map { UInt16(littleEndian: pixel.loadUnaligned(fromByteOffset: $0 * 2, as: UInt16.self)) }
}

private func sample(_ point: SamplePoint, x: Int, y: Int, values: ([Int], [Double])) -> [String: Any] {
  ["name": point.name, "logical": [point.logical.x, point.logical.y],
   "pixel": [x, y], "codes": values.0, "rgba": values.1]
}

private func screenInfo(_ screen: NSScreen?) -> [String: Any] {
  guard let screen else { return ["present": false] }
  return [
    "present": true, "name": screen.localizedName, "p3": screen.canRepresent(.p3),
    "scale": screen.backingScaleFactor, "colorSpace": screen.colorSpace?.localizedName as Any? ?? NSNull(),
    "edrCurrent": screen.maximumExtendedDynamicRangeColorComponentValue,
    "edrPotential": screen.maximumPotentialExtendedDynamicRangeColorComponentValue,
    "edrReference": screen.maximumReferenceExtendedDynamicRangeColorComponentValue,
  ]
}
