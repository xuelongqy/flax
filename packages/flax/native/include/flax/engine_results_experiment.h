#ifndef FLAX_ENGINE_RESULTS_EXPERIMENT_H
#define FLAX_ENGINE_RESULTS_EXPERIMENT_H

#include "engine_binding.h"

#ifdef __cplusplus
extern "C" {
#endif

/* Private startup experiment; not part of the installed engine contract. */
#define FLAX_ENGINE_RESULTS_EXPERIMENT_VERSION 1
typedef struct FlaxEngineResultsExperimentApi {
  uint32_t version;
  size_t struct_size;
  /* Zero-initialize outputs. Only objects/functions transfer an owned ID.
   * Strings/BigInts transfer info.string_data; free it with buffer_free.
   * On failure neither output owns resources. All entries remain non-leaf. */
  int32_t (*call)(FlaxRuntime*, FlaxValueId function,
                  const FlaxBindingArgument* receiver,
                  const FlaxBindingArgument* arguments, size_t count,
                  FlaxValueId* output, FlaxValueInfo* info, FlaxError*);
  int32_t (*get_property)(FlaxRuntime*, FlaxValueId object,
                          const uint16_t* name, size_t length,
                          FlaxValueId* output, FlaxValueInfo* info, FlaxError*);
} FlaxEngineResultsExperimentApi;

const FlaxEngineResultsExperimentApi* flax_experiment_get_results_api(uint32_t);

#ifdef __cplusplus
}
#endif
#endif
