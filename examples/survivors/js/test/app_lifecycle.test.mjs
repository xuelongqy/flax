import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { build } from 'esbuild';
import { Scene } from '../src/scene.ts';

const mocks = {
  '@flax/core': `export const signal=value=>({value}); export const bind=read=>({read}); export const computed=read=>({get value(){return read();}}); export const batch=fn=>fn();`,
  '@flax/core/bindings': `export const construct=(_kind,type,_ctor,_parameters,_positional,args)=>({type,args});`,
  '@flax/dart/core': `export const Duration=o=>o;`,
  '@flax/core/assets': `export const getAssetBundle=()=>({});`,
  '@flax/flutter/rendering': `export const CustomPainter={implement:(_,p)=>p};`,
  '@flax/dart/ui': `export const Clip={none:'none'}; export const Paint=()=>({}); export const PaintingStyle={stroke:'stroke'}; export const Path=()=>({moveTo(){},lineTo(){},cubicTo(){},close(){}}); export const Size=(width,height)=>({width,height}); export const Color = value => value; export const FontWeight={bold:'bold'}; export const TextAlign={center:'center'};`,
  '@flax/flutter/foundation': `export const TargetPlatform={android:'android',iOS:'ios',macOS:'mac'}; export const getDefaultTargetPlatform=()=>globalThis.__testPlatform ?? TargetPlatform.macOS; export const ValueNotifier=value=>({value,dispose(){}});`,
  '@flax/flutter/services': `export class KeyDownEvent {} export class KeyUpEvent {} export const HapticFeedback={vibrate:()=>globalThis.__testHaptic('vibrate'),lightImpact:()=>globalThis.__testHaptic('light'),mediumImpact:()=>globalThis.__testHaptic('medium'),selectionClick:()=>globalThis.__testHaptic('selection')};`,
  '@flax/flutter/painting': `export const BeveledRectangleBorder=o=>o; export const Alignment={}; export const Border={all:o=>o}; export const BorderRadius={circular:n=>n}; export const BoxDecoration=o=>o; export const BoxShadow=o=>o; export const BoxShape={circle:'circle'}; export const EdgeInsets={all:n=>n,symmetric:o=>o}; export const TextStyle=o=>o;`,
  '@flax/canvas': `export const CanvasView=(canvas,options)=>{globalThis.__canvasWidgets=(globalThis.__canvasWidgets||0)+1; return {type:'CanvasView',canvas,...options};};`,
  '@flax/material-ui': `export const Tooltip=o=>({type:'Tooltip',...o}); export const Icons={favorite:'favorite',rocket_launch:'rocket',cyclone:'cyclone',hub:'hub',flare:'flare',speed:'speed',shield:'shield',electric_bolt:'bolt',keyboard_arrow_up:'up',keyboard_arrow_down:'down',keyboard_arrow_left:'left',keyboard_arrow_right:'right'}; export const CircularProgressIndicator=o=>({type:'CircularProgressIndicator',...o}); export const LinearProgressIndicator=o=>({type:'LinearProgressIndicator',...o}); export const MaterialApp=o=>({type:'MaterialApp',...o}); export const Scaffold=o=>({type:'Scaffold',...o}); export const TextButton=Object.assign(o=>({type:'TextButton',...o}),{styleFrom:o=>o});`,
  '@flax/flutter/widgets': `
    export class StatefulWidget {}
    export class State { constructor(){this.mounted=true;this.updates=0;} setState(fn){fn();this.updates++;} dispose(){} }
    export const FocusNode=()=>({requestFocus(){},addListener(){},removeListener(){},dispose(){}});
    export const HitTestBehavior={opaque:'opaque'}, MainAxisAlignment={center:'center',end:'end'}, WrapAlignment={center:'center'}, MainAxisSize={min:'min'};
    export const MediaQuery={devicePixelRatioOf:()=>1,paddingOf:()=>({left:0,top:0,right:0,bottom:0})};
    export const AppLifecycleListener=()=>({dispose(){}});
    export const AnimatedOpacity=o=>({type:'AnimatedOpacity',...o});
    export const Flow={unwrapped:o=>({type:'Flow',...o})};
    export const FlowDelegate={implement:([options],methods)=>({...options,...methods})};
    export const Matrix4={translationValues:(...values)=>values};
    export const Text=(value,o={})=>({type:'Text',value,...o}); export const Icon=(value,o={})=>({type:'Icon',value,...o});
    export const CustomPaint=o=>({type:'CustomPaint',...o}), RepaintBoundary=o=>({type:'RepaintBoundary',...o}), Semantics=o=>({type:'Semantics',...o}); export const Center=o=>({type:'Center',...o}), Column=o=>({type:'Column',...o}), Container=o=>({type:'Container',...o}), Expanded=o=>({type:'Expanded',...o}), IgnorePointer=o=>({type:'IgnorePointer',...o}), KeyboardListener=o=>({type:'KeyboardListener',...o}), LayoutBuilder=o=>({type:'LayoutBuilder',...o}), Listener=o=>({type:'Listener',...o}), Positioned=Object.assign(o=>({type:'Positioned',...o}),{fill:o=>({type:'Positioned',...o})}), Row=o=>({type:'Row',...o}), SafeArea=o=>({type:'SafeArea',...o}), SingleChildScrollView=o=>({type:'SingleChildScrollView',...o}), SizedBox=(o={})=>({type:'SizedBox',...o}), Stack=o=>({type:'Stack',...o}), Wrap=o=>({type:'Wrap',...o});`,
};
const built = await build({
  entryPoints: [new URL('../src/app.ts', import.meta.url).pathname],
  bundle: true,
  write: false,
  platform: 'node',
  format: 'esm',
  define: { __FLAX_SURVIVORS_ACCEPTANCE__: 'false' },
  plugins: [
    {
      name: 'flax-mocks',
      setup(plugin) {
        plugin.onResolve({ filter: /^@flax\// }, (args) => ({
          path: args.path,
          namespace: 'mock',
        }));
        plugin.onResolve({ filter: /^\.\/audio$/ }, () => ({
          path: 'audio',
          namespace: 'mock',
        }));
        plugin.onResolve({ filter: /^\.\/resources$/ }, () => ({
          path: 'resources',
          namespace: 'mock',
        }));
        plugin.onLoad({ filter: /.*/, namespace: 'mock' }, (args) => ({
          contents:
            args.path === 'audio'
              ? `export class Sounds {}`
              : args.path === 'resources'
                ? `export const loadAtlas=()=>globalThis.__sceneLoad(); export const loadSceneAssets=()=>globalThis.__sceneLoad();`
                : mocks[args.path],
          loader: 'js',
        }));
      },
    },
  ],
});
const { createGame } = await import(
  `data:text/javascript;base64,${Buffer.from(built.outputFiles[0].contents).toString('base64')}`
);
globalThis.requestAnimationFrame = () => 1;
globalThis.cancelAnimationFrame = () => {};
class FakeContext {
  images = [];
  reset() {
    this.images = [];
  }
  scale() {}
  save() {}
  restore() {}
  translate() {}
  rotate() {}
  fillRect() {}
  strokeRect() {}
  beginPath() {}
  arc() {}
  stroke() {}
  fill() {}
  moveTo() {}
  lineTo() {}
  fillText() {}
  measureText() {
    if (globalThis.__failMeasure) throw Error('test text cache failure');
    return {
      width: 48,
      actualBoundingBoxLeft: 0,
      actualBoundingBoxRight: 48,
      actualBoundingBoxAscent: 32,
      actualBoundingBoxDescent: 8,
    };
  }
  drawImage(image) {
    this.images.push(image);
  }
}
let canvasId = 0;
globalThis.OffscreenCanvas = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.ctx = new FakeContext();
    this.id = ++canvasId;
  }
  getContext() {
    return this.ctx;
  }
  transferToImageBitmap() {
    return { width: this.width, height: this.height, from: this.id, close() {} };
  }
};
function state() {
  const widget = createGame().home,
    value = widget.createState();
  value.widget = widget;
  value.profile = {
    quality: 'balanced',
    language: 'en',
    showFps: false,
    music: 0.5,
    effects: 0.5,
    reducedMotion: false,
    haptics: true,
    version: 1,
    bestScore: 0,
    longest: 0,
    wins: 0,
  };
  value.width = 960;
  value.height = 540;
  return value;
}
function battlefield(value) {
  const root = value.build().body.child;
  const layout = root.builder({}, { maxWidth: 960, maxHeight: 540 });
  return layout.child.child.children[1].child.read();
}
const pointer = (id, x, y) => ({ pointer: id, localPosition: { dx: x, dy: y } });

