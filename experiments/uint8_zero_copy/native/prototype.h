#pragma once
#include <jsi/jsi.h>
extern "C" uint64_t flax_uint8_pin_counter(uint32_t);
namespace flax_uint8 {
void collect(facebook::jsi::Runtime&, bool young, bool compact);
}
