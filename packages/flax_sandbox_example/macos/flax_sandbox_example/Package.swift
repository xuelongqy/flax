// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "flax_sandbox_example",
    platforms: [.macOS("10.15")],
    products: [.library(name: "flax-sandbox-example", targets: ["flax_sandbox_example"])],
    dependencies: [],
    targets: [.target(name: "flax_sandbox_example", dependencies: [])]
)
