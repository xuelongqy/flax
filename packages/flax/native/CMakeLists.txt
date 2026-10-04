cmake_minimum_required(VERSION 3.24)

project(flax_core_native VERSION 0.0.0 LANGUAGES C CXX)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED ON)
set(CMAKE_C_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

find_package(Threads REQUIRED)
enable_testing()
add_executable(flax_value_id_test tests/value_id_test.cpp)
target_include_directories(flax_value_id_test PRIVATE src)
target_link_libraries(flax_value_id_test PRIVATE Threads::Threads)
add_test(NAME flax_value_id COMMAND flax_value_id_test)
set_tests_properties(flax_value_id PROPERTIES TIMEOUT 30)
