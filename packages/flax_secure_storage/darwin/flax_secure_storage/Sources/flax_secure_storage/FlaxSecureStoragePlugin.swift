import Foundation
import Security
import LocalAuthentication
#if os(macOS)
import FlutterMacOS
#else
import Flutter
#endif

public final class FlaxSecureStoragePlugin: NSObject, FlutterPlugin {
    private static let worker = DispatchQueue(label: "dev.flax.secure_storage")
    private static var accessGroup: String?
    private struct Failure: Error { let status: OSStatus }

    public static func register(with registrar: FlutterPluginRegistrar) {
        #if os(macOS)
        let messenger = registrar.messenger
        #else
        let messenger = registrar.messenger()
        #endif
        let channel = FlutterMethodChannel(name: "dev.flax.secure_storage", binaryMessenger: messenger)
        registrar.addMethodCallDelegate(FlaxSecureStoragePlugin(), channel: channel)
    }

    public func handle(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
        Self.worker.async {
            do {
                guard let arguments = call.arguments as? [String: String],
                      let namespace = arguments["namespace"],
                      namespace.range(of: "^[a-f0-9]{64}$", options: .regularExpression) != nil
                else { throw Failure(status: errSecParam) }
                guard let host = Bundle.main.bundleIdentifier, !host.isEmpty else { throw Failure(status: errSecParam) }
                let service = "dev.flax.secure_storage.\(host).\(namespace)"
                let authentication = LAContext()
                authentication.interactionNotAllowed = true
                let group: String
                if let cached = Self.accessGroup {
                    group = cached
                } else {
                    guard call.method == "initialize" else { throw Failure(status: errSecNotAvailable) }
                    group = try Self.resolveAccessGroup(host: host, authentication: authentication)
                }
                var query: [String: Any] = [
                    kSecClass as String: kSecClassGenericPassword,
                    kSecAttrService as String: service,
                    kSecAttrAccessGroup as String: group,
                    kSecAttrSynchronizable as String: false,
                    // Legacy macOS keychains can show ACL prompts despite LAContext.
                    kSecUseDataProtectionKeychain as String: true,
                    kSecUseAuthenticationContext as String: authentication,
                ]
                if let key = arguments["key"] {
                    guard key.range(of: "^v1_[a-f0-9]{64}_[a-f0-9]{64}$", options: .regularExpression) != nil
                    else { throw Failure(status: errSecParam) }
                    query[kSecAttrAccount as String] = key
                }
                var value: Any? = nil
                switch call.method {
                case "initialize":
                    // Empty reads can succeed without signing; verify write access too.
                    query[kSecAttrAccount as String] = "__flax_readiness__"
                    var probe = query
                    probe[kSecValueData as String] = Data([0])
                    probe[kSecAttrAccessible as String] = kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly
                    let status = SecItemAdd(probe as CFDictionary, nil)
                    if status != errSecDuplicateItem { try Self.check(status) }
                    // A fixed probe also cleans up an interrupted initialization.
                    try Self.check(SecItemDelete(query as CFDictionary))
                    Self.accessGroup = group
                case "keys":
                    query[kSecReturnAttributes as String] = true
                    query[kSecMatchLimit as String] = kSecMatchLimitAll
                    var items: CFTypeRef?
                    let status = SecItemCopyMatching(query as CFDictionary, &items)
                    if status == errSecItemNotFound { value = [String]() }
                    else {
                        try Self.check(status)
                        guard let records = items as? [[String: Any]] else { throw Failure(status: errSecDecode) }
                        value = records.compactMap { $0[kSecAttrAccount as String] as? String }
                    }
                case "read":
                    guard arguments["key"] != nil else { throw Failure(status: errSecParam) }
                    query[kSecReturnData as String] = true
                    query[kSecMatchLimit as String] = kSecMatchLimitOne
                    var item: CFTypeRef?
                    let status = SecItemCopyMatching(query as CFDictionary, &item)
                    if status != errSecItemNotFound {
                        try Self.check(status)
                        guard let data = item as? Data, let text = String(data: data, encoding: .utf8)
                        else { throw Failure(status: errSecDecode) }
                        value = text
                    }
                case "write":
                    guard arguments["key"] != nil, let text = arguments["value"],
                          let data = text.data(using: .utf8), data.count <= 2 * 1024 * 1024
                    else { throw Failure(status: errSecParam) }
                    let update = [kSecValueData as String: data]
                    let status = SecItemUpdate(query as CFDictionary, update as CFDictionary)
                    if status == errSecItemNotFound {
                        query[kSecValueData as String] = data
                        query[kSecAttrAccessible as String] = kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly
                        try Self.check(SecItemAdd(query as CFDictionary, nil))
                    } else { try Self.check(status) }
                case "delete":
                    guard arguments["key"] != nil else { throw Failure(status: errSecParam) }
                    let status = SecItemDelete(query as CFDictionary)
                    if status != errSecItemNotFound { try Self.check(status) }
                default:
                    DispatchQueue.main.async { result(FlutterMethodNotImplemented) }
                    return
                }
                DispatchQueue.main.async { result(value) }
            } catch {
                let status = (error as? Failure)?.status ?? errSecInternalError
                let reason: String
                switch status {
                case errSecInteractionNotAllowed, errSecAuthFailed: reason = "locked"
                case errSecDecode: reason = "integrityFailure"
                case errSecMissingEntitlement, errSecNotAvailable: reason = "unavailable"
                default: reason = "ioFailure"
                }
                DispatchQueue.main.async {
                    result(FlutterError(code: reason, message: "Secure storage operation failed", details: status))
                }
            }
        }
    }

    private static func resolveAccessGroup(host: String, authentication: LAContext) throws -> String {
        var query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: "dev.flax.secure_storage.\(host).access-group-probe.v1",
            kSecAttrAccount as String: UUID().uuidString,
            kSecAttrSynchronizable as String: false,
            kSecUseDataProtectionKeychain as String: true,
            kSecUseAuthenticationContext as String: authentication,
        ]
        var probe = query
        probe[kSecValueData as String] = Data([0])
        probe[kSecAttrAccessible as String] = kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly
        probe[kSecReturnAttributes as String] = true
        var attributes: CFTypeRef?
        // Only this non-secret Add may use the OS default access group.
        try check(SecItemAdd(probe as CFDictionary, &attributes))
        guard let record = attributes as? [String: Any],
              let group = record[kSecAttrAccessGroup as String] as? String
        else { throw Failure(status: errSecMissingEntitlement) }
        query[kSecAttrAccessGroup as String] = group
        let pattern = "\\A[A-Z0-9]{10}\\.\(NSRegularExpression.escapedPattern(for: host))\\z"
        guard group.range(of: pattern, options: .regularExpression) != nil else {
            let status = SecItemDelete(query as CFDictionary)
            if status != errSecItemNotFound { try check(status) }
            throw Failure(status: errSecMissingEntitlement)
        }
        // A private, dedicated service can also contain an interrupted UUID probe.
        query.removeValue(forKey: kSecAttrAccount as String)
        let status = SecItemDelete(query as CFDictionary)
        if status != errSecItemNotFound { try check(status) }
        return group
    }

    private static func check(_ status: OSStatus) throws {
        if status != errSecSuccess { throw Failure(status: status) }
    }
}