test('dragging repaints the thumb without rebuilding the joystick and ignores other fingers', () => {
  const game = state();
  game.screen.value = 'game';
  game.scene = { canvas: {} };
  const widget = battlefield(game),
    local = widget.createState();
  local.widget = widget;
  const listener = local.build().children[0];
  const parentUpdates = game.updates;
  const canvasWidgets = globalThis.__canvasWidgets;
  listener.onPointerDown(pointer(2, 800, 500));
  for (let i = 0; i < 120; i++) listener.onPointerMove(pointer(2, 810 + i, 500));
  assert.equal(local.updates, 0);
  assert.equal(game.updates, parentUpdates);
  listener.onPointerDown(pointer(1, 40, 450));
  listener.onPointerMove(pointer(1, 90, 450));
  assert.equal(local.updates, 1);
  const pad = local.build().children[1].child.child.child;
  const { delegate } = pad.child.children.at(-1).child;
  const repaint = delegate.repaint.value;
  for (let i = 0; i < 120; i++) listener.onPointerMove(pointer(1, 100 + i, 450));
  game.controls.skill();
  listener.onPointerCancel(pointer(2, 900, 500));
  assert.equal(delegate.repaint.value, repaint);
  listener.onPointerMove(pointer(1, 58, 474));
  assert.equal(delegate.repaint.value, repaint + 1);
  delegate.paintChildren({
    paintChild: (index, { transform }) =>
      assert.deepEqual([index, ...transform], [0, 18, 24, 0]),
  });
  assert.equal(local.updates, 1);
  assert.equal(game.updates, parentUpdates);
  assert.equal(globalThis.__canvasWidgets, canvasWidgets);
  assert.equal(game.controls.consume().pulse, true);
  listener.onPointerCancel(pointer(1, 90, 450));
  assert.equal(local.updates, 2);
  assert.equal(game.controls.held, 0);
});

