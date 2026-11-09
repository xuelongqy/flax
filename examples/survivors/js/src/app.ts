import type {} from '@flax/core/host';
import type {} from '@flax/local-storage/globals';
import { Sounds } from './audio';
import { batch, bind, computed, signal, type Signal } from '@flax/core';
import { construct } from '@flax/core/bindings';
import { CanvasView } from '@flax/canvas';
import { Clip, Color, FontWeight, TextAlign } from '@flax/dart/ui';
import {
  getDefaultTargetPlatform,
  TargetPlatform,
  ValueNotifier,
} from '@flax/flutter/foundation';
import {
  Alignment,
  Border,
  BorderRadius,
  BoxDecoration,
  BoxShape,
  EdgeInsets,
  TextStyle,
} from '@flax/flutter/painting';
import { HapticFeedback, KeyDownEvent, KeyUpEvent } from '@flax/flutter/services';
import {
  AppLifecycleListener,
  Center,
  Column,
  Container,
  Expanded,
  FocusNode,
  Flow,
  FlowDelegate,
  HitTestBehavior,
  IgnorePointer,
  Icon,
  MediaQuery,
  KeyboardListener,
  LayoutBuilder,
  Listener,
  MainAxisAlignment,
  MainAxisSize,
  Matrix4,
  Positioned,
  Row,
  SafeArea,
  SingleChildScrollView,
  SizedBox,
  Semantics,
  RepaintBoundary,
  Stack,
  State,
  StatefulWidget,
  Text,
  Wrap,
  WrapAlignment,
  type Widget,
} from '@flax/flutter/widgets';
import {
  CircularProgressIndicator,
  Icons,
  LinearProgressIndicator,
  MaterialApp,
  Scaffold,
  TextButton,
  Tooltip,
} from '@flax/material-ui';
import { Controls, FixedClock } from './control';
import { viewport } from './geometry';
import { CONTENT_VERSION, ENEMIES, LIMITS } from './content';
import {
  maintainPeak,
  preparePeakStep,
  observePeakBolts,
  pilot,
  type PeakCounts,
} from './acceptance';
import { Game, type Offer } from './game';
import { readProfile, type Profile } from './profile';
import { loadSceneAssets, type SceneAssets } from './resources';
import { Scene } from './scene';
import { glyph } from './glyph';
import { strings, offerCopy, type Language } from './i18n';
import { action, chrome, panel, upgradeHeading } from './presentation';

declare const __FLAX_SURVIVORS_ACCEPTANCE__: boolean;

const cyan = Color(0xff63f5f4),
  white = Color(0xffedf8ff),
  dim = Color(0xff9fb6c3);
const ink = Color(0xff101d29),
  border = Color(0xff3e6477),
  red = Color(0xffff5b62),
  unlit = Color(0xff31505d),
  panelInk = Color(0xee101b25),
  scrim = Color(0x99071119);
const label = (s: string, size = 16, color = white): Widget =>
  Text(s, { style: TextStyle({ color, fontSize: size }) });
const weaponCard = (
  name: string,
  icon: 'bolt' | 'orbit' | 'chain',
  rank: Signal<number>,
  size: number,
): Widget =>
  Container({
    width: size,
    height: size,
    decoration: BoxDecoration({
      color: panelInk,
      border: Border.all({ color: cyan, width: 1 }),
      borderRadius: BorderRadius.circular(3),
    }),
    child: Column({
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox({
          child: bind(() => glyph(icon, size * 0.58, rank.value > 0, name)),
        }),
        Row({
          mainAxisAlignment: MainAxisAlignment.center,
          children: [1, 2, 3, 4].map((i) =>
            Container({
              width: size * 0.145,
              height: 3,
              margin: EdgeInsets.all(1),
              decoration: bind(() =>
                BoxDecoration({ color: rank.value >= i ? cyan : unlit }),
              ),
            }),
          ),
        }),
      ],
    }),
  });
const upgradeCardParameters = [
  'title',
  'description',
  'rankLabel',
  'rank',
  'maxRank',
  'index',
  'mobile',
  'reducedMotion',
  'height',
  'icon',
  'actionPainter',
  'glowPainter',
  'onPressed',
].map((name) => ({ name, required: true }));

function offerCard(
  offer: Offer,
  index: number,
  choose: () => void,
  height: number,
  language: Language,
  mobile: boolean,
  reducedMotion: boolean,
): Widget {
  const s = strings(language),
    copy = offerCopy(offer, language);
  const maxRank = offer.kind === 'repair' ? 0 : offer.kind === 'weapon' ? 4 : 3;
  const weapon = offer.id.includes('bolt')
    ? 'bolt'
    : offer.id.includes('orbit')
      ? 'orbit'
      : offer.id.includes('chain')
        ? 'chain'
        : undefined;
  const cardHeight = Math.max(186, Math.min(286, height * 0.61));
  const icon = weapon
    ? glyph(weapon, Math.min(76, cardHeight * 0.29), true)
    : Icon(
        offer.id.includes('Speed')
          ? Icons.speed
          : offer.id.includes('Health') || offer.kind === 'repair'
            ? Icons.shield
            : Icons.electric_bolt,
        { size: Math.min(68, cardHeight * 0.27), color: cyan },
      );
  return Expanded({
    child: construct(
      'widget',
      'lumen-outpost/upgrade#Card',
      '',
      upgradeCardParameters,
      [],
      {
        title: copy.title,
        description: copy.description,
        rankLabel: maxRank === 0 ? '+20%' : `${s.rank} ${offer.rank} / ${maxRank}`,
        rank: offer.rank,
        maxRank,
        index,
        mobile,
        reducedMotion,
        height: cardHeight,
        icon,
        actionPainter: chrome('action'),
        glowPainter: chrome('glow'),
        onPressed: choose,
      },
    ) as Widget,
  });
}
function closeSceneAssets(assets: SceneAssets): void {
  try {
    assets.actors.close();
  } catch {
    /* Continue releasing the other bitmap. */
  }
  try {
    assets.floor.close();
  } catch {
    /* Session shutdown can make release unavailable. */
  }
}
const time = (s: number): string =>
  `${Math.floor(s / 60)
    .toString()
    .padStart(2, '0')}:${Math.floor(s % 60)
    .toString()
    .padStart(2, '0')}`;

