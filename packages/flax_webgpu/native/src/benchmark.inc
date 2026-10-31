// Compiled only into the benchmark image; no metrics are collected in throughput runs.
#include <algorithm>
#include <chrono>
#include <cmath>
#include <cstdlib>
namespace {
using BenchmarkClock = std::chrono::steady_clock;
struct BenchmarkSample {
  BenchmarkClock::time_point acquired = BenchmarkClock::now(), published, produced, read, consumed;
  double consumerGpuMs = 0;
  bool pendingProducer = false;
};
struct BenchmarkMetrics {
  std::mutex mutex;
  std::vector<std::shared_ptr<BenchmarkSample>> samples;
};
std::weak_ptr<BenchmarkMetrics> latestBenchmark;
double benchmarkMillis(BenchmarkClock::time_point end, BenchmarkClock::time_point start) {
  return std::chrono::duration<double,std::milli>(end-start).count();
}
NSDictionary *benchmarkDistribution(std::vector<double> values) {
  std::sort(values.begin(),values.end());
  auto p=[&](double fraction) { return values.empty()?0:values[std::max<size_t>(1,std::ceil(values.size()*fraction))-1]; };
  return @{@"count":@(values.size()),@"p50Ms":@(p(.5)),@"p95Ms":@(p(.95)),@"p99Ms":@(p(.99))};
}
}
extern "C" const char *flax_webgpu_benchmark_stats() {
  auto metrics=latestBenchmark.lock();
  if(!metrics) return json(@{@"enabled":@NO});
  std::lock_guard lock(metrics->mutex);
  std::vector<double> publish,read,consumer,acquireRead,acquireConsumer,producerRead,consumerGpu;
  size_t pending=0;
  // Match the JS warmup and omit the final explicit snapshot-verification draw.
  for(size_t i=31;i+1<metrics->samples.size();++i) {
    const auto &s=*metrics->samples[i];
    if(s.published!=BenchmarkClock::time_point{}) publish.push_back(benchmarkMillis(s.published,s.acquired));
    if(s.read!=BenchmarkClock::time_point{}) {
      read.push_back(benchmarkMillis(s.read,s.published));
      acquireRead.push_back(benchmarkMillis(s.read,s.acquired));
      pending+=s.pendingProducer;
      if(s.produced!=BenchmarkClock::time_point{}) producerRead.push_back(benchmarkMillis(s.read,s.produced));
    }
    if(s.consumed!=BenchmarkClock::time_point{}) {
      consumer.push_back(benchmarkMillis(s.consumed,s.published));
      acquireConsumer.push_back(benchmarkMillis(s.consumed,s.acquired));
      consumerGpu.push_back(s.consumerGpuMs);
    }
  }
  return json(@{@"enabled":@YES,@"publications":@(metrics->samples.size()),@"readsPendingProducer":@(pending),
    @"textureAcquireToPublish":benchmarkDistribution(publish),@"publishToFlutterTextureRead":benchmarkDistribution(read),
    @"textureAcquireToFlutterTextureRead":benchmarkDistribution(acquireRead),
    @"publishToFlutterGpuCompletion":benchmarkDistribution(consumer),
    @"textureAcquireToFlutterGpuCompletion":benchmarkDistribution(acquireConsumer),
    @"producerCompletionToFlutterTextureRead":benchmarkDistribution(producerRead),
    @"flutterConsumerGpuDuration":benchmarkDistribution(consumerGpu)});
}
