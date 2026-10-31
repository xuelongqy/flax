Pod::Spec.new do |s|
  s.name = 'flax_webgpu'
  s.version = '0.0.0'
  s.summary = 'Dawn WebGPU texture registry access for Flax.'
  s.description = s.summary
  s.homepage = 'https://github.com/xuelongqy/flax'
  s.license = { :type => 'Unlicensed' }
  s.author = { 'Flax' => 'https://github.com/xuelongqy' }
  s.source = { :path => '.' }
  s.source_files = 'Classes/**/*'
  s.dependency 'FlutterMacOS'
  s.platform = :osx, '26.0'
  s.swift_version = '5.0'
  s.pod_target_xcconfig = { 'DEFINES_MODULE' => 'YES', 'EXCLUDED_ARCHS[sdk=macosx*]' => 'x86_64' }
end
