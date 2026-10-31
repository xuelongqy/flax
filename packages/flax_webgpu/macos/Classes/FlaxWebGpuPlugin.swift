import FlutterMacOS
import Foundation

public class FlaxWebGpuPlugin: NSObject, FlutterPlugin {
  public static func register(with registrar: FlutterPluginRegistrar) {
    let channel = FlutterMethodChannel(name: "flax_webgpu", binaryMessenger: registrar.messenger)
    let registry = registrar.textures
    channel.setMethodCallHandler { call, result in
      if call.method == "registry" {
        let address = UInt(bitPattern: Unmanaged.passUnretained(registry as AnyObject).toOpaque())
        result(String(address))
      } else {
        result(FlutterMethodNotImplemented)
      }
    }
  }
}