test('mobile idle pad takes immediate rim input while floating and edge pads share their input center', () => {
  globalThis.__testPlatform = 'android';
  try {
    const game = state();
    game.screen.value = 'game';
    game.scene = { canvas: {} };
    const widget = battlefield(game),
      local = widget.createState();
    local.widget = widget;
    const initialPad = local.build().children[1];
    const semanticPad = initialPad.child;
    const visiblePad = semanticPad.child.child;
    assert.equal(semanticPad.label, 'Movement joystick');
    assert.deepEqual(
      [initialPad.left, initialPad.top, visiblePad.width, visiblePad.height],
      [16, 408, 116, 116],
    );
    assert.equal(
      JSON.stringify(visiblePad).includes('MOVE'),
      false,
      'movement pad has no visible label',
    );
    const thumbFlow = visiblePad.child.children.at(-1).child;
    const center = thumbFlow.children[0];
    assert.equal(center.type, 'Center');
    const thumb = center.child;
    assert.deepEqual([thumb.width, thumb.height], [32, 32]);
    thumbFlow.delegate.paintChildren({
      paintChild: (index, { transform }) =>
        assert.deepEqual([index, ...transform], [0, 0, 0, 0]),
    });
    const listener = local.build().children[0];
    listener.onPointerDown(pointer(1, 98, 466));
    assert.deepEqual(game.controls.joystick, {
      active: true,
      originX: 74,
      originY: 466,
      x: 1,
      y: 0,
    });
    listener.onPointerDown(pointer(2, 40, 466));
    assert.equal(game.controls.joystick.originX, 74);
    assert.equal(local.updates, 1);
    listener.onPointerCancel(pointer(1, 98, 466));
    assert.equal(game.controls.held, 0);
    listener.onPointerDown(pointer(3, 200, 400));
    assert.deepEqual(game.controls.consume(), { x: 0, y: 0, pulse: false });
    assert.deepEqual(
      [game.controls.joystick.originX, game.controls.joystick.originY],
      [200, 400],
    );
    listener.onPointerUp(pointer(3, 200, 400));
    listener.onPointerDown(pointer(4, 1, 1));
    const pad = local.build().children[1];
    assert.deepEqual([pad.left + 58, pad.top + 58], [1, 1]);
    listener.onPointerMove(pointer(4, 25, 1));
    game.controls.skill();
    assert.deepEqual(game.controls.consume(), { x: 1, y: 0, pulse: true });
    listener.onPointerCancel(pointer(4, 25, 1));
    assert.equal(game.updates, 0, 'input stays inside the joystick leaf');
  } finally {
    delete globalThis.__testPlatform;
  }
});

