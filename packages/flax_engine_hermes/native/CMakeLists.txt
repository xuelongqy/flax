cmake_minimum_required(VERSION 3.24)

project(flax_hermes VERSION 0.0.0 LANGUAGES C CXX)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED ON)
set(CMAKE_C_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

if(NOT EXISTS "${FLAX_CORE_NATIVE}/include/flax/runtime.h")
  message(FATAL_ERROR "FLAX_CORE_NATIVE must point to the flax package native directory.")
endif()
if(NOT EXISTS "${FLAX_ENGINE_SDK}/manifest.json")
  message(FATAL_ERROR "FLAX_ENGINE_SDK must point to a verified Hermes SDK.")
endif()
find_package(FlaxEngineSDK CONFIG REQUIRED PATHS "${FLAX_ENGINE_SDK}/cmake" NO_DEFAULT_PATH)
find_package(Threads REQUIRED)

add_library(flax_hermes SHARED
  hermes_engine.cpp
  "${FLAX_CORE_NATIVE}/src/runtime.cpp")
target_include_directories(flax_hermes PRIVATE
  "${FLAX_CORE_NATIVE}/include"
  "${FLAX_CORE_NATIVE}/src"
  include
  "${FLAX_ENGINE_SDK}/include")
target_compile_definitions(flax_hermes PRIVATE FLAX_BUILDING_BRIDGE FLAX_ENGINE_ID=1)
target_link_libraries(flax_hermes PRIVATE FlaxEngineSDK::hermes Threads::Threads)
if(APPLE)
  target_link_options(flax_hermes PRIVATE "LINKER:-exported_symbol,_flax_hermes_get_api")
endif()
set_target_properties(flax_hermes PROPERTIES
  CXX_VISIBILITY_PRESET hidden
  VISIBILITY_INLINES_HIDDEN YES
  LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
  RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
  RUNTIME_OUTPUT_DIRECTORY_RELEASE "${CMAKE_BINARY_DIR}/lib"
  LIBRARY_OUTPUT_DIRECTORY_RELEASE "${CMAKE_BINARY_DIR}/lib"
  BUILD_WITH_INSTALL_RPATH YES
  INSTALL_RPATH "$ORIGIN")
if(APPLE)
  set_target_properties(flax_hermes PROPERTIES INSTALL_RPATH "@loader_path")
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

if(BUILD_TESTING AND EXISTS "${FLAX_CORE_NATIVE}/tests/runtime_test.cpp")
  enable_testing()
  add_executable(flax_runtime_test "${FLAX_CORE_NATIVE}/tests/runtime_test.cpp")
  target_include_directories(flax_runtime_test PRIVATE
    "${FLAX_CORE_NATIVE}/include" include)
  if(WIN32)
    target_compile_definitions(flax_runtime_test PRIVATE FLAX_TEST_DYNAMIC_LIBRARY="flax_hermes.dll")
    target_link_libraries(flax_runtime_test PRIVATE Threads::Threads)
    add_dependencies(flax_runtime_test flax_hermes)
  else()
    target_link_libraries(flax_runtime_test PRIVATE flax_hermes Threads::Threads)
  endif()
  add_test(NAME flax_runtime COMMAND flax_runtime_test)
  set_tests_properties(flax_runtime PROPERTIES TIMEOUT 30
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
  target_compile_definitions(flax_test_contracts PRIVATE
    FLAX_ENGINE_HEADER="flax_hermes.h" FLAX_ENGINE_API=flax_hermes_get_api)
  target_link_libraries(flax_test_contracts PRIVATE flax_hermes Threads::Threads)
  if(MSVC)
    target_compile_options(flax_test_contracts PRIVATE /UNDEBUG)
  else()
    target_compile_options(flax_test_contracts PRIVATE -UNDEBUG)
  endif()
  set_target_properties(flax_test_contracts PROPERTIES
    OUTPUT_NAME "flax_hermes_test_contracts"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    RUNTIME_OUTPUT_DIRECTORY_RELEASE "${CMAKE_BINARY_DIR}/lib"
    LIBRARY_OUTPUT_DIRECTORY_RELEASE "${CMAKE_BINARY_DIR}/lib"
    BUILD_WITH_INSTALL_RPATH YES INSTALL_RPATH "$ORIGIN")
  if(APPLE)
    set_target_properties(flax_test_contracts PROPERTIES
    OUTPUT_NAME "flax_hermes_test_contracts" INSTALL_RPATH "@loader_path")
  endif()
endif()
