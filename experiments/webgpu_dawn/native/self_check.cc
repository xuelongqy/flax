#include <iostream>
extern "C" const char *dawn_probe_self_check();
int main() {
  const char *result = dawn_probe_self_check();
  if (!result)
    return 1;
  std::cout << result << std::endl;
}