type Host = {
  storageAvailable: boolean;
  acceptance: boolean;
  flushStorage(): Promise<void>;
};
const globals = globalThis as typeof globalThis & {
  __survivorsHost?: Host;
  __survivorsStorageError?: (message: string) => void;
  __survivorsAcceptance?: unknown;
};
export function createGame(): Widget {
  return MaterialApp({ debugShowCheckedModeBanner: false, home: new GameWidget() });
}
class GameWidget extends StatefulWidget {
  createState(): State<GameWidget> {
    return new GameState();
  }
}
class GameState extends State<GameWidget> {
  private game = new Game();
  private scene: Scene | undefined;
  private controls = new Controls();
  private clock = new FixedClock();
  private focus = FocusNode();
  private lifecycle?: AppLifecycleListener;
  private frame: number | undefined;
  private sounds?: Sounds;
  private readonly screen = signal<'loading' | 'error' | 'title' | 'game' | 'settings'>(
    'loading',
  );
  private readonly showingGame = computed(() => this.screen.value === 'game');
  private readonly gameOverlay = signal<Exclude<Game['phase'], 'upgrade'> | Offer[]>(
    'playing',
  );
  private readonly joystickReset = signal(0);
  private previous: 'title' | 'game' = 'title';
  private readonly storageStatus = signal('');
  private readonly audioStatus = signal('');
  private get status(): string {
    const s = strings(this.language.value);
    return [
      this.storageStatus.value
        ? this.writable
          ? s.savingUnavailable
          : s.newerSave
        : '',
      this.audioStatus.value ? s.audioUnavailable : '',
    ]
      .filter(Boolean)
      .join(' · ');
  }
  private atlasError = '';
  private readonly platform = getDefaultTargetPlatform();
  private readonly mobile =
    this.platform === TargetPlatform.android || this.platform === TargetPlatform.iOS;
  private physicalWidth = 960;
  private loadId = 0;
  private readonly health = signal(100);
  private readonly maxHealth = signal(100);
  private readonly xp = signal(0);
  private readonly xpNeeded = signal(1);
  private readonly level = signal(1);
  private readonly seconds = signal(0);
  private readonly cooldown = signal(0);
  private readonly bolt = signal(0);
  private readonly orbit = signal(0);
  private readonly chain = signal(0);
  private readonly fps = signal<number | undefined>(undefined);
  private fpsStarted: number | undefined;
  private fpsDraws = 0;
  private fpsPublications = 0;
  private profile!: Profile;
  private readonly settingsChanged = signal(0);
  private readonly language = computed(() => {
    void this.settingsChanged.value;
    return this.profile.language;
  });
  private readonly showFps = computed(() => {
    void this.settingsChanged.value;
    return this.profile.showFps;
  });
  private writable = true;
  private width = 0;
  private height = 0;
  private padding = { left: 0, top: 0, right: 0, bottom: 0 };
  private layoutBlocked = false;
  private disposed = false;
  private diagnosticLast = 0;
  private peak = false;
  private peakCounts: PeakCounts = { min: [200, 300, 150], max: [200, 300, 150] };
  private peakSteps = 0;
  private originalXpNeeded = 0;
  private samples = {
    update: [] as number[],
    draw: [] as number[],
    interval: [] as number[],
    overflow: false,
    enabled: false,
  };
  private diagnosticStarted = 0;
  private uiCounts = { builds: 0, layouts: 0, hudPublishes: 0, hudChanges: 0 };
  override initState(): void {
    super.initState();
    try {
      const result = readProfile(localStorage.getItem('profile'), !this.mobile);
      this.profile = result.profile;
      this.writable = result.writable;
      if (!this.writable)
        this.storageStatus.value = 'Newer save preserved; settings not saved.';
    } catch {
      this.profile = readProfile(null, !this.mobile).profile;
      this.storageStatus.value = 'Saving unavailable.';
    }
    this.focus.addListener(this.focusChanged);
    this.lifecycle = AppLifecycleListener({
      onInactive: this.interrupt,
      onHide: this.interrupt,
      onPause: this.interrupt,
      onDetach: this.interrupt,
    });
    globals.__survivorsStorageError = (_message) => {
      if (this.mounted) this.storageStatus.value = 'Saving unavailable.';
    };
    if (__FLAX_SURVIVORS_ACCEPTANCE__ && globals.__survivorsHost?.acceptance)
      globals.__survivorsAcceptance = {
        snapshot: () => ({
          screen: this.screen.value,
          phase: this.game.phase,
          seed: this.game.seed,
          contentVersion: CONTENT_VERSION,
          tick: this.game.tick,
          hp: this.game.player.hp,
          guardiansDefeated: this.game.guardiansDefeated,
          x: this.game.player.x,
          y: this.game.player.y,
          viewport: { width: this.width, height: this.height },
          camera: this.game.camera,
          canvas: this.scene
            ? { width: this.scene.canvas.width, height: this.scene.canvas.height }
            : null,
          inputHeld: this.controls.held,
          pulseCooldown: this.game.player.pulseCooldown,
          profile: { ...this.profile },
          storageStatus: this.storageStatus.value,
          audioStatus: this.audioStatus.value,
          diagnostics: this.samples,
          uiCounts: this.uiCounts,
          fps: {
            enabled: this.profile.showFps,
            value: this.fps.value ?? null,
            draws: this.fpsDraws,
            windowStart: this.fpsStarted ?? null,
            publications: this.fpsPublications,
          },
          discardedSeconds: this.clock.discarded,
          peak: {
            active: this.peak,
            weapons: { ...this.game.player.weapons },
            steps: this.peakSteps,
            counts: this.peakCounts,
            particles: this.scene?.peakParticleCount ?? 0,
          },
          resources: {
            atlas: !this.disposed && !!this.scene,
            frame: this.frame !== undefined,
            audioPlayers: this.sounds?.playerCount ?? 0,
          },
        }),
        command: (name: string) => this.fixture(name),
        pilot: () => pilot(this.game),
      };
    try {
      this.sounds = new Sounds((_message) => {
        if (this.mounted)
          this.audioStatus.value = 'Audio unavailable; playing silently.';
      }, this.platform === TargetPlatform.android);
      void this.sounds.load();
    } catch {
      this.audioStatus.value = 'Audio unavailable; playing silently.';
    }
    void this.load();
  }
  private focusChanged = (): void => {
    if (!this.focus.hasFocus) this.interrupt();
  };
  private async load(): Promise<void> {
    const id = ++this.loadId;
    this.screen.value = 'loading';
    this.atlasError = '';
    let assets: Awaited<ReturnType<typeof loadSceneAssets>> | undefined;
    let nextScene: Scene | undefined;
    try {
      assets = await loadSceneAssets();
      if (!this.mounted || id !== this.loadId) {
        closeSceneAssets(assets);
        assets = undefined;
        return;
      }
      nextScene = new Scene(assets);
      assets = undefined;
      nextScene.draw(
        this.game,
        this.profile.quality,
        this.physicalWidth,
        this.width || 960,
        this.profile.reducedMotion,
      );
      this.scene?.dispose();
      this.scene = nextScene;
      nextScene = undefined;
      this.setState(() => {
        this.screen.value = 'title';
      });
    } catch (e) {
      nextScene?.dispose();
      if (assets) closeSceneAssets(assets);
      if (this.mounted && id === this.loadId) {
        this.atlasError = 'Asset loading failed. Please retry.';
        this.screen.value = 'error';
      }
    }
  }
  private save(): void {
    if (!this.writable) return;
    try {
      localStorage.setItem('profile', JSON.stringify(this.profile));
      void globals.__survivorsHost?.flushStorage().catch(() => {
        if (this.mounted) this.storageStatus.value = 'Saving unavailable.';
      });
    } catch {
      this.storageStatus.value = 'Saving unavailable.';
    }
  }
  private clearControls(): void {
    const { active } = this.controls.joystick;
    this.controls.clear();
    if (active && !this.disposed) this.joystickReset.value++;
  }
  private publishGameOverlay(): void {
    this.gameOverlay.value =
      this.game.phase === 'upgrade' ? this.game.offers : this.game.phase;
  }
  private stop(): void {
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    this.frame = undefined;
    this.clock.reset();
    this.resetFps();
    this.clearControls();
    this.diagnosticLast = 0;
    this.sounds?.pause();
  }
  private interrupt = (): void => {
    const wasPlaying =
      this.screen.value === 'game' &&
      (this.game.phase === 'playing' || this.game.phase === 'upgrade');
    if (wasPlaying) this.game.pause();
    this.stop();
    if (wasPlaying && this.mounted) this.publishGameOverlay();
  };
  private start(): void {
    if (__FLAX_SURVIVORS_ACCEPTANCE__ && this.peak) this.fixture('stopPeakFixture');
    this.stop();
    this.game = new Game(
      __FLAX_SURVIVORS_ACCEPTANCE__ && globals.__survivorsHost?.acceptance
        ? 1
        : Math.floor(Math.random() * 0x100000000),
    );
    if (this.width > 0 && this.height > 0) {
      const view = viewport(this.width, this.height);
      this.game.setViewport(view.width, view.height);
    }
    if (this.layoutBlocked) this.game.pause();
    batch(() => {
      this.screen.value = 'game';
      this.publishHud();
      this.publishGameOverlay();
    });
    this.scene?.clearEffects();
    this.scene?.draw(
      this.game,
      this.profile.quality,
      this.physicalWidth,
      this.width || 960,
      this.profile.reducedMotion,
    );
    this.focus.requestFocus();
    if (!this.layoutBlocked) {
      this.sounds?.play('music', this.profile.music);
      this.frame = requestAnimationFrame(this.tick);
    }
  }
  private resume(): void {
    if (this.layoutBlocked) return;
    this.clearControls();
    this.game.resume();
    this.clock.reset();
    this.resetFps();
    this.publishGameOverlay();
    this.focus.requestFocus();
    if (this.game.phase === 'playing') {
      this.sounds?.play('music', this.profile.music);
      this.frame = requestAnimationFrame(this.tick);
    }
  }
  private resetFps(): void {
    this.fpsStarted = undefined;
    this.fpsDraws = 0;
    this.fps.value = undefined;
  }
  private countDraw(now: number): void {
    if (!this.profile.showFps) return;
    // The first actual draw anchors the active window; rAF-only callbacks are excluded.
    if (this.fpsStarted === undefined) {
      this.fpsStarted = now;
      return;
    }
    this.fpsDraws++;
    const elapsed = now - this.fpsStarted;
    if (elapsed < 1000) return;
    this.fps.value = Math.round((this.fpsDraws * 1000) / elapsed);
    if (__FLAX_SURVIVORS_ACCEPTANCE__) this.fpsPublications++;
    this.fpsStarted = now;
    this.fpsDraws = 0;
  }
  private sample(kind: 'update' | 'draw' | 'interval', value: number): void {
    if (!__FLAX_SURVIVORS_ACCEPTANCE__ || !globals.__survivorsHost?.acceptance) return;
    if (!this.samples.enabled || this.samples.overflow) return;
    if (
      performance.now() - this.diagnosticStarted > 15 * 60 * 1000 ||
      this.samples[kind].length >= 144000
    ) {
      this.samples.overflow = true;
      return;
    }
    this.samples[kind].push(value);
  }
  private haptic(action: () => Promise<void>): void {
    if (!this.mobile || !this.profile.haptics) return;
    try {
      void action().catch(() => {});
    } catch {
      // Unsupported feedback must not interrupt play.
    }
  }
  private publishHud(): void {
    const game = this.game;
    if (__FLAX_SURVIVORS_ACCEPTANCE__ && this.samples.enabled) {
      this.uiCounts.hudPublishes++;
      this.uiCounts.hudChanges +=
        Number(this.health.value !== Math.ceil(game.player.hp)) +
        Number(this.maxHealth.value !== game.player.maxHp) +
        Number(this.xp.value !== game.xp) +
        Number(this.xpNeeded.value !== game.xpNeeded) +
        Number(this.level.value !== game.level) +
        Number(this.seconds.value !== Math.floor(game.elapsed)) +
        Number(this.cooldown.value !== Math.ceil(game.player.pulseCooldown * 10)) +
        Number(this.bolt.value !== game.player.weapons.bolt) +
        Number(this.orbit.value !== game.player.weapons.orbit) +
        Number(this.chain.value !== game.player.weapons.chain);
    }
    batch(() => {
      this.health.value = Math.ceil(game.player.hp);
      this.maxHealth.value = game.player.maxHp;
      this.xp.value = game.xp;
      this.xpNeeded.value = game.xpNeeded;
      this.level.value = game.level;
      this.seconds.value = Math.floor(game.elapsed);
      this.cooldown.value = Math.ceil(game.player.pulseCooldown * 10);
      this.bolt.value = game.player.weapons.bolt;
      this.orbit.value = game.player.weapons.orbit;
      this.chain.value = game.player.weapons.chain;
    });
  }
  private tick = (now: number): void => {
    this.frame = undefined;
    if (!this.mounted || this.screen.value !== 'game' || this.game.phase !== 'playing')
      return;
    if (__FLAX_SURVIVORS_ACCEPTANCE__ && this.diagnosticLast)
      this.sample('interval', now - this.diagnosticLast);
    if (__FLAX_SURVIVORS_ACCEPTANCE__) this.diagnosticLast = now;
    const updateStart = __FLAX_SURVIVORS_ACCEPTANCE__ ? performance.now() : 0;
    let guardianCleared = false;
    this.clock.advance(now, () => {
      if (this.game.phase !== 'playing') return;
      if (__FLAX_SURVIVORS_ACCEPTANCE__ && this.peak) preparePeakStep(this.game);
      this.game.step(this.controls.consume());
      if (__FLAX_SURVIVORS_ACCEPTANCE__ && this.peak) {
        observePeakBolts(this.game, this.peakCounts);
        maintainPeak(this.game, this.peakCounts);
        this.peakSteps++;
      }
      this.scene?.events(
        this.game.events,
        this.profile.reducedMotion,
        this.profile.quality,
        this.game.elapsed,
      );
      for (const event of this.game.events) {
        if (event.type === 'hit' && event.target === 'player')
          this.haptic(() => HapticFeedback.lightImpact());
        if (event.type === 'guardian') guardianCleared = true;
        if (event.type === 'pulse')
          this.haptic(() =>
            this.platform === TargetPlatform.iOS
              ? HapticFeedback.vibrate()
              : HapticFeedback.mediumImpact(),
          );
        const sound = event.type === 'level' ? 'upgrade' : event.type;
        if (sound === 'shot' || sound === 'hit' || sound === 'pulse')
          this.sounds?.play(sound, this.profile.effects);
      }
    });
    if (__FLAX_SURVIVORS_ACCEPTANCE__)
      this.sample('update', performance.now() - updateStart);
    if (this.clock.drawDue(now) && this.scene) {
      const drawStart = __FLAX_SURVIVORS_ACCEPTANCE__ ? performance.now() : 0;
      this.scene?.draw(
        this.game,
        this.profile.quality,
        this.physicalWidth,
        this.width || 960,
        this.profile.reducedMotion,
      );
      this.countDraw(now);
      if (__FLAX_SURVIVORS_ACCEPTANCE__)
        this.sample('draw', performance.now() - drawStart);
    }
    this.publishHud();
    if (this.game.phase !== 'playing') {
      this.stop();
      this.publishGameOverlay();
      if (this.game.phase === 'upgrade')
        this.sounds?.play(guardianCleared ? 'win' : 'upgrade', this.profile.effects);
      if (this.game.phase === 'lost') {
        this.sounds?.play('lose', this.profile.effects);
        this.profile.bestScore = Math.max(this.profile.bestScore, this.game.score);
        this.profile.longest = Math.max(
          this.profile.longest,
          Math.floor(this.game.elapsed),
        );
        this.save();
      }
      return;
    }
    if (guardianCleared) this.sounds?.play('win', this.profile.effects);
    this.frame = requestAnimationFrame(this.tick);
  };
  private choose(id: string): void {
    if (this.game.chooseUpgrade(id)) {
      this.resetFps();
      this.publishHud();
      this.haptic(() => HapticFeedback.selectionClick());
      this.clearControls();
      this.publishGameOverlay();
      if (this.game.phase === 'playing') {
        this.clock.reset();
        this.focus.requestFocus();
        this.sounds?.play('music', this.profile.music);
        this.frame = requestAnimationFrame(this.tick);
      }
    }
  }
  private key(event: import('@flax/flutter/services').KeyEvent): void {
    const key = event.logicalKey.keyLabel.toLowerCase();
    const down = event instanceof KeyDownEvent;
    const up = event instanceof KeyUpEvent;
    if (!down && !up) return;
    if (down && key === 'escape' && this.screen.value === 'game') {
      if (this.game.phase === 'playing') this.interrupt();
      else if (this.game.phase === 'paused') this.resume();
      return;
    }
    if (down && this.game.phase === 'upgrade' && /^[123]$/.test(key)) {
      const offer = this.game.offers[Number(key) - 1];
      if (offer) this.choose(offer.id);
      return;
    }
    if (this.screen.value === 'game' && this.game.phase === 'playing')
      this.controls.key(key === ' ' ? 'space' : key, down);
  }
  private fixture(name: string): void {
    if (!__FLAX_SURVIVORS_ACCEPTANCE__) return;
    if (name === 'resetDiagnostics') {
      this.samples = {
        update: [],
        draw: [],
        interval: [],
        overflow: false,
        enabled: true,
      };
      this.diagnosticStarted = performance.now();
      this.diagnosticLast = 0;
      this.uiCounts = { builds: 0, layouts: 0, hudPublishes: 0, hudChanges: 0 };
    } else if (name === 'stopDiagnostics') {
      this.samples.enabled = false;
      this.diagnosticLast = 0;
    } else if (name === 'balancedFixture') {
      this.profile.quality = 'balanced';
      this.scene?.draw(
        this.game,
        this.profile.quality,
        this.physicalWidth,
        this.width || 960,
        this.profile.reducedMotion,
      );
      this.settingsChanged.value++;
    } else if (name === 'peakFixture') {
      if (!this.peak) this.originalXpNeeded = this.game.xpNeeded;
      this.peak = true;
      this.peakSteps = 0;
      this.peakCounts = { min: [200, 300, 150], max: [200, 300, 150] };
      maintainPeak(this.game, this.peakCounts);
      this.peakCounts = { min: [200, 300, 150], max: [200, 300, 150] };
      this.scene?.setPeakParticles(true);
    } else if (name === 'stopPeakFixture') {
      if (this.peak) this.game.xpNeeded = this.originalXpNeeded;
      this.peak = false;
      this.scene?.setPeakParticles(false);
    } else if (name === 'loseFixture') this.game.player.hp = 0;
    else if (name === 'upgradeFixture') this.game.xp = this.game.xpNeeded;
    else if (name === 'guardianClearFixture') {
      const guardian = this.game.enemies.find((enemy) => enemy.kind === 'guardian');
      if (guardian) guardian.hp = 0;
      else if (this.game.enemies.length < LIMITS.enemies)
        this.game.enemies.push({
          id: -1,
          kind: 'guardian',
          x: 0,
          y: 0,
          radius: ENEMIES.guardian.radius,
          hp: 0,
          maxHp: ENEMIES.guardian.hp,
          angle: 0,
          warning: 0,
          hit: 0,
        });
    }
  }
  override build(): Widget {
    if (__FLAX_SURVIVORS_ACCEPTANCE__ && this.samples.enabled) this.uiCounts.builds++;
    return Scaffold({
      backgroundColor: ink,
      body: KeyboardListener({
        focusNode: this.focus,
        autofocus: true,
        onKeyEvent: (e) => this.key(e),
        child: LayoutBuilder({
          builder: (ctx, c) => {
            if (__FLAX_SURVIVORS_ACCEPTANCE__ && this.samples.enabled)
              this.uiCounts.layouts++;
            const w = c.maxWidth,
              h = c.maxHeight;
            if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
              if (
                this.screen.value === 'game' &&
                (this.game.phase === 'playing' || this.game.phase === 'upgrade')
              ) {
                this.game.pause();
                this.stop();
                this.publishGameOverlay();
              } else this.clearControls();
              this.layoutBlocked = true;
              return SizedBox();
            }
            const insets = MediaQuery.paddingOf(ctx);
            const padding = {
              left: insets.left,
              top: insets.top,
              right: insets.right,
              bottom: insets.bottom,
            };
            const safeWidth = Math.max(0, w - padding.left - padding.right),
              safeHeight = Math.max(0, h - padding.top - padding.bottom);
            const paddingChanged =
              padding.left !== this.padding.left ||
              padding.top !== this.padding.top ||
              padding.right !== this.padding.right ||
              padding.bottom !== this.padding.bottom;
            const blocked = this.mobile
              ? h > w || safeWidth <= 0 || safeHeight <= 0
              : safeWidth < 640 || safeHeight < 360;
            const physicalWidth = w * MediaQuery.devicePixelRatioOf(ctx);
            if (
              blocked !== this.layoutBlocked ||
              this.width !== w ||
              this.height !== h ||
              paddingChanged ||
              this.physicalWidth !== physicalWidth
            ) {
              const resized =
                this.width !== 0 &&
                (this.width !== w || this.height !== h || paddingChanged);
              this.width = w;
              this.height = h;
              this.padding = padding;
              this.layoutBlocked = blocked;
              if (
                (blocked || resized) &&
                (this.game.phase === 'playing' || this.game.phase === 'upgrade') &&
                this.screen.value === 'game'
              ) {
                this.game.pause();
                this.stop();
                this.publishGameOverlay();
              }
              const view = viewport(w, h);
              this.game.setViewport(view.width, view.height);
              this.physicalWidth = physicalWidth;
              this.scene?.draw(
                this.game,
                this.profile.quality,
                this.physicalWidth,
                this.width || 960,
                this.profile.reducedMotion,
              );
            }
            const canvas = this.scene
              ? CanvasView(this.scene.canvas, { width: w, height: h })
              : SizedBox({ width: w, height: h });
            if (safeWidth === 0 || safeHeight === 0) return canvas;
            return Center({
              child: SizedBox({
                width: w,
                height: h,
                child: Stack({
                  children: [
                    canvas,
                    Positioned.fill({
                      child: bind(() => {
                        void this.joystickReset.value;
                        return new Joystick(
                          w,
                          h,
                          padding,
                          this.controls,
                          () =>
                            this.game.phase === 'playing' &&
                            this.screen.value === 'game',
                          this.mobile && this.showingGame.value,
                          strings(this.language.value).movementJoystick,
                        );
                      }),
                    }),
                    Positioned.fill({
                      child: SafeArea({
                        child: Stack({
                          children: bind(() =>
                            !blocked && this.showingGame.value
                              ? this.hud(safeHeight)
                              : [],
                          ),
                        }),
                      }),
                    }),
                    Positioned.fill({
                      child: bind(() => {
                        if (!blocked || !this.showingGame.value)
                          return this.overlay(safeWidth, safeHeight);
                        const s = strings(this.language.value);
                        return SafeArea({
                          child: Center({
                            child: panel(
                              label(
                                this.mobile ? s.rotateLandscape : s.enlargeWindow,
                                22,
                              ),
                            ),
                          }),
                        });
                      }),
                    }),
                    Positioned.fill({
                      child: SafeArea({
                        child: Stack({
                          children: [
                            Positioned({
                              right: 12,
                              top: 48,
                              child: IgnorePointer({
                                child: bind(() => {
                                  if (!this.showFps.value) return SizedBox();
                                  const s = strings(this.language.value);
                                  return Container({
                                    padding: EdgeInsets.symmetric({
                                      horizontal: 7,
                                      vertical: 3,
                                    }),
                                    color: panelInk,
                                    child: Text(
                                      bind(
                                        () =>
                                          `${s.fps} ${this.fps.value ?? s.fpsInactive}`,
                                      ),
                                      {
                                        style: TextStyle({
                                          color: dim,
                                          fontSize: 10,
                                          fontWeight: FontWeight.bold,
                                        }),
                                      },
                                    ),
                                  });
                                }),
                              }),
                            }),
                            Positioned({
                              left: 12,
                              right: 12,
                              bottom: 4,
                              child: IgnorePointer({
                                child: bind(() => {
                                  const status = this.status;
                                  return status ? label(status, 12, white) : SizedBox();
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
        }),
      }),
    });
  }
  private hud(height: number): Widget[] {
    const s = strings(this.language.value);
    const scale = Math.max(1, Math.min(1.35, height / 393));
    const headerHeight = 22 * scale;
    const cardSize = 33 * scale;
    return [
      Positioned({
        left: 10,
        right: 70,
        top: 6,
        child: Row({
          children: [
            Container({
              width: 198,
              height: headerHeight,
              padding: EdgeInsets.symmetric({ horizontal: 5 }),
              decoration: BoxDecoration({
                color: panelInk,
                border: Border.all({ color: border }),
                borderRadius: BorderRadius.circular(3),
              }),
              child: Row({
                children: [
                  Icon(Icons.favorite, { size: 16 * scale, color: red }),
                  SizedBox({ width: 6 }),
                  Expanded({
                    child: LinearProgressIndicator({
                      value: bind(() =>
                        this.maxHealth.value > 0
                          ? Math.max(
                              0,
                              Math.min(1, this.health.value / this.maxHealth.value),
                            )
                          : 0,
                      ),
                      color: cyan,
                      backgroundColor: unlit,
                      semanticsLabel: s.health,
                      minHeight: 8 * scale,
                      borderRadius: BorderRadius.circular(2),
                    }),
                  }),
                  SizedBox({ width: 6 }),
                  Text(
                    bind(() => `${this.health.value}/${this.maxHealth.value}`),
                    {
                      style: TextStyle({
                        color: white,
                        fontSize: 12 * scale,
                        fontWeight: FontWeight.bold,
                      }),
                    },
                  ),
                ],
              }),
            }),
            SizedBox({ width: 10 }),
            Expanded({
              child: LinearProgressIndicator({
                value: bind(() =>
                  this.xpNeeded.value > 0
                    ? Math.max(0, Math.min(1, this.xp.value / this.xpNeeded.value))
                    : 0,
                ),
                color: cyan,
                backgroundColor: unlit,
                minHeight: 4,
                borderRadius: BorderRadius.circular(2),
                semanticsLabel: s.experience,
              }),
            }),
            Container({
              height: headerHeight,
              padding: EdgeInsets.symmetric({ horizontal: 8 }),
              decoration: BoxDecoration({
                color: panelInk,
                border: Border.all({ color: border }),
                borderRadius: BorderRadius.circular(3),
              }),
              child: Center({
                child: Text(
                  bind(() => `${s.level} ${this.level.value}`),
                  {
                    style: TextStyle({
                      color: white,
                      fontSize: 12 * scale,
                      fontWeight: FontWeight.bold,
                    }),
                  },
                ),
              }),
            }),
          ],
        }),
      }),
      Positioned({
        left: 10,
        top: 11 + headerHeight,
        child: IgnorePointer({
          child: Row({
            children: [
              weaponCard(s.boltWeapon, 'bolt', this.bolt, cardSize),
              SizedBox({ width: 5 }),
              weaponCard(s.orbitWeapon, 'orbit', this.orbit, cardSize),
              SizedBox({ width: 5 }),
              weaponCard(s.chainWeapon, 'chain', this.chain, cardSize),
            ],
          }),
        }),
      }),
      Positioned({
        left: 0,
        right: 0,
        top: 8 + headerHeight,
        child: IgnorePointer({
          child: Center({
            child: Text(
              bind(() => time(this.seconds.value)),
              {
                style: TextStyle({
                  color: white,
                  fontSize: 18 * scale,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 1.5,
                }),
              },
            ),
          }),
        }),
      }),
      Positioned({
        right: 2,
        top: 0,
        child: Tooltip({
          message: s.pause,
          child: TextButton({
            onPressed: this.interrupt,
            child: Semantics({
              label: s.pause,
              child: SizedBox({
                width: 44,
                height: 44,
                child: Center({ child: glyph('pause', 16) }),
              }),
            }),
          }),
        }),
      }),
      ...(!this.mobile
        ? [
            Positioned({
              left: 140,
              right: 140,
              bottom: 12,
              child: IgnorePointer({
                child: Center({
                  child: Container({
                    padding: EdgeInsets.symmetric({ horizontal: 12, vertical: 4 }),
                    decoration: BoxDecoration({
                      color: panelInk,
                      border: Border.all({ color: border }),
                      borderRadius: BorderRadius.circular(6),
                    }),
                    child: Text(s.hudKeyboardHelp, {
                      style: TextStyle({
                        color: white,
                        fontSize: 11,
                        fontWeight: FontWeight.bold,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          ]
        : []),
      Positioned({
        right: 12,
        bottom: 10,
        child: Tooltip({
          message: s.pulse,
          child: TextButton({
            onPressed: () => {
              if (this.game.phase === 'playing') this.controls.skill();
            },
            child: RepaintBoundary({
              child: Container({
                width: 88,
                height: 88,
                decoration: bind(() =>
                  BoxDecoration({
                    color: Color(0x55101d29),
                    shape: BoxShape.circle,
                    border: Border.all({
                      color: this.cooldown.value === 0 ? cyan : border,
                      width: this.cooldown.value === 0 ? 2 : 1,
                    }),
                  }),
                ),
                child: Stack({
                  children: [
                    Positioned.fill({
                      child: CircularProgressIndicator({
                        value: bind(() => Math.max(0, 1 - this.cooldown.value / 80)),
                        color: bind(() => (this.cooldown.value <= 15 ? cyan : dim)),
                        backgroundColor: unlit,
                        strokeWidth: 2,
                        semanticsLabel: s.pulseCooldown,
                      }),
                    }),
                    Positioned.fill({
                      child: Center({
                        child: SizedBox({
                          child: bind(() =>
                            glyph('crown', 40, this.cooldown.value <= 15, s.pulse),
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        }),
      }),
    ];
  }
  private overlay(width: number, height: number): Widget {
    const screen = this.screen.value;
    const gameOverlay = screen === 'game' ? this.gameOverlay.value : undefined;
    const g = this.game,
      language = this.language.value,
      s = strings(language);
    const gap = (n = 10): Widget => SizedBox({ height: n });
    const heading = (text: string, size = 28): Widget =>
      Text(text, {
        textAlign: TextAlign.center,
        style: TextStyle({
          color: cyan,
          fontSize: size,
          fontWeight: FontWeight.bold,
          letterSpacing: 2,
        }),
      });
    const menuButton = (
      text: string,
      run: () => void,
      primary = false,
      width = 216,
    ): Widget =>
      SizedBox({
        width,
        child: action(
          Center({
            child: Text(text, {
              style: TextStyle({
                color: primary ? white : cyan,
                fontSize: 16,
                fontWeight: FontWeight.bold,
                letterSpacing: 1,
              }),
            }),
          }),
          run,
          { primary, reducedMotion: this.profile.reducedMotion },
        ),
      });
    const openSettings = (): void => {
      this.previous = this.screen.value === 'title' ? 'title' : 'game';
      this.screen.value = 'settings';
    };
    const metric = (name: string, value: string): Widget =>
      Expanded({
        child: Column({
          children: [
            label(name, 10, dim),
            gap(4),
            Text(value, {
              style: TextStyle({
                color: white,
                fontSize: 22,
                fontWeight: FontWeight.bold,
              }),
            }),
          ],
        }),
      });
    let children: Widget[] = [];
    let framed = true,
      overlayWidth = 576;
    if (screen === 'loading') children = [heading(s.loading, 22)];
    else if (screen === 'error')
      children = [
        heading(s.assetError, 19),
        gap(20),
        menuButton(
          s.retry,
          () => {
            void this.load();
          },
          true,
        ),
      ];
    else if (screen === 'title') {
      framed = false;
      overlayWidth = 680;
      const titleSize = Math.min(46, Math.max(28, width * 0.055));
      children = [
        label(s.systems, 10, cyan),
        gap(14),
        Row({
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('LUMEN ', {
              style: TextStyle({
                color: cyan,
                fontSize: titleSize,
                fontWeight: FontWeight.bold,
                letterSpacing: 2,
              }),
            }),
            Text('OUTPOST', {
              style: TextStyle({
                color: white,
                fontSize: titleSize,
                fontWeight: FontWeight.bold,
                letterSpacing: 2,
              }),
            }),
          ],
        }),
        gap(8),
        Text(s.objective, {
          textAlign: TextAlign.center,
          style: TextStyle({ color: white, fontSize: 15 }),
        }),
        gap(22),
        Wrap({
          alignment: WrapAlignment.center,
          spacing: 12,
          runSpacing: 10,
          children: [
            menuButton(s.start, () => this.start(), true, 232),
            menuButton(s.settings, openSettings, false, 166),
          ],
        }),
        gap(20),
        SizedBox({
          width: 420,
          child: Row({
            children: [
              metric(s.best, String(this.profile.bestScore)),
              metric(s.longest, time(this.profile.longest)),
            ],
          }),
        }),
        gap(16),
        Text(this.mobile ? s.touchHelp : s.keyboardHelp, {
          textAlign: TextAlign.center,
          style: TextStyle({ color: dim, fontSize: 12 }),
        }),
      ];
    } else if (screen === 'settings') {
      void this.settingsChanged.value;
      overlayWidth = 728;
      const cellWidth =
        width >= 580 ? Math.min(322, (width - 92) / 2) : Math.max(180, width - 88);
      const change =
        (run: () => void): (() => void) =>
        () =>
          batch(() => {
            run();
            this.settingsChanged.value++;
          });
      const setting = (name: string, value: string, run: () => void): Widget =>
        SizedBox({
          width: cellWidth,
          child: action(
            Row({
              children: [
                Expanded({ child: label(name, 13, white) }),
                Text(value, {
                  style: TextStyle({
                    color: cyan,
                    fontSize: 13,
                    fontWeight: FontWeight.bold,
                  }),
                }),
              ],
            }),
            change(run),
            {
              semanticLabel: `${name}: ${value}`,
              reducedMotion: this.profile.reducedMotion,
              padding: 14,
            },
          ),
        });
      const group = (name: string, cells: Widget[]): Widget =>
        Column({
          children: [
            Row({
              children: [
                label(name, 9, dim),
                SizedBox({ width: 8 }),
                Expanded({ child: Container({ height: 1, color: border }) }),
              ],
            }),
            gap(7),
            Wrap({ spacing: 10, runSpacing: 7, children: cells }),
          ],
        });
      const display = [
        setting(
          s.language,
          this.profile.language === 'zh' ? s.chinese : s.english,
          () => {
            this.profile.language = this.profile.language === 'zh' ? 'en' : 'zh';
          },
        ),
        setting(s.showFps, this.profile.showFps ? s.on : s.off, () => {
          this.profile.showFps = !this.profile.showFps;
          this.resetFps();
        }),
        setting(s.quality, s[this.profile.quality], () => {
          this.profile.quality =
            this.profile.quality === 'balanced' ? 'detailed' : 'balanced';
        }),
        setting(s.reducedMotion, this.profile.reducedMotion ? s.on : s.off, () => {
          this.profile.reducedMotion = !this.profile.reducedMotion;
        }),
      ];
      children = [
        heading(s.settings.toUpperCase(), 24),
        gap(14),
        group(s.displayGroup, display),
        gap(12),
        group(s.audioGroup, [
          setting(s.music, `${Math.round(this.profile.music * 100)}%`, () => {
            this.profile.music = ((Math.round(this.profile.music * 4) + 1) % 5) / 4;
          }),
          setting(s.effects, `${Math.round(this.profile.effects * 100)}%`, () => {
            this.profile.effects = ((Math.round(this.profile.effects * 4) + 1) % 5) / 4;
          }),
        ]),
        ...(this.mobile
          ? [
              gap(12),
              group(s.controlsGroup, [
                setting(s.haptics, this.profile.haptics ? s.on : s.off, () => {
                  this.profile.haptics = !this.profile.haptics;
                }),
              ]),
            ]
          : []),
        gap(10),
        label(s.fpsHelp, 10, dim),
        gap(12),
        menuButton(
          s.done,
          () => {
            this.save();
            this.screen.value = this.previous;
          },
          true,
          180,
        ),
      ];
    } else if (gameOverlay === 'paused')
      children = [
        label(s.systems, 10, dim),
        gap(12),
        heading(s.paused, 34),
        gap(8),
        label(s.pausedHelp, 13, dim),
        gap(20),
        menuButton(s.resume, () => this.resume(), true),
        gap(10),
        Wrap({
          alignment: WrapAlignment.center,
          spacing: 10,
          runSpacing: 10,
          children: [
            menuButton(s.settings, openSettings, false, 172),
            menuButton(s.restart, () => this.start(), false, 172),
          ],
        }),
      ];
    else if (Array.isArray(gameOverlay)) {
      framed = false;
      overlayWidth = 760;
      children = [
        SizedBox({ width: 380, child: upgradeHeading(heading(s.levelUp, 28)) }),
        gap(5),
        label(s.chooseUpgrade, 14),
        gap(16),
        Row({
          children: gameOverlay.map((offer, index) =>
            offerCard(
              offer,
              index,
              () => this.choose(offer.id),
              height,
              language,
              this.mobile,
              this.profile.reducedMotion,
            ),
          ),
        }),
        ...(!this.mobile ? [gap(10), label(s.upgradeHint, 10, dim)] : []),
      ];
    } else if (gameOverlay === 'lost')
      children = [
        label(s.resultReport, 10, dim),
        gap(12),
        heading(s.signalLost, width < 700 ? 25 : 30),
        gap(10),
        label(s.droneDisabled, 13, dim),
        gap(20),
        Row({
          children: [
            metric(s.score, String(g.score)),
            metric(s.elapsed, time(g.elapsed)),
            metric(s.kills, String(g.kills)),
            metric(s.guardians, String(g.guardiansDefeated)),
          ],
        }),
        gap(20),
        Wrap({
          alignment: WrapAlignment.center,
          spacing: 10,
          runSpacing: 10,
          children: [
            menuButton(s.restart, () => this.start(), true, 190),
            menuButton(
              s.mainMenu,
              () => {
                this.screen.value = 'title';
              },
              false,
              190,
            ),
          ],
        }),
      ];
    if (!children.length) return SizedBox();
    const content = Column({
      mainAxisAlignment: MainAxisAlignment.center,
      mainAxisSize: MainAxisSize.min,
      children,
    });
    return Stack({
      children: [
        Positioned.fill({ child: Container({ color: scrim }) }),
        SafeArea({
          child: Center({
            child: Container({
              padding: EdgeInsets.all(12),
              child: SizedBox({
                width: Math.max(1, Math.min(width - 24, overlayWidth)),
                child: SingleChildScrollView({
                  child: framed
                    ? panel(content, screen === 'settings' ? 18 : 24)
                    : content,
                }),
              }),
            }),
          }),
        }),
      ],
    });
  }
  override dispose(): void {
    this.disposed = true;
    this.stop();
    this.loadId++;
    this.scene?.dispose();
    this.sounds?.dispose();
    this.lifecycle?.dispose();
    this.focus.removeListener(this.focusChanged);
    this.focus.dispose();
    delete globals.__survivorsStorageError;
    super.dispose();
  }
}

class Joystick extends StatefulWidget {
  constructor(
    readonly width: number,
    readonly height: number,
    readonly padding: { left: number; bottom: number },
    readonly controls: Controls,
    readonly active: () => boolean,
    readonly showStick: boolean,
    readonly semanticLabel: string,
  ) {
    super();
  }
  createState(): State<Joystick> {
    return new JoystickState();
  }
}

class JoystickState extends State<Joystick> {
  // Controls owns the position. This only schedules a thumb repaint.
  private readonly thumbRepaint = ValueNotifier(0);

  override dispose(): void {
    this.thumbRepaint.dispose();
    super.dispose();
  }

  override build(): Widget {
    const { width: w, height: h, padding, controls, active, showStick } = this.widget;
    const stick = controls.joystick;
    const size = 116,
      radius = size / 2,
      inset = 16,
      stroke = 1;
    const thumb = 32,
      travel = 30,
      directionSize = 20;
    const idleX = padding.left + inset + radius,
      idleY = h - padding.bottom - inset - radius;
    const centerX = stick.active ? stick.originX : idleX;
    const centerY = stick.active ? stick.originY : idleY;
    const innerSize = size - stroke * 2;
    const directionOffset = (innerSize - directionSize) / 2;
    return Stack({
      children: [
        Listener({
          behavior: HitTestBehavior.opaque,
          onPointerDown: (e) => {
            const x = e.localPosition.dx,
              y = e.localPosition.dy;
            if (!active() || x >= w / 2) return;
            const fixed = showStick && Math.hypot(x - idleX, y - idleY) <= radius;
            if (!controls.pointerDown(e.pointer, fixed ? idleX : x, fixed ? idleY : y))
              return;
            controls.pointerMove(e.pointer, x, y);
            this.setState(() => {});
          },
          onPointerMove: (e) => {
            if (
              active() &&
              controls.pointerMove(e.pointer, e.localPosition.dx, e.localPosition.dy)
            )
              this.thumbRepaint.value++;
          },
          onPointerUp: (e) => {
            if (controls.pointerUp(e.pointer)) this.setState(() => {});
          },
          onPointerCancel: (e) => {
            if (controls.pointerUp(e.pointer)) this.setState(() => {});
          },
          child: SizedBox({ width: w, height: h }),
        }),
        ...(showStick || (stick.active && active())
          ? [
              Positioned({
                left: centerX - radius,
                top: centerY - radius,
                child: Semantics({
                  label: this.widget.semanticLabel,
                  child: IgnorePointer({
                    child: Container({
                      width: size,
                      height: size,
                      decoration: BoxDecoration({
                        color: Color(0x40101d29),
                        border: Border.all({ color: Color(0xaaaed5e1), width: stroke }),
                        shape: BoxShape.circle,
                      }),
                      child: Stack({
                        children: [
                          Positioned({
                            left: directionOffset,
                            top: 4,
                            child: Icon(Icons.keyboard_arrow_up, {
                              size: directionSize,
                              color: dim,
                            }),
                          }),
                          Positioned({
                            left: directionOffset,
                            bottom: 4,
                            child: Icon(Icons.keyboard_arrow_down, {
                              size: directionSize,
                              color: dim,
                            }),
                          }),
                          Positioned({
                            left: 4,
                            top: directionOffset,
                            child: Icon(Icons.keyboard_arrow_left, {
                              size: directionSize,
                              color: dim,
                            }),
                          }),
                          Positioned({
                            right: 4,
                            top: directionOffset,
                            child: Icon(Icons.keyboard_arrow_right, {
                              size: directionSize,
                              color: dim,
                            }),
                          }),
                          Positioned.fill({
                            child: Flow.unwrapped({
                              clipBehavior: Clip.none,
                              delegate: FlowDelegate.implement(
                                [{ repaint: this.thumbRepaint }],
                                {
                                  paintChildren(context) {
                                    const { x, y } = controls.joystick;
                                    context.paintChild(0, {
                                      transform: Matrix4.translationValues(
                                        x * travel,
                                        y * travel,
                                        0,
                                      ),
                                    });
                                  },
                                  shouldRepaint: () => true,
                                },
                              ),
                              children: [
                                Center({
                                  child: Container({
                                    width: thumb,
                                    height: thumb,
                                    decoration: BoxDecoration({
                                      shape: BoxShape.circle,
                                      color: stick.active ? cyan : dim,
                                      border: Border.all({ color: white }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            ]
          : []),
      ],
    });
  }
}
