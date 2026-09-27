cmake_minimum_required(VERSION 3.24)

project(flax_hermes VERSION 0.0.0 LANGUAGES C CXX)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED ON)
set(CMAKE_C_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

if(NOT APPLE OR NOT CMAKE_SYSTEM_PROCESSOR MATCHES "arm64|aarch64")
  message(FATAL_ERROR "The runtime integration currently targets macOS arm64 only.")
endif()
if(NOT EXISTS "${FLAX_CORE_NATIVE}/include/flax/runtime.h")
  message(FATAL_ERROR "FLAX_CORE_NATIVE must point to the flax package native directory.")
endif()
if(NOT EXISTS "${FLAX_ENGINE_SDK}/manifest.json")
  message(FATAL_ERROR "FLAX_ENGINE_SDK must point to a verified Hermes SDK.")
endif()
find_package(FlaxEngineSDK CONFIG REQUIRED PATHS "${FLAX_ENGINE_SDK}/cmake" NO_DEFAULT_PATH)

add_library(flax_hermes SHARED
  hermes_engine.cpp
  "${FLAX_CORE_NATIVE}/src/runtime.cpp")
target_include_directories(flax_hermes PRIVATE
  "${FLAX_CORE_NATIVE}/include"
  "${FLAX_CORE_NATIVE}/src"
  include
  "${FLAX_ENGINE_SDK}/include")
target_compile_definitions(flax_hermes PRIVATE FLAX_ENGINE_ID=1)
target_link_libraries(flax_hermes PRIVATE FlaxEngineSDK::hermes)
target_link_options(flax_hermes PRIVATE "LINKER:-exported_symbol,_flax_hermes_get_api")
set_target_properties(flax_hermes PROPERTIES
  CXX_VISIBILITY_PRESET hidden
  VISIBILITY_INLINES_HIDDEN YES
  LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
  BUILD_WITH_INSTALL_RPATH YES
  INSTALL_RPATH "@loader_path")

if(EXISTS "${FLAX_CORE_NATIVE}/tests/runtime_test.cpp")
  enable_testing()
  add_executable(flax_runtime_test "${FLAX_CORE_NATIVE}/tests/runtime_test.cpp")
  target_include_directories(flax_runtime_test PRIVATE
    "${FLAX_CORE_NATIVE}/include" include)
  target_link_libraries(flax_runtime_test PRIVATE flax_hermes)
  add_test(NAME flax_runtime COMMAND flax_runtime_test)
  set_tests_properties(flax_runtime PROPERTIES TIMEOUT 30
    ENVIRONMENT "DYLD_LIBRARY_PATH=${FLAX_ENGINE_SDK}/lib")
endif()