test('restart discards old hit effects while retaining scene assets', () => {
  const game = state();
  const image = () => ({ width: 400, height: 200, close() {} });
  const assets = { actors: image(), floor: image() };
  const scene = new Scene(assets);
  game.scene = scene;
  const hit = scene.hit,
    floor = scene.floor,
    atlas = scene.atlas;
  scene.events(
    [{ type: 'hit', x: 1600, y: 900 }],
    false,
    'balanced',
    game.game.elapsed,
  );
  scene.draw(game.game, 'balanced', 960, 960);
  assert.ok(scene.canvas.ctx.images.includes(hit));
  game.start();
  assert.equal(game.game.tick, 0);
  assert.equal(game.game.events.length, 0);
  assert.equal(scene.canvas.ctx.images.includes(hit), false);
  assert.equal(scene.hit, hit);
  assert.equal(scene.floor, floor);
  assert.equal(scene.atlas, atlas);
  assert.equal(scene.assets.floor, assets.floor);
  scene.dispose();
});

test('system interruption stops audio on results and menus without changing terminal phase', () => {
  const game = state();
  let pauses = 0;
  game.sounds = {
    pause() {
      pauses++;
    },
  };
  game.game.phase = 'lost';
  for (const screen of ['game', 'title', 'settings']) {
    game.screen.value = screen;
    game.controls.key('w', true);
    game.controls.skill();
    game.interrupt();
    assert.equal(game.game.phase, 'lost');
    assert.equal(game.controls.held, 0);
  }
  assert.equal(pauses, 3);
  assert.equal(game.updates, 0);
});

test('active interruption pauses and clears input while upgrade resumes to upgrade', () => {
  const game = state();
  let pauses = 0;
  game.sounds = {
    pause() {
      pauses++;
    },
  };
  game.screen.value = 'game';
  game.controls.key('w', true);
  game.controls.pointerDown(1, 20, 30);
  game.controls.skill();
  game.interrupt();
  assert.equal(game.game.phase, 'paused');
  assert.equal(game.controls.held, 0);
  assert.equal(game.updates, 0);
  game.game.resume();
  game.game.phase = 'upgrade';
  game.controls.key('w', true);
  game.interrupt();
  assert.equal(game.game.phase, 'paused');
  assert.equal(game.controls.held, 0);
  game.resume();
  assert.equal(game.game.phase, 'upgrade');
  assert.equal(game.frame, undefined);
  assert.equal(pauses, 2);
});

function runStep(game, start) {
  game.tick(start);
  game.tick(start + 17);
}

test('guardian reward keeps combat running, plays its cue and preserves historical wins', () => {
  const game = state();
  game.screen.value = 'game';
  game.profile.wins = 4;
  game.game.xpNeeded = 1000;
  game.game.enemies = [
    {
      id: 99,
      kind: 'guardian',
      x: 2400,
      y: 900,
      radius: 46,
      hp: 0,
      maxHp: 1600,
      hit: 0,
      angle: 0,
      warning: 0,
    },
  ];
  const sounds = [];
  game.sounds = {
    play(name) {
      sounds.push(name);
    },
    pause() {
      sounds.push('pause');
    },
  };
  runStep(game, 1000);
  assert.equal(game.game.phase, 'playing');
  assert.equal(game.game.guardiansDefeated, 1);
  assert.deepEqual(sounds, ['win']);
  assert.equal(game.profile.wins, 4);
  game.screen.value = 'title';
  const menu = nodesOf(game.overlay(960, 540));
  assert.equal(
    menu.some((node) => node.type === 'Text' && node.value === 'WINS'),
    false,
  );
});

