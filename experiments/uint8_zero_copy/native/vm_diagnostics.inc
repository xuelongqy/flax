namespace dart {
extern "C" uint64_t flax_uint8_pin_counter(uint32_t index) {
  std::lock_guard<std::mutex> lock(uint8_pin_mutex);
  switch (index) {
    case 0: return uint8_pins.size();
    case 1: return uint8_pinned_pages.size();
    case 2: return uint8_promotions;
    default: return UINT64_MAX;
  }
}
}  // namespace dart
