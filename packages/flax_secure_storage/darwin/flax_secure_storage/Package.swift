// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "flax_secure_storage",
    platforms: [.iOS("13.0"), .macOS("10.15")],
    products: [.library(name: "flax-secure-storage", targets: ["flax_secure_storage"])],
    dependencies: [],
    targets: [.target(name: "flax_secure_storage", dependencies: [])]
)
