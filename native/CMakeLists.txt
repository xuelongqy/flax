cmake_minimum_required(VERSION 3.24)

project(flax VERSION 0.0.0 LANGUAGES C CXX)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED ON)
set(CMAKE_C_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Runtime sources, public ABI declarations, and engine targets are not implemented.
# This project only validates that a C/C++ toolchain can be configured.
message(STATUS "Flax scaffold: no runtime or engine build targets are defined.")
