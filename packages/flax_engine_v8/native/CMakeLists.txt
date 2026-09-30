cmake_minimum_required(VERSION 3.24)

project(flax_v8 VERSION 0.0.0 LANGUAGES C CXX)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED ON)
set(CMAKE_C_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

if(NOT EXISTS "${FLAX_CORE_NATIVE}/include/flax/runtime.h")
  message(FATAL_ERROR "FLAX_CORE_NATIVE must point to the flax package native directory.")
endif()
if(NOT EXISTS "${FLAX_ENGINE_SDK}/manifest.json")
  message(FATAL_ERROR "FLAX_ENGINE_SDK must point to a verified V8 SDK.")
endif()
find_package(FlaxEngineSDK CONFIG REQUIRED PATHS "${FLAX_ENGINE_SDK}/cmake" NO_DEFAULT_PATH)
find_package(Threads REQUIRED)
set(FLAX_JSI_SOURCE "${CMAKE_CURRENT_SOURCE_DIR}/jsi")
set(FLAX_V8_ADAPTER "${CMAKE_CURRENT_SOURCE_DIR}/v8-jsi")
add_library(flax_v8 SHARED
  v8_engine.cpp
  "${FLAX_CORE_NATIVE}/src/runtime.cpp"
  "${FLAX_JSI_SOURCE}/jsi/jsi.cpp"
  "${FLAX_V8_ADAPTER}/src/jsi_abi/JsiAbiRuntime.cpp"
  "${FLAX_V8_ADAPTER}/src/jsi_abi/jsi_abi_v8.cpp"
  "${FLAX_V8_ADAPTER}/src/v8_core.cpp"
  "${FLAX_V8_ADAPTER}/src/MurmurHash.cpp")
target_include_directories(flax_v8 PRIVATE
  "${FLAX_JSI_SOURCE}"
  "${FLAX_CORE_NATIVE}/include"
  "${FLAX_CORE_NATIVE}/src"
  include
  "${FLAX_V8_ADAPTER}/src"
  "${FLAX_ENGINE_SDK}/include")
target_compile_definitions(flax_v8 PRIVATE
  JSI_VERSION=20 JSI_NOEXCEPT_15=noexcept JSI_CONST_10=const JSI_NO_CONST_3=)
if(MSVC)
  target_compile_options(flax_v8 PRIVATE /GR-)
else()
  target_compile_options(flax_v8 PRIVATE -fno-rtti)
endif()
target_compile_definitions(flax_v8 PRIVATE FLAX_BUILDING_BRIDGE FLAX_ENGINE_ID=2)
target_link_libraries(flax_v8 PRIVATE FlaxEngineSDK::v8 Threads::Threads)
if(APPLE)
  target_link_options(flax_v8 PRIVATE "LINKER:-exported_symbol,_flax_v8_get_api")
endif()
set_target_properties(flax_v8 PROPERTIES
  CXX_VISIBILITY_PRESET hidden
  VISIBILITY_INLINES_HIDDEN YES
  LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
  RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
  RUNTIME_OUTPUT_DIRECTORY_RELEASE "${CMAKE_BINARY_DIR}/lib"
  LIBRARY_OUTPUT_DIRECTORY_RELEASE "${CMAKE_BINARY_DIR}/lib"
  BUILD_WITH_INSTALL_RPATH YES
  INSTALL_RPATH "$ORIGIN")
if(APPLE)
  set_target_properties(flax_v8 PROPERTIES INSTALL_RPATH "@loader_path")
endif()
include(CTest)
# Copy the full runtime closure alongside the bridge, never alter the SDK cache.
file(READ "${FLAX_ENGINE_SDK}/manifest.json" FLAX_SDK_MANIFEST)
string(JSON FLAX_LIBRARY_COUNT LENGTH "${FLAX_SDK_MANIFEST}" libraries)
math(EXPR FLAX_LIBRARY_LAST "${FLAX_LIBRARY_COUNT} - 1")
foreach(index RANGE 0 ${FLAX_LIBRARY_LAST})
  string(JSON library GET "${FLAX_SDK_MANIFEST}" libraries ${index})
  file(COPY "${FLAX_ENGINE_SDK}/${library}" DESTINATION "${CMAKE_BINARY_DIR}/lib")
endforeach()

if(BUILD_TESTING)
add_executable(flax_v8_lifecycle_test lifecycle_test.cpp
  "${FLAX_JSI_SOURCE}/jsi/jsi.cpp"
  "${FLAX_V8_ADAPTER}/src/jsi_abi/JsiAbiRuntime.cpp"
  "${FLAX_V8_ADAPTER}/src/v8_core.cpp"
  "${FLAX_V8_ADAPTER}/src/MurmurHash.cpp")
target_include_directories(flax_v8_lifecycle_test PRIVATE
  "${FLAX_JSI_SOURCE}"
  "${FLAX_V8_ADAPTER}/src"
  "${FLAX_ENGINE_SDK}/include")
target_compile_definitions(flax_v8_lifecycle_test PRIVATE
  JSI_VERSION=20 JSI_NOEXCEPT_15=noexcept JSI_CONST_10=const JSI_NO_CONST_3=)
if(MSVC)
  target_compile_options(flax_v8_lifecycle_test PRIVATE /GR-)
else()
  target_compile_options(flax_v8_lifecycle_test PRIVATE -fno-rtti)
endif()
target_link_libraries(flax_v8_lifecycle_test PRIVATE FlaxEngineSDK::v8 Threads::Threads)

enable_testing()
if(EXISTS "${FLAX_CORE_NATIVE}/tests/runtime_test.cpp")
  add_executable(flax_v8_runtime_test "${FLAX_CORE_NATIVE}/tests/runtime_test.cpp")
  target_include_directories(flax_v8_runtime_test PRIVATE
    "${FLAX_CORE_NATIVE}/include" include)
  target_compile_definitions(flax_v8_runtime_test PRIVATE
    FLAX_ENGINE_HEADER="flax_v8.h" FLAX_ENGINE_API=flax_v8_get_api)
  target_link_libraries(flax_v8_runtime_test PRIVATE flax_v8 Threads::Threads)
  add_test(NAME flax_v8_runtime COMMAND flax_v8_runtime_test)
  set_tests_properties(flax_v8_runtime PROPERTIES TIMEOUT 60
    ENVIRONMENT "DYLD_LIBRARY_PATH=${CMAKE_BINARY_DIR}/lib;LD_LIBRARY_PATH=${CMAKE_BINARY_DIR}/lib")
endif()
add_test(NAME flax_v8_lifecycle COMMAND flax_v8_lifecycle_test)
set_tests_properties(flax_v8_lifecycle PROPERTIES TIMEOUT 60
  ENVIRONMENT "DYLD_LIBRARY_PATH=${CMAKE_BINARY_DIR}/lib;LD_LIBRARY_PATH=${CMAKE_BINARY_DIR}/lib")
endif()
if(BUILD_TESTING)
  set(CMAKE_BUILD_RPATH "${CMAKE_BINARY_DIR}/lib")
  foreach(test_target flax_runtime_test flax_v8_runtime_test flax_v8_lifecycle_test)
    if(TARGET ${test_target})
      set_target_properties(${test_target} PROPERTIES
        BUILD_RPATH "${CMAKE_BINARY_DIR}/lib"
        RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
        RUNTIME_OUTPUT_DIRECTORY_RELEASE "${CMAKE_BINARY_DIR}/lib")
      target_compile_options(${test_target} PRIVATE
        $<$<CXX_COMPILER_ID:MSVC>:/UNDEBUG>
        $<$<NOT:$<CXX_COMPILER_ID:MSVC>>:-UNDEBUG>)
    endif()
  endforeach()
endif()

if(FLAX_TEST_CONTRACTS)
  add_library(flax_test_contracts SHARED "${FLAX_CORE_NATIVE}/tests/runtime_test_entry.cpp")
  target_include_directories(flax_test_contracts PRIVATE "${FLAX_CORE_NATIVE}/include" include)
  target_compile_definitions(flax_test_contracts PRIVATE FLAX_TEST_V8
    FLAX_ENGINE_HEADER="flax_v8.h" FLAX_ENGINE_API=flax_v8_get_api)
  target_link_libraries(flax_test_contracts PRIVATE flax_v8 Threads::Threads)
  if(MSVC)
    target_compile_options(flax_test_contracts PRIVATE /UNDEBUG)
  else()
    target_compile_options(flax_test_contracts PRIVATE -UNDEBUG)
  endif()
  set_target_properties(flax_test_contracts PROPERTIES
    OUTPUT_NAME "flax_v8_test_contracts"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    RUNTIME_OUTPUT_DIRECTORY_RELEASE "${CMAKE_BINARY_DIR}/lib"
    LIBRARY_OUTPUT_DIRECTORY_RELEASE "${CMAKE_BINARY_DIR}/lib"
    BUILD_WITH_INSTALL_RPATH YES INSTALL_RPATH "$ORIGIN")
  if(APPLE)
    set_target_properties(flax_test_contracts PROPERTIES
    OUTPUT_NAME "flax_v8_test_contracts" INSTALL_RPATH "@loader_path")
  endif()
endif()
