import FlutterMacOS
import Foundation
import UserNotifications

public final class FlaxSandboxExamplePlugin: NSObject, FlutterPlugin {
    public static func register(with registrar: FlutterPluginRegistrar) {
        let channel = FlutterMethodChannel(
            name: "dev.flax.example.notifications", binaryMessenger: registrar.messenger)
        registrar.addMethodCallDelegate(FlaxSandboxExamplePlugin(), channel: channel)
    }

    public func handle(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
        let center = UNUserNotificationCenter.current()
        func finish(_ value: Any?) {
            DispatchQueue.main.async { result(value) }
        }
        switch call.method {
        case "query":
            center.getNotificationSettings { settings in
                let status: String
                switch settings.authorizationStatus {
                case .notDetermined: status = "notDetermined"
                case .denied: status = "denied"
                case .authorized: status = "authorized"
                case .provisional: status = "provisional"
                @unknown default: status = "unknown"
                }
                finish(status)
            }
        case "request":
            center.requestAuthorization(options: [.alert, .sound]) { _, error in
                finish(error.map { FlutterError(code: "notificationRequestFailed", message: $0.localizedDescription, details: nil) })
            }
        case "send":
            guard let arguments = call.arguments as? [String: String],
                  let module = arguments["module"], !module.isEmpty else {
                finish(FlutterError(code: "invalidModule", message: "A module identity is required", details: nil))
                return
            }
            center.getNotificationSettings { settings in
                guard settings.authorizationStatus == .authorized else {
                    finish(FlutterError(code: "hostPermissionRequired", message: "macOS notifications are not authorized", details: nil))
                    return
                }
                let content = UNMutableNotificationContent()
                content.title = "Flax module notification"
                content.body = "Submitted by \(module) after host and module authorization."
                content.sound = .default
                content.userInfo = ["flaxExampleModule": module]
                let request = UNNotificationRequest(
                    identifier: "flax.permission.example.\(UUID().uuidString)", content: content, trigger: nil)
                center.add(request) { error in
                    finish(error.map { FlutterError(code: "notificationSendFailed", message: $0.localizedDescription, details: nil) })
                }
            }
        case "clear":
            guard let arguments = call.arguments as? [String: String],
                  let module = arguments["module"], !module.isEmpty else {
                finish(FlutterError(code: "invalidModule", message: "A module identity is required", details: nil))
                return
            }
            center.getPendingNotificationRequests { requests in
                center.removePendingNotificationRequests(withIdentifiers: requests.filter {
                    $0.content.userInfo["flaxExampleModule"] as? String == module
                }.map(\.identifier))
                center.getDeliveredNotifications { notifications in
                    center.removeDeliveredNotifications(withIdentifiers: notifications.filter {
                        $0.request.content.userInfo["flaxExampleModule"] as? String == module
                    }.map { $0.request.identifier })
                    finish(nil)
                }
            }
        default:
            result(FlutterMethodNotImplemented)
        }
    }
}
