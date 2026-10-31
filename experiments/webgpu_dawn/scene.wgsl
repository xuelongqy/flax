
struct Params { time: f32, width: f32, height: f32, padding: f32 }
@group(0) @binding(0) var<uniform> p: Params;
struct Vertex { @builtin(position) position: vec4f, @location(0) uv: vec2f }
@vertex fn vertex(@builtin(vertex_index) i: u32) -> Vertex {
  let xy = array<vec2f, 3>(vec2f(-1,-1), vec2f(3,-1), vec2f(-1,3));
  var v: Vertex; v.position = vec4f(xy[i], 0, 1); v.uv = xy[i]; return v;
}
@fragment fn fragment(v: Vertex) -> @location(0) vec4f {
  var uv = v.uv; uv.x *= p.width / p.height;
  var light = vec3f(0.015, 0.025, 0.065);
  for (var i = 0; i < 24; i++) {
    let f = f32(i);
    let center = vec2f(sin(p.time * 0.45 + f * 1.37), cos(p.time * 0.6 + f * 0.81)) * 0.65;
    let d = length(uv - center);
    light += (0.012 / (0.018 + d * d)) * (0.5 + 0.5 * cos(vec3f(0,2,4) + f * 0.35));
  }
  return vec4f(1.0 - exp(-light * 0.42), 1);
}