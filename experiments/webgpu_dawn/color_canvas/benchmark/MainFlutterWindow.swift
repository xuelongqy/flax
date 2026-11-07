import Cocoa
import FlutterMacOS
import IOSurface

class MainFlutterWindow: NSWindow {
  private var channel: FlutterMethodChannel?
  private var focusLosses = 0

  override func awakeFromNib() {
    let controller = FlutterViewController()
    contentViewController = controller
    setFrame(NSRect(x: 100, y: 100, width: 1100, height: 700), display: true)
    title = "Flax WebGPU Color Benchmark"
    RegisterGeneratedPlugins(registry: controller)
    channel = FlutterMethodChannel(
      name: "flax.webgpu.color_benchmark", binaryMessenger: controller.engine.binaryMessenger)
    channel?.setMethodCallHandler { [weak self, weak controller] call, result in
      guard call.method == "metadata" else { result(FlutterMethodNotImplemented); return }
      guard let self, let controller, let screen = self.screen else {
        result(FlutterError(code: "window", message: "No attached display", details: nil))
        return
      }
      result(self.metadata(view: controller.view, screen: screen))
    }
    super.awakeFromNib()
    DispatchQueue.main.async { [weak self] in
      NSApp.activate()
      self?.makeKeyAndOrderFront(nil)
    }
  }

  override func resignKey() {
    super.resignKey()
    focusLosses += 1
  }

  private func metadata(view: NSView, screen: NSScreen) -> [String: Any] {
    let backing = view.convertToBacking(view.bounds).size
    var formats: [String] = []
    func findSurface(_ layer: CALayer) {
      if let contents = layer.contents as AnyObject?, CFGetTypeID(contents) == IOSurfaceGetTypeID() {
        let surface = unsafeBitCast(contents, to: IOSurfaceRef.self)
        if IOSurfaceGetWidth(surface) == Int(backing.width.rounded()),
           IOSurfaceGetHeight(surface) == Int(backing.height.rounded()) {
          let code = IOSurfaceGetPixelFormat(surface)
          let bytes = [24, 16, 8, 0].map { UInt8(truncatingIfNeeded: code >> $0) }
          formats.append(String(decoding: bytes, as: UTF8.self))
        }
      }
      for child in layer.sublayers ?? [] { findSurface(child) }
    }
    if let layer = view.layer { findSurface(layer) }
    let display = screen.deviceDescription[NSDeviceDescriptionKey("NSScreenNumber")] as? UInt32 ?? 0
    let displayMode = CGDisplayCopyDisplayMode(display)
    return [
      "active": NSApp.isActive, "key": isKeyWindow,
      "visible": isVisible && occlusionState.contains(.visible), "focusLosses": focusLosses,
      "windowFrame": [frame.minX, frame.minY, frame.width, frame.height],
      "viewport": [view.bounds.width, view.bounds.height],
      "backingViewport": [backing.width, backing.height], "backingFormats": formats,
      "displayID": display, "displayName": screen.localizedName,
      "displayModePixels": [displayMode?.pixelWidth ?? 0, displayMode?.pixelHeight ?? 0],
      "displayRefreshHz": displayMode?.refreshRate ?? 0, "maximumFramesPerSecond": screen.maximumFramesPerSecond,
      "displayScale": screen.backingScaleFactor,
      "displayColorSpace": screen.colorSpace?.cgColorSpace?.name as String? as Any? ?? NSNull(),
      "edrCurrent": screen.maximumExtendedDynamicRangeColorComponentValue,
      "edrPotential": screen.maximumPotentialExtendedDynamicRangeColorComponentValue,
    ]
  }
}
