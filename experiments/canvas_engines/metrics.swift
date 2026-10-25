import Flutter
import UIKit

@main
@objc class AppDelegate: FlutterAppDelegate, FlutterImplicitEngineDelegate {
  func didInitializeImplicitFlutterEngine(_ engineBridge: FlutterImplicitEngineBridge) {
    UIApplication.shared.isIdleTimerDisabled = true
    GeneratedPluginRegistrant.register(with: engineBridge.pluginRegistry)
    let registrar = engineBridge.pluginRegistry.registrar(forPlugin: "CanvasEngineMetrics")!
    FlutterMethodChannel(name: "canvas.engine.metrics", binaryMessenger: registrar.messenger())
      .setMethodCallHandler { call, result in
        guard call.method == "sample" else { result(FlutterMethodNotImplemented); return }
        var info = task_vm_info_data_t()
        var count = mach_msg_type_number_t(MemoryLayout<task_vm_info_data_t>.size / MemoryLayout<integer_t>.size)
        let status = withUnsafeMutablePointer(to: &info) {
          $0.withMemoryRebound(to: integer_t.self, capacity: Int(count)) {
            task_info(mach_task_self_, task_flavor_t(TASK_VM_INFO), $0, &count)
          }
        }
        guard status == KERN_SUCCESS else {
          result(FlutterError(code: "task_info", message: "task_info failed: \(status)", details: nil)); return
        }
        #if targetEnvironment(simulator)
        let simulator = true
        #else
        let simulator = false
        #endif
        result(["simulator": simulator,
                "applicationState": UIApplication.shared.applicationState.rawValue,
                "hasWindow": registrar.viewController?.viewIfLoaded?.window != nil,
                "trace": ProcessInfo.processInfo.environment["CANVAS_BENCH_TRACE"] == "1",
                "engine": ProcessInfo.processInfo.environment["BENCH_ENGINE"] ?? "",
                "footprint": info.phys_footprint,
                "resident": info.resident_size,
                "thermal": ProcessInfo.processInfo.thermalState.rawValue,
                "lowPower": ProcessInfo.processInfo.isLowPowerModeEnabled])
      }
  }
}
