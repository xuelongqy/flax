import Cocoa
import FlutterMacOS
import Darwin

class MainFlutterWindow: NSWindow {
  private var channel: FlutterMethodChannel?
  private var library: UnsafeMutableRawPointer?

  override func awakeFromNib() {
    let controller = FlutterViewController()
    contentViewController = controller
    setFrame(NSRect(x: 100, y: 100, width: 1100, height: 760), display: true)
    title = "Flax · Dawn · Metal"
    RegisterGeneratedPlugins(registry: controller)
    let path = Bundle.main.privateFrameworksPath! + "/libflax_dawn_probe.dylib"
    library = dlopen(path, RTLD_NOW | RTLD_LOCAL)
    channel = FlutterMethodChannel(name: "flax_dawn_probe", binaryMessenger: controller.engine.binaryMessenger)
    channel!.setMethodCallHandler { [self] call, result in
      guard let library else {
        result(FlutterError(code: "library", message: String(cString: dlerror()), details: path))
        return
      }
      typealias ErrorText = @convention(c) () -> UnsafePointer<CChar>?
      func failure() {
        let error = unsafeBitCast(dlsym(library, "dawn_probe_error"), to: ErrorText.self)
        result(FlutterError(code: "dawn", message: String(cString: error()!), details: nil))
      }
      if call.method == "create" {
        typealias Create = @convention(c) (UnsafeMutableRawPointer?, UInt32, UInt32) -> UInt64
        typealias TextureId = @convention(c) (UInt64) -> Int64
        let create = unsafeBitCast(dlsym(library, "dawn_probe_create"), to: Create.self)
        let textureId = unsafeBitCast(dlsym(library, "dawn_probe_texture_id"), to: TextureId.self)
        let args = call.arguments as! [String: NSNumber]
        let handle = create(Unmanaged.passUnretained(controller.engine).toOpaque(),
                            args["width"]!.uint32Value, args["height"]!.uint32Value)
        if handle == 0 { failure(); return }
        result(["handle": NSNumber(value: handle), "textureId": NSNumber(value: textureId(handle)), "libraryPath": path])
      } else if call.method == "destroy" {
        typealias Destroy = @convention(c) (UInt64) -> Int32
        let destroy = unsafeBitCast(dlsym(library, "dawn_probe_destroy"), to: Destroy.self)
        if destroy((call.arguments as! NSNumber).uint64Value) != 1 { failure(); return }
        result(nil)
      } else { result(FlutterMethodNotImplemented) }
    }
    super.awakeFromNib()
  }
}
