const params = /* wgsl */ `
struct Params { time: f32, width: f32, height: f32, palette: f32,
  pointer: vec4f, scene: vec4f, eye: vec4f }
@group(0) @binding(0) var<uniform> p: Params;
`;
const palette = /* wgsl */ `
@group(0) @binding(2) var colors: texture_2d<f32>;
@group(0) @binding(3) var colorSampler: sampler;
fn color(t: f32) -> vec3f {
  return textureSampleLevel(colors, colorSampler, vec2f(fract(t + p.palette / 3.), .5), 0.).rgb;
}
`;
export const particlesCompute =
  params +
  /* wgsl */ `
struct Particle { position: vec4f, shade: vec4f }
@group(0) @binding(1) var<storage, read_write> particles: array<Particle>;
fn hash(n: f32) -> f32 { return fract(sin(n * 127.1 + 31.7) * 43758.5453); }
@compute @workgroup_size(128) fn update(@builtin(global_invocation_id) id: vec3u) {
  let i = id.x;
  if (i >= u32(p.scene.x)) { return; }
  let n = f32(i);
  let seed = hash(n);
  let radius = sqrt(seed) * .84;
  let angle = n * 2.399963 + p.time * (.12 + seed * .16);
  let wave = sin(angle * 3. + p.time * .65 + seed * 7.);
  var xy = vec2f(cos(angle), sin(angle)) * radius;
  xy += vec2f(wave * .13, cos(angle * 2. - p.time * .4) * .09);
  let toPointer = p.pointer.xy - xy;
  xy += toPointer * (.08 / (.12 + dot(toPointer, toPointer)));
  xy.x *= p.height / p.width;
  particles[i].position = vec4f(xy, seed * .5, 1.2 + hash(n + 19.) * 2.2);
  particles[i].shade = vec4f(seed, .18 + .17 * wave, 0., 0.);
}
`;
export const particlesRender =
  params +
  palette +
  /* wgsl */ `
struct Particle { position: vec4f, shade: vec4f }
@group(0) @binding(1) var<storage, read> particles: array<Particle>;
struct Vertex { @builtin(position) position: vec4f, @location(0) uv: vec2f, @location(1) tint: vec3f }
@vertex fn vertex(@builtin(vertex_index) v: u32, @builtin(instance_index) i: u32) -> Vertex {
  let corners = array<vec2f, 6>(vec2f(-1,-1),vec2f(1,-1),vec2f(-1,1),vec2f(-1,1),vec2f(1,-1),vec2f(1,1));
  let particle = particles[i];
  let corner = corners[v];
  var out: Vertex;
  out.position = vec4f(particle.position.xy + corner * vec2f(2. / p.width, 2. / p.height) * particle.position.w, particle.position.z, 1.);
  out.uv = corner;
  out.tint = color(particle.shade.x * .34 + particle.shade.y + p.time * .015);
  return out;
}
@fragment fn fragment(v: Vertex) -> @location(0) vec4f {
  let alpha = exp(-dot(v.uv, v.uv) * 3.8) * .42;
  return vec4f(v.tint * 1.5, alpha);
}
`;
export const cubes =
  params +
  palette +
  /* wgsl */ `
struct Input { @location(0) position: vec3f, @location(1) normal: vec3f }
struct Vertex { @builtin(position) position: vec4f, @location(0) normal: vec3f, @location(1) hue: f32 }
fn rotate(v: vec3f, a: f32, b: f32) -> vec3f {
  let y = vec3f(v.x * cos(a) + v.z * sin(a), v.y, -v.x * sin(a) + v.z * cos(a));
  return vec3f(y.x, y.y * cos(b) - y.z * sin(b), y.y * sin(b) + y.z * cos(b));
}
@vertex fn vertex(v: Input, @builtin(instance_index) i: u32) -> Vertex {
  let grid = u32(p.scene.y);
  let cell = vec2f(f32(i % grid), f32(i / grid)) / f32(grid - 1u) - .5;
  let angle = p.time * .35 + f32(i) * .031;
  let local = rotate(v.position, angle, angle * .7) * (3.3 / f32(grid));
  let center = vec3f(cell * 4., sin(p.time + cell.x * 4. + cell.y * 3.) * .22);
  let world = rotate(local + center, p.pointer.x * .48 + sin(p.time * .12) * .18, -.36 + p.pointer.y * .35);
  let z = world.z + 5.4;
  let focal = 1.9 * p.eye.x;
  var out: Vertex;
  out.position = vec4f(world.x * focal * p.height / p.width, world.y * focal, z * 50. / 49.9 - 5. / 49.9, z);
  out.normal = rotate(rotate(v.normal, angle, angle * .7), p.pointer.x * .48 + sin(p.time * .12) * .18, -.36 + p.pointer.y * .35);
  out.hue = cell.x * .2 + cell.y * .18 + .27;
  return out;
}
@fragment fn fragment(v: Vertex) -> @location(0) vec4f {
  let light = .22 + .78 * max(dot(normalize(v.normal), normalize(vec3f(.4,.8,-.7))), 0.);
  return vec4f(color(v.hue) * light, 1.);
}
`;
export const prism =
  params +
  palette +
  /* wgsl */ `
@vertex fn vertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
  let xy = array<vec2f, 3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3));
  return vec4f(xy[i], 0., 1.);
}
fn field(point: vec3f) -> f32 {
  var q = point;
  let a = p.time * .18;
  q = vec3f(q.x * cos(a) - q.z * sin(a), q.y, q.x * sin(a) + q.z * cos(a));
  for (var j = 0; j < 4; j++) {
    q = abs(q) - vec3f(.48, .33, .42);
    q = vec3f(q.x * .8 - q.y * .6, q.x * .6 + q.y * .8, q.z);
  }
  return (length(q) - .19) * .58;
}
@fragment fn fragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {
  let uv = (pixel.xy * 2. - vec2f(p.width, p.height)) / p.height;
  let origin = vec3f(p.pointer.x * .38, p.pointer.y * .3, -3.2);
  let ray = normalize(vec3f(uv / p.eye.x, 1.8));
  var distance = 0.;
  var glow = 0.;
  for (var i = 0u; i < u32(p.scene.z); i++) {
    let d = max(abs(field(origin + ray * distance)), .004);
    glow += .0035 / (.04 + d);
    distance += d * .65;
    if (distance > 7.) { break; }
  }
  let fog = exp(-distance * .17);
  let light = color(glow * .05 + distance * .07) * glow * fog * .15;
  let background = vec3f(.012, .018, .04) + color(uv.y * .06 + .3) * .018;
  return vec4f(1. - exp(-(background + light)), 1.);
}
`;
