import 'dart:ffi';
import 'dart:io';

/// Build-time SDK target selection, shared by hooks and verification commands.
final class FlaxNativeTarget {
  FlaxNativeTarget(this.name) {
    if (!names.contains(name)) {
      throw UnsupportedError('No Flax engine SDK for $name');
    }
  }

  static const names = [
    'macos-arm64',
    'macos-x64',
    'linux-x64',
    'linux-arm64',
    'windows-x64',
    'windows-arm64',
    'android-arm32',
    'android-arm64',
    'android-x64',
    'ios-device-arm64',
    'ios-simulator-arm64',
    'ios-simulator-x64',
  ];

  final String name;
  String get os => name.split('-').first;
  String get architecture => name.split('-').last;
  bool get mobile => os == 'ios' || os == 'android';
  bool get apple => os == 'macos' || os == 'ios';
  String? get appleSdk => os == 'ios'
      ? (name.contains('simulator') ? 'iphonesimulator' : 'iphoneos')
      : null;
  String get androidAbi => switch (architecture) {
    'arm32' => 'armeabi-v7a',
    'arm64' => 'arm64-v8a',
    _ => 'x86_64',
  };
  String bridgeName(String engine) => switch (os) {
    'windows' => 'flax_$engine.dll',
    'macos' || 'ios' => 'libflax_$engine.dylib',
    _ => 'libflax_$engine.so',
  };

  static FlaxNativeTarget fromBuild(
    String os,
    String architecture, {
    String? appleSdk,
  }) {
    final arch = architecture == 'arm' ? 'arm32' : architecture;
    if (os == 'ios') {
      if (!const {'iphoneos', 'iphonesimulator'}.contains(appleSdk)) {
        throw ArgumentError('iOS requires the device or simulator SDK');
      }
      return FlaxNativeTarget(
        'ios-${appleSdk == 'iphoneos' ? 'device' : 'simulator'}-$arch',
      );
    }
    return FlaxNativeTarget('$os-$arch');
  }

  static FlaxNativeTarget host() =>
      fromBuild(Platform.operatingSystem, switch (Abi.current()) {
        Abi.macosArm64 || Abi.linuxArm64 || Abi.windowsArm64 => 'arm64',
        Abi.macosX64 || Abi.linuxX64 || Abi.windowsX64 => 'x64',
        final abi => throw UnsupportedError('Unsupported host ABI: $abi'),
      });
}

/// Reject unsupported process ABIs before calling an engine's native asset.
void requireFlaxNativeAbi() {
  if (!const {
    Abi.macosArm64,
    Abi.macosX64,
    Abi.linuxArm64,
    Abi.linuxX64,
    Abi.windowsArm64,
    Abi.windowsX64,
    Abi.androidArm,
    Abi.androidArm64,
    Abi.androidX64,
    Abi.iosArm64,
    Abi.iosX64,
  }.contains(Abi.current())) {
    throw UnsupportedError('Unsupported Flax runtime ABI: ${Abi.current()}');
  }
}
