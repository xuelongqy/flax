export function distribution(values, latency = false) {
  const sorted = [...values].sort((a, b) => a - b);
  const at = (fraction) =>
    sorted.length ? sorted[Math.ceil(sorted.length * fraction) - 1] : null;
  return {
    count: sorted.length,
    p50Ms: at(0.5),
    p95Ms: at(0.95),
    ...(latency ? {} : { p99Ms: at(0.99), maxMs: sorted.at(-1) ?? null }),
  };
}

export function gaps(starts, periodMs) {
  const values = starts.slice(1).map((value, i) => value - starts[i]);
  return {
    ...distribution(values),
    aboveOneAndHalfPeriods: values.filter((value) => value > periodMs * 1.5).length,
    above50Ms: values.filter((value) => value > 50).length,
  };
}

// Root callbacks remain independent of both the main and Worker render loops.
export function observeRootFrames() {
  const startedAt = performance.now();
  const starts = [0];
  let handle;
  const tick = () => {
    starts.push(performance.now() - startedAt);
    handle = requestAnimationFrame(tick);
  };
  handle = requestAnimationFrame(tick);
  return {
    mark: () => performance.now() - startedAt,
    stop: (windowEndMs, periodMs) => {
      cancelAnimationFrame(handle);
      const observedMs = performance.now() - startedAt;
      if (observedMs > starts.at(-1)) starts.push(observedMs);
      // Include the gap crossing the boundary in the tail, where a deferred stall belongs.
      const boundary = starts.findIndex((value) => value > windowEndMs);
      const split = boundary < 0 ? starts.length : boundary;
      return {
        windowEndMs,
        observedMs,
        startsMs: starts,
        combined: gaps(starts, periodMs),
        window: gaps(starts.slice(0, split), periodMs),
        tail: gaps(starts.slice(Math.max(0, split - 1)), periodMs),
      };
    },
  };
}
