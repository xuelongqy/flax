cmake_minimum_required(VERSION 3.24)
project(flax_webgpu LANGUAGES CXX OBJCXX)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_OBJCXX_STANDARD 20)
find_package(Threads REQUIRED)
find_package(Dawn CONFIG REQUIRED)
add_library(flax_webgpu SHARED src/async.mm)
option(FLAX_WEBGPU_BENCHMARK "Build private benchmark instrumentation" OFF)
target_compile_definitions(flax_webgpu PRIVATE FLAX_WEBGPU_BENCHMARK=$<BOOL:${FLAX_WEBGPU_BENCHMARK}>)
target_include_directories(flax_webgpu PUBLIC include PRIVATE generated)
target_link_libraries(flax_webgpu PRIVATE dawn::webgpu_dawn "-framework Foundation"
  "-framework CoreVideo" "-framework IOSurface" "-framework Metal")
target_compile_options(flax_webgpu PRIVATE -Wall -Wextra $<$<COMPILE_LANGUAGE:OBJCXX>:-fobjc-arc>)
target_link_options(flax_webgpu PRIVATE
  "-Wl,-exported_symbols_list,${CMAKE_CURRENT_SOURCE_DIR}/exports.txt")
set_target_properties(flax_webgpu PROPERTIES
  INSTALL_NAME_DIR "@rpath" BUILD_WITH_INSTALL_NAME_DIR YES)