test('mobile haptics follow accepted pulse, actual player damage and accepted choice', () => {
  globalThis.__testPlatform = 'android';
  const calls = [];
  globalThis.__testHaptic = (kind) => {
    calls.push(kind);
    return Promise.resolve();
  };
  const game = state();
  game.screen.value = 'game';
  game.controls.skill();
  runStep(game, 1000);
  assert.deepEqual(calls, ['medium']);
  game.controls.skill();
  game.tick(1034);
  assert.deepEqual(calls, ['medium']);
  game.game.step = function () {
    this.events = [{ type: 'hit', target: 'enemy', x: 0, y: 0 }];
  };
  game.tick(1051);
  assert.deepEqual(calls, ['medium']);
  game.game.step = function () {
    this.player.hp -= 5;
    this.events = [{ type: 'hit', target: 'player', x: 0, y: 0 }];
  };
  game.tick(1068);
  assert.deepEqual(calls, ['medium', 'light']);
  game.game.phase = 'upgrade';
  game.game.offers = [
    { id: 'repair', title: '', description: '', kind: 'repair', rank: 0 },
  ];
  game.choose('repair');
  game.choose('repair');
  assert.deepEqual(calls, ['medium', 'light', 'selection']);
  for (const [haptics, damage] of [
    [true, true],
    [true, false],
    [false, true],
  ]) {
    const encounter = state();
    encounter.screen.value = 'game';
    encounter.profile.haptics = haptics;
    encounter.game.player.hp = 50;
    encounter.game.player.weapons = { bolt: 0, orbit: 0, chain: 0 };
    encounter.game.xpNeeded = 1000;
    encounter.game.enemies = [
      {
        id: 999,
        kind: 'guardian',
        x: 2400,
        y: 1000,
        radius: 46,
        hp: 0,
        maxHp: 1600,
        hit: 0,
        angle: 0,
        warning: 0,
      },
    ];
    if (damage)
      encounter.game.enemies.push({
        id: 1000,
        kind: 'pursuer',
        x: encounter.game.player.x,
        y: encounter.game.player.y,
        radius: 15,
        hp: 1000,
        maxHp: 1000,
        hit: 0,
        angle: 0,
        warning: 0,
      });
    const before = calls.length;
    runStep(encounter, 2000);
    assert.ok(
      encounter.game.player.hp > 50,
      'guardian repair masks damage in net health',
    );
    assert.equal(encounter.game.guardiansDefeated, 1);
    assert.deepEqual(calls.slice(before), haptics && damage ? ['light'] : []);
  }
  delete globalThis.__testPlatform;
});

test('desktop, opt-out and rejected platform calls never disrupt gameplay', async () => {
  let calls = 0;
  globalThis.__testHaptic = () => {
    calls++;
    return Promise.reject(Error('unavailable'));
  };
  delete globalThis.__testPlatform;
  const desktop = state();
  desktop.screen.value = 'game';
  desktop.controls.skill();
  runStep(desktop, 2000);
  desktop.game.step = function () {
    this.player.hp--;
    this.events = [{ type: 'hit', target: 'player', x: 0, y: 0 }];
  };
  desktop.tick(2034);
  desktop.game.phase = 'upgrade';
  desktop.game.offers = [
    { id: 'repair', title: '', description: '', kind: 'repair', rank: 0 },
  ];
  desktop.choose('repair');
  assert.equal(calls, 0);
  globalThis.__testPlatform = 'ios';
  const disabled = state();
  disabled.profile.haptics = false;
  disabled.screen.value = 'game';
  disabled.controls.skill();
  runStep(disabled, 3000);
  disabled.game.step = function () {
    this.player.hp--;
    this.events = [{ type: 'hit', target: 'player', x: 0, y: 0 }];
  };
  disabled.tick(3034);
  disabled.game.phase = 'upgrade';
  disabled.game.offers = [
    { id: 'repair', title: '', description: '', kind: 'repair', rank: 0 },
  ];
  disabled.choose('repair');
  assert.equal(calls, 0);
  const enabled = state();
  enabled.screen.value = 'game';
  enabled.controls.skill();
  runStep(enabled, 4000);
  await Promise.resolve();
  assert.equal(calls, 1);
  assert.equal(enabled.game.phase, 'playing');
  globalThis.__testHaptic = () => {
    throw Error('unavailable');
  };
  const throwing = state();
  throwing.screen.value = 'game';
  throwing.controls.skill();
  assert.doesNotThrow(() => runStep(throwing, 5000));
  delete globalThis.__testPlatform;
});

