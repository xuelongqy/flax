cmake_minimum_required(VERSION 3.24)
project(flax_dawn_probe LANGUAGES CXX OBJCXX)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_OBJCXX_STANDARD 20)
find_package(Threads REQUIRED)
find_package(Dawn CONFIG REQUIRED)
file(READ "${CMAKE_CURRENT_SOURCE_DIR}/../scene.wgsl" SCENE_WGSL)
set_property(DIRECTORY APPEND PROPERTY CMAKE_CONFIGURE_DEPENDS "../scene.wgsl")
file(CONFIGURE OUTPUT "${CMAKE_CURRENT_BINARY_DIR}/scene_wgsl.h"
  CONTENT "static constexpr char kSceneWGSL[] = R\"wgsl(@SCENE_WGSL@)wgsl\";\n" @ONLY)
add_library(flax_dawn_probe SHARED probe.mm)
target_compile_options(flax_dawn_probe PRIVATE -fobjc-arc -Wall -Wextra)
target_include_directories(flax_dawn_probe PRIVATE "${FLUTTER_FRAMEWORK}/Headers" "${CMAKE_CURRENT_BINARY_DIR}")
target_link_libraries(flax_dawn_probe PRIVATE dawn::webgpu_dawn
  "-framework CoreVideo" "-framework Metal" "-framework IOSurface")
# Keep Dawn's Abseil/Tint symbols from coalescing with Flutter's different builds.
target_link_options(flax_dawn_probe PRIVATE
  "-Wl,-exported_symbols_list,${CMAKE_CURRENT_SOURCE_DIR}/exports.txt")
set_target_properties(flax_dawn_probe PROPERTIES
  INSTALL_NAME_DIR "@rpath" BUILD_WITH_INSTALL_NAME_DIR YES)
add_executable(dawn_self_check self_check.cc)
target_link_libraries(dawn_self_check PRIVATE flax_dawn_probe)
