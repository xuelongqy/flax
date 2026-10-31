Pod::Spec.new do |s|
  s.name = 'flax_secure_storage'
  s.version = '0.0.0'
  s.summary = 'Private Flax host records in Keychain.'
  s.description = s.summary
  s.homepage = 'https://github.com/xuelongqy/flax'
  s.license = { :type => 'Unspecified' }
  s.author = 'Flax contributors'
  s.source = { :path => '.' }
  s.source_files = 'flax_secure_storage/Sources/flax_secure_storage/**/*'
  s.ios.dependency 'Flutter'
  s.osx.dependency 'FlutterMacOS'
  s.ios.deployment_target = '13.0'
  s.osx.deployment_target = '10.15'
  s.swift_version = '5.0'
end