function nodesOf(root) {
  const found = [];
  const visit = (node) => {
    if (!node || typeof node !== 'object' || node.read) return;
    if (node.type) found.push(node);
    for (const [key, value] of Object.entries(node)) {
      const child =
        (key === 'child' || key === 'children') && value?.read ? value.read() : value;
      if (Array.isArray(child)) child.forEach(visit);
      else visit(child);
    }
  };
  visit(root);
  return found;
}
function pressSetting(game, label) {
  const row = nodesOf(game.overlay(960, 540)).find(
    (n) => n.type === 'Semantics' && n.label === label,
  );
  assert.ok(row, `setting ${label} exists`);
  nodesOf(row)
    .find((n) => n.type === 'TextButton')
    .onPressed();
}

test('mobile setting saves haptics choice and desktop hides the control', () => {
  const saved = new Map();
  globalThis.localStorage = {
    setItem(key, value) {
      saved.set(key, value);
    },
  };
  globalThis.__testPlatform = 'android';
  const mobile = state();
  mobile.screen.value = 'settings';
  pressSetting(mobile, 'Haptics: on');
  assert.ok(nodesOf(mobile.overlay(960, 540)).some((n) => n.label === 'Haptics: off'));
  const done = nodesOf(mobile.overlay(960, 540)).find(
    (n) =>
      n.type === 'TextButton' &&
      nodesOf(n).some((t) => t.type === 'Text' && t.value === 'Done'),
  );
  done.onPressed();
  assert.equal(JSON.parse(saved.get('profile')).haptics, false);
  delete globalThis.__testPlatform;
  const desktop = state();
  desktop.screen.value = 'settings';
  assert.ok(
    !nodesOf(desktop.overlay(960, 540)).some(
      (n) => n.type === 'Semantics' && n.label.startsWith('Haptics:'),
    ),
  );
  delete globalThis.localStorage;
});

test('combat HUD values publish without rebuilding game or canvas', () => {
  const game = state();
  game.screen.value = 'game';
  game.scene = { canvas: {}, draw() {}, events() {}, clearEffects() {} };
  const joystick = battlefield(game);
  const joystickState = joystick.createState();
  joystickState.widget = joystick;
  joystickState.build();
  const nodes = [];
  const visit = (node) => {
    if (!node || typeof node !== 'object') return;
    if (node.type) nodes.push(node);
    for (const value of Object.values(node)) {
      if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === 'object' && !value.read) visit(value);
    }
  };
  game.hud(540).forEach(visit);
  const bars = nodes.filter((n) => n.type === 'LinearProgressIndicator');
  const circle = nodes.find((n) => n.type === 'CircularProgressIndicator');
  const pulse = nodes.find((n) => n.type === 'Tooltip' && n.message === 'Pulse');
  assert.equal(
    pulse.child.type,
    'TextButton',
    'Pulse remains addressable throughout cooldown',
  );
  const pulseFace = pulse.child.child.child;
  assert.deepEqual([pulseFace.width, pulseFace.height], [88, 88]);
  assert.equal(
    nodes.some((n) => n.type === 'Text' && n.value === 'PULSE'),
    false,
  );
  const texts = nodes.filter((n) => n.type === 'Text' && n.value?.read);
  const pips = nodes.filter(
    (n) => n.type === 'Container' && n.decoration?.read && n.width !== 88,
  );
  const parentUpdates = game.updates,
    canvasWidgets = globalThis.__canvasWidgets;
  game.game.step = function () {
    this.tick++;
    this.elapsed = 61 + (this.tick - 1) / 60;
    this.player.hp = 72;
    this.player.maxHp = 120;
    this.xp = 3;
    this.xpNeeded = 9;
    this.level = 5;
    this.player.pulseCooldown = 2.35;
    this.player.weapons.bolt = 2;
    this.player.weapons.orbit = 3;
    this.player.weapons.chain = 1;
    this.events = [];
  };
  runStep(game, 6000);
  assert.equal(game.updates, parentUpdates);
  assert.equal(globalThis.__canvasWidgets, canvasWidgets);
  assert.ok(joystick);
  assert.equal(joystickState.updates, 0);
  assert.equal(bars.length, 2);
  assert.equal(bars[0].value.read(), 72 / 120);
  assert.equal(bars[1].value.read(), 3 / 9);
  assert.equal(circle.value.read(), 1 - 24 / 80);
  assert.deepEqual(
    texts.map((n) => n.value.read()),
    ['72/120', 'LV 5', '01:01'],
  );
  assert.equal(pips.length, 12);
  assert.equal(pips.filter((n) => n.decoration.read().color === 0xff63f5f4).length, 6);
  assert.deepEqual(
    [
      game.health.value,
      game.maxHealth.value,
      game.xp.value,
      game.xpNeeded.value,
      game.level.value,
      game.seconds.value,
      game.cooldown.value,
      game.bolt.value,
      game.orbit.value,
      game.chain.value,
    ],
    [72, 120, 3, 9, 5, 61, 24, 2, 3, 1],
  );
  for (let i = 1; i <= 120; i++) game.tick(6017 + i * 17);
  assert.equal(game.seconds.value, 63);
  assert.equal(game.updates, parentUpdates);
  assert.equal(globalThis.__canvasWidgets, canvasWidgets);
  assert.equal(joystickState.updates, 0);
  game.game.xp = 30;
  game.publishHud();
  assert.equal(bars[1].value.read(), 1);
  game.start();
  assert.equal(bars[0].value.read(), 1);
  assert.equal(bars[1].value.read(), 0);
  assert.equal(circle.value.read(), 1);
  assert.deepEqual(
    texts.map((n) => n.value.read()),
    ['100/100', 'LV 1', '00:00'],
  );
});

test('upgrade cards receive the current offer copy and selection callback', () => {
  delete globalThis.__testPlatform;
  const game = state();
  game.screen.value = 'game';
  game.game.phase = 'upgrade';
  game.game.offers = [
    {
      id: 'weapon:orbit',
      title: 'Orbit Blades',
      description: 'Close-range defense',
      kind: 'weapon',
      rank: 1,
    },
  ];
  game.publishGameOverlay();
  const cards = () =>
    nodesOf(game.overlay(960, 540))
      .filter((node) => node.type === 'lumen-outpost/upgrade#Card')
      .map((node) => node.args);
  const [card] = cards();
  assert.ok(card);
  assert.equal(card.title, 'Orbit Blades');
  assert.equal(card.rankLabel, 'Rank 1 / 4');
  assert.equal(card.index, 0);
  assert.equal(card.mobile, false);
  game.game.xp = game.game.xpNeeded;
  card.onPressed();
  assert.equal(game.game.player.weapons.orbit, 1);
  assert.equal(
    game.orbit.value,
    1,
    'accepted choice immediately publishes the HUD rank',
  );
  assert.equal(game.game.phase, 'upgrade', 'banked XP opens another choice');
  assert.equal(game.level.value, 2);
  const nextCard = cards().find((card) => card.title === 'Orbit Blades');
  assert.ok(nextCard);
  assert.equal(nextCard.rankLabel, 'Rank 2 / 4');
  nextCard.onPressed();
  assert.equal(game.orbit.value, 2);
  assert.equal(game.game.phase, 'playing');
  assert.equal(game.updates, 0, 'choosing an upgrade keeps the game shell mounted');
});

test('async asset ownership closes stale/failed results and transfers retry ownership', async () => {
  function images() {
    const image = () => ({
      width: 400,
      height: 200,
      closes: 0,
      close() {
        this.closes++;
      },
    });
    return { actors: image(), floor: image() };
  }
  let complete;
  globalThis.__sceneLoad = () =>
    new Promise((resolve) => {
      complete = resolve;
    });
  const stale = state();
  const pending = stale.load();
  const ignored = images();
  stale.mounted = false;
  complete(ignored);
  await pending;
  assert.equal(ignored.actors.closes, 1);
  assert.equal(ignored.floor.closes, 1);

  const pendingLoads = [];
  globalThis.__sceneLoad = () => new Promise((resolve) => pendingLoads.push(resolve));
  const superseded = state(),
    oldAssets = images(),
    newAssets = images();
  const oldLoad = superseded.load(),
    newLoad = superseded.load();
  pendingLoads[0](oldAssets);
  await oldLoad;
  assert.equal(oldAssets.actors.closes, 1);
  assert.equal(oldAssets.floor.closes, 1);
  pendingLoads[1](newAssets);
  await newLoad;
  assert.equal(superseded.screen.value, 'title');
  superseded.dispose();
  assert.equal(newAssets.actors.closes, 1);
  assert.equal(newAssets.floor.closes, 1);

  const game = state(),
    bad = images(),
    good = images();
  globalThis.__sceneLoad = () => Promise.resolve(bad);
  globalThis.__failMeasure = true;
  await game.load();
  delete globalThis.__failMeasure;
  assert.equal(game.screen.value, 'error');
  assert.equal(bad.actors.closes, 1);
  assert.equal(bad.floor.closes, 1);
  globalThis.__sceneLoad = () => Promise.resolve(good);
  await game.load();
  assert.equal(game.screen.value, 'title');
  assert.equal(game.atlasError, '');
  assert.equal(good.actors.closes, 0);
  assert.equal(good.floor.closes, 0);
  game.dispose();
  assert.equal(good.actors.closes, 1);
  assert.equal(good.floor.closes, 1);
  delete globalThis.__sceneLoad;
});

test('FPS counts actual draws at 120Hz, resets across pauses and choices, and does no work while off', () => {
  const game = state();
  game.screen.value = 'game';
  let draws = 0;
  game.scene = {
    canvas: {},
    draw() {
      draws++;
    },
    events() {},
    clearEffects() {},
  };
  game.game.step = function () {
    this.tick++;
    this.events = [];
  };
  const parentUpdates = game.updates;
  for (let i = 0; i <= 144; i++) game.tick(1000 + (i * 1000) / 120);
  assert.equal(game.fps.value, undefined);
  assert.equal(game.fpsStarted, undefined);
  assert.equal(game.fpsDraws, 0);
  game.screen.value = 'settings';
  pressSetting(game, 'Show FPS: off');
  game.screen.value = 'game';
  game.clock.reset();
  const baseline = draws;
  for (let i = 0; i <= 122; i++) game.tick(3000 + (i * 1000) / 120);
  assert.ok(
    draws - baseline >= 59 && draws - baseline <= 62,
    '120 rAF callbacks produce about 60 Canvas draws',
  );
  assert.ok(
    game.fps.value >= 59 && game.fps.value <= 61,
    `actual draw FPS ${game.fps.value}`,
  );
  const published = game.fps.value;
  for (let i = 1; i <= 34; i++) game.tick(4017 + (i * 1000) / 120);
  assert.equal(
    game.fps.value,
    published,
    'published reading stays stable within a second',
  );
  assert.equal(
    game.updates,
    parentUpdates,
    'settings and FPS changes keep the game shell mounted',
  );
  game.interrupt();
  assert.equal(game.fps.value, undefined);
  assert.equal(game.fpsStarted, undefined);
  assert.equal(game.fpsDraws, 0);
  game.resume();
  game.tick(30000);
  assert.equal(
    game.fps.value,
    undefined,
    'paused time cannot affect the new sampling window',
  );
  for (let i = 1; i <= 60; i++) game.tick(30000 + (i * 1000) / 60);
  assert.equal(game.fps.value, 60);
  game.game.phase = 'upgrade';
  game.game.offers = [
    { id: 'repair', title: '', description: '', kind: 'repair', rank: 0 },
  ];
  game.choose('repair');
  assert.equal(game.fps.value, undefined);
  assert.equal(game.fpsStarted, undefined);
  game.screen.value = 'settings';
  pressSetting(game, 'Show FPS: on');
  game.screen.value = 'game';
  game.tick(40000);
  assert.equal(game.fpsStarted, undefined);
  assert.equal(game.fpsDraws, 0);
  game.start();
  assert.equal(game.fpsStarted, undefined);
  assert.equal(game.fps.value, undefined);
});

test('language changes localize native controls and inactive FPS immediately', () => {
  const game = state();
  game.screen.value = 'settings';
  pressSetting(game, 'Language: English');
  assert.equal(game.profile.language, 'zh');
  const nodes = nodesOf(game.overlay(960, 540));
  assert.ok(nodes.some((n) => n.type === 'Semantics' && n.label === '语言: 中文'));
  assert.ok(nodes.some((n) => n.type === 'Text' && n.value === '完成'));
  pressSetting(game, '显示帧率: 关闭');
  assert.equal(game.profile.showFps, true);
  const layout = game.build().body.child.builder({}, { maxWidth: 960, maxHeight: 540 });
  const fps = nodesOf(layout).find((n) => n.type === 'Text' && n.value?.read);
  assert.equal(fps.value.read(), 'FPS --');
});
